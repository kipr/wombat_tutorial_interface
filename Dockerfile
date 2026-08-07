FROM ghcr.io/gohugoio/hugo:v0.164.0

# Fix broken non-root user
USER 0
RUN sed -i \
    's|^hugo:x:1000:65533:hugo:/var/hugo:/sbin/nologin$|hugo:x:1000:1000:hugo:/var/hugo:/bin/sh|' \
    /etc/passwd

USER hugo:hugo
