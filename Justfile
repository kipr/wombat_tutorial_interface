build:
	hugo build --ignoreCache --minify --cleanDestinationDir

build-preview:
	hugo build --config hugo.toml,build-targets/preview.toml --destination public/preview --ignoreCache --minify --cleanDestinationDir

build-all: build build-preview

# The devcontainer sets DEV_SERVER_BIND=0.0.0.0 so its published port works.
bind := env("DEV_SERVER_BIND", "127.0.0.1")

serve:
	hugo server --bind {{bind}} --disableFastRender --noHTTPCache

serve-preview:
	hugo server --bind {{bind}} --config hugo.toml,build-targets/preview.toml --disableFastRender --noHTTPCache
