FROM ghcr.io/gohugoio/hugo:v0.164.0 AS hugo_base

# Fix broken non-root user
USER 0
RUN sed -i \
    's|^hugo:x:1000:65533:hugo:/var/hugo:/sbin/nologin$|hugo:x:1000:1000:hugo:/var/hugo:/bin/sh|' \
    /etc/passwd

USER hugo:hugo

FROM hugo_base AS hugo_dev

USER 0

# procps-ng: the Codex app-server daemon reads process start times with
# `ps -o lstart= -p <pid>`, which BusyBox ps does not support.
RUN apk add bash fish fzf fd git gnupg ripgrep just jq bubblewrap imagemagick imagemagick-webp imagemagick-jpeg pandoc-cli curl procps-ng \
    && mkdir -p /usr/local/share/doc/pandoc \
    && curl -fsSL -o /usr/local/share/doc/pandoc/custom-writers.html https://pandoc.org/custom-writers.html \
    && curl -fsSL -o /usr/local/share/doc/pandoc/lua-filters.html https://pandoc.org/lua-filters.html \
    && curl -fsSL -o /usr/local/share/doc/pandoc/MANUAL.html https://pandoc.org/MANUAL.html

RUN npm install -g @openai/codex svgo \
  && npm cache clean --force

# Agent state lives in the named volumes shared by every devcontainer on this
# machine. They hold absolute paths, so they mount at /home/code like everywhere
# else, even though this image's user is hugo with home /var/hugo. A new volume
# inherits this ownership.
RUN mkdir -p /home/code/.claude /home/code/.codex \
  && chown -R hugo:hugo /home/code

USER hugo:hugo

# CLAUDE_CONFIG_DIR also moves ~/.claude.json inside the volume.
# Alpine: the native Claude build uses the system ripgrep, not its bundled one.
ENV CLAUDE_CONFIG_DIR=/home/code/.claude \
    CODEX_HOME=/home/code/.codex \
    USE_BUILTIN_RIPGREP=0 \
    PATH=/var/hugo/.local/bin:$PATH
# Installed as hugo so the binary lands in that user's ~/.local/bin.
RUN curl -fsSL https://claude.ai/install.sh | bash \
  && claude --version \
  && codex --version
