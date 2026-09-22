build:
	hugo build --ignoreCache --minify --cleanDestinationDir

build-preview:
	hugo build --config hugo.toml,build-targets/preview.toml --destination public/preview --ignoreCache --minify --cleanDestinationDir

build-all: build build-preview

serve:
	hugo server --disableFastRender --noHTTPCache

serve-preview:
	hugo server --config hugo.toml,build-targets/preview.toml --disableFastRender --noHTTPCache
