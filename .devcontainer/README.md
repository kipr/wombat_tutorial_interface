# Devcontainer

A Debian (trixie) development environment for this Hugo site. The image is the
`dev` stage of the repository-root `Dockerfile`.

## What's in the image

| Tool | Why |
| --- | --- |
| Node 22 (`node:22-trixie-slim` base) | `tools/` checks and `tests/`; matches the Node of the Hugo image this replaced. |
| Hugo `0.164.0` extended | Site build. Pinned in `tools/cloud-install.sh`, shared with the Cloud Agent VM. |
| Pandoc `3.6.4` + docs in `/usr/local/share/doc/pandoc/` | Introductory HTML importer. Pinned in `tools/install-pandoc.sh`, shared with CI. |
| `just` | `Justfile` build targets. |
| ImageMagick, `svgo` | Optimizing static image and SVG assets. |
| Claude Code, Codex | Agent CLIs (see below). |
| fish, git, ripgrep, fd, fzf, jq, bubblewrap, procps | Shell and general dev tools. |

The container user is `code` (UID 1000, home `/home/code`, shell fish).

## Open it

- VS Code: **Dev Containers: Reopen in Container**.
- CLI: `devcontainer up --workspace-folder .`

Build the image without the devcontainer tooling:

```sh
docker build --target dev .
```

Rebuild the container after changing `Dockerfile`, `.dockerignore`,
`.devcontainer/devcontainer.json`, or the version pins in
`tools/cloud-install.sh` / `tools/install-pandoc.sh`.

## Build and verify

From `/workspaces/<repo>` inside the container, run the commands in
[docs/development.md](../docs/development.md), for example:

```sh
build_dir="$(mktemp -d)"
hugo --buildDrafts --destination "$build_dir" --printPathWarnings --logLevel error
node tools/check_internal_links.js "$build_dir"
node tests/test_lab_persistence.js
```

Preview on the forwarded port 1313 with `hugo server --buildDrafts`
(pages are under `/wombat-tutorial-interface/`).

## Agent CLIs

Claude Code and Codex keep their state in the named Docker volumes
`claude-config` and `codex-config`, shared by every devcontainer on this
machine. Log in once per machine:

```sh
claude          # follow the login prompt
codex login
```

Smoke test:

```sh
claude --version && claude -p "say hi"
codex sandbox -- true
```

Concurrent sessions in different containers write the same volume files.

## Caveats

- The agent sandboxes use bubblewrap, so the container runs with
  `seccomp=unconfined` and `systempaths=unconfined`. This disables Docker's
  syscall filter and `/proc`/`/sys` masking for this container.
- Hugo and Pandoc are installed from upstream amd64 `.deb` files, so the image
  builds only on x86_64 hosts.
- `.dockerignore` restricts the build context to the two install scripts. If
  the `Dockerfile` ever needs more repository files, add them there.
