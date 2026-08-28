FROM ghcr.io/gohugoio/hugo:v0.164.0 AS hugo_base

# Fix broken non-root user
USER 0
RUN sed -i \
    's|^hugo:x:1000:65533:hugo:/var/hugo:/sbin/nologin$|hugo:x:1000:1000:hugo:/var/hugo:/bin/sh|' \
    /etc/passwd

USER hugo:hugo

FROM hugo_base AS hugo_dev

USER 0

RUN apk add fish fzf fd ripgrep just imagemagick imagemagick-webp imagemagick-jpeg pandoc-cli curl \
    && mkdir -p /usr/local/share/doc/pandoc \
    && curl -fsSL -o /usr/local/share/doc/pandoc/custom-writers.html https://pandoc.org/custom-writers.html \
    && curl -fsSL -o /usr/local/share/doc/pandoc/lua-filters.html https://pandoc.org/lua-filters.html \
    && curl -fsSL -o /usr/local/share/doc/pandoc/MANUAL.html https://pandoc.org/MANUAL.html

RUN npm install -g @openai/codex svgo

USER hugo:hugo
