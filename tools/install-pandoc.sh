#!/bin/sh
# Install pinned Pandoc 3.6.4 and the custom-writer documentation used by the
# Discovery HTML importer. Idempotent: safe to re-run.
set -eu

PANDOC_VERSION="3.6.4"
PANDOC_DEB_VERSION="${PANDOC_VERSION}-1"
DOC_DIR="${PANDOC_DOC_DIR:-/usr/local/share/doc/pandoc}"
TMP_DIR="${TMPDIR:-/tmp}"
ARCH="$(uname -m)"

need_install() {
  if ! command -v pandoc >/dev/null 2>&1; then
    return 0
  fi
  installed="$(pandoc --version | awk 'NR==1 { print $2 }')"
  [ "$installed" != "$PANDOC_VERSION" ]
}

install_debian() {
  deb="${TMP_DIR}/pandoc-${PANDOC_DEB_VERSION}-amd64.deb"
  url="https://github.com/jgm/pandoc/releases/download/${PANDOC_VERSION}/pandoc-${PANDOC_DEB_VERSION}-amd64.deb"
  if [ "$ARCH" != "x86_64" ] && [ "$ARCH" != "amd64" ]; then
    echo "install-pandoc: unsupported architecture: $ARCH" >&2
    exit 1
  fi
  curl -fsSL -o "$deb" "$url"
  if command -v sudo >/dev/null 2>&1 && [ "$(id -u)" -ne 0 ]; then
    sudo dpkg -i "$deb"
  else
    dpkg -i "$deb"
  fi
  rm -f "$deb"
}

install_alpine() {
  # Official amd64 builds are glibc. On Alpine, prefer the distro package and
  # still install the custom-writer documentation below.
  if command -v apk >/dev/null 2>&1; then
    if [ "$(id -u)" -eq 0 ]; then
      apk add --no-cache pandoc-cli
    else
      sudo apk add --no-cache pandoc-cli
    fi
  else
    echo "install-pandoc: Alpine install requires apk" >&2
    exit 1
  fi
}

install_docs() {
  fetch_docs_as_root=0
  if [ -d "$DOC_DIR" ] && [ -w "$DOC_DIR" ]; then
    :
  elif command -v sudo >/dev/null 2>&1 && [ "$(id -u)" -ne 0 ]; then
    sudo mkdir -p "$DOC_DIR"
    fetch_docs_as_root=1
  else
    mkdir -p "$DOC_DIR"
  fi
  if [ ! -w "$DOC_DIR" ]; then
    if command -v sudo >/dev/null 2>&1; then
      fetch_docs_as_root=1
    else
      echo "install-pandoc: cannot write $DOC_DIR" >&2
      exit 1
    fi
  fi

  fetch() {
    dest="$1"
    url="$2"
    if [ "$fetch_docs_as_root" = "1" ]; then
      curl -fsSL "$url" | sudo tee "$dest" >/dev/null
    else
      curl -fsSL -o "$dest" "$url"
    fi
  }

  # Pandoc's custom writer contract (Writer(doc, opts)) and the full user guide.
  fetch "$DOC_DIR/custom-writers.html" "https://pandoc.org/custom-writers.html"
  fetch "$DOC_DIR/lua-filters.html" "https://pandoc.org/lua-filters.html"
  fetch "$DOC_DIR/MANUAL.html" "https://pandoc.org/MANUAL.html"

  index="$DOC_DIR/README.md"
  body=$(cat <<EOF
# Pandoc ${PANDOC_VERSION} documentation (local copy)

These files are installed next to the pinned Pandoc used by
\`tools/discovery-importer\`. Re-run \`tools/install-pandoc.sh\` to refresh them.

| File | What it covers |
| --- | --- |
| \`custom-writers.html\` | New-style Lua \`Writer(doc, opts)\` / \`ByteStringWriter\` contract |
| \`lua-filters.html\` | Lua AST types, module \`pandoc\`, walking blocks and inlines |
| \`MANUAL.html\` | Full Pandoc user guide, including \`html+raw_html\` and extensions |

Verify:

\`\`\`sh
pandoc --version   # expect ${PANDOC_VERSION} on Debian/Ubuntu
ls ${DOC_DIR}/custom-writers.html
\`\`\`
EOF
)
  if [ "$fetch_docs_as_root" = "1" ]; then
    printf '%s\n' "$body" | sudo tee "$index" >/dev/null
  else
    printf '%s\n' "$body" > "$index"
  fi
}

if [ -f /etc/alpine-release ]; then
  if need_install; then
    install_alpine
  fi
else
  if need_install; then
    install_debian
  fi
fi

install_docs

pandoc --version | awk 'NR==1 { print }'
echo "Pandoc docs: $DOC_DIR"
ls -1 "$DOC_DIR"
