# Development container for the Hugo site. See .devcontainer/README.md.
#
# Node 22 matches the Node bundled in the ghcr.io/gohugoio/hugo image this
# replaced; the repo's tools/ and tests/ use only Node built-ins. The site uses
# no Sass, PostCSS, or Hugo modules, so Dart Sass and Go are not installed.
FROM node:22-trixie-slim AS dev

# just: runs the Justfile build targets.
# imagemagick, svgo (below): image and SVG optimization for static assets.
# procps: the Codex app-server daemon reads process start times with ps.
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    bubblewrap ca-certificates curl fd-find fish fzf git gnupg imagemagick jq just \
    openssh-client procps ripgrep wget \
  && ln -s "$(command -v fdfind)" /usr/local/bin/fd \
  && rm -rf /var/lib/apt/lists/*

# Hugo extended and Pandoc 3.6.4 (plus its custom-writer docs). The version
# pins live in these scripts, which CI and the Cloud Agent VM also use.
COPY tools/cloud-install.sh tools/install-pandoc.sh /tmp/tools/
RUN sh /tmp/tools/cloud-install.sh \
  && rm -rf /tmp/tools \
  && hugo version

RUN npm install -g @openai/codex svgo \
  && npm cache clean --force

# node:* ships a `node` user at UID 1000; remove it so the shared `code` user
# can take that UID.
RUN userdel -r node \
  && groupadd --gid 1000 code \
  && useradd --uid 1000 --gid code --create-home --shell /usr/bin/fish code

USER code
# Agent state lives in named volumes; a new volume inherits this ownership.
# CLAUDE_CONFIG_DIR also moves ~/.claude.json inside the volume.
ENV CLAUDE_CONFIG_DIR=/home/code/.claude \
    CODEX_HOME=/home/code/.codex \
    PATH=/home/code/.local/bin:$PATH
RUN mkdir -p "$CLAUDE_CONFIG_DIR" "$CODEX_HOME" \
  && curl -fsSL https://claude.ai/install.sh | bash \
  && claude --version \
  && codex --version
