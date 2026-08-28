#!/bin/sh
# Idempotent Cloud Agent / CI bootstrap for this repository.
# Installs the pinned Hugo extended binary and Pandoc 3.6.4 plus its
# custom-writer documentation.
set -eu

ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
HUGO_VERSION="0.164.0"
TMP_DIR="${TMPDIR:-/tmp}"

install_hugo() {
  need=0
  if ! command -v hugo >/dev/null 2>&1; then
    need=1
  else
    current="$(hugo version | awk '{ print $2 }' | sed 's/^v//; s/-.*//')"
    if [ "$current" != "$HUGO_VERSION" ]; then
      need=1
    fi
  fi
  [ "$need" = "1" ] || return 0

  deb="${TMP_DIR}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb"
  url="https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb"
  curl -fsSL -o "$deb" "$url"
  if command -v sudo >/dev/null 2>&1 && [ "$(id -u)" -ne 0 ]; then
    sudo dpkg -i "$deb"
  else
    dpkg -i "$deb"
  fi
  rm -f "$deb"
}

install_hugo
sh "$ROOT/tools/install-pandoc.sh"
