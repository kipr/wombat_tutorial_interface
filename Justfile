build:
	hugo build --ignoreCache --minify --cleanDestinationDir

build-preview:
	hugo build --config hugo.toml,build-targets/preview.toml --destination public/preview --ignoreCache --minify --cleanDestinationDir

build-mechanical *args:
	hugo build --config hugo.toml,build-targets/mechanical.toml --destination dist/mechanical --ignoreCache --minify --cleanDestinationDir {{args}}

build-all: build build-preview

serve:
	hugo server --disableFastRender --noHTTPCache

serve-preview:
	hugo server --config hugo.toml,build-targets/preview.toml --disableFastRender --noHTTPCache

serve-mechanical *args:
	hugo server --config hugo.toml,build-targets/mechanical.toml --baseURL http://localhost:1313/ --disableFastRender --noHTTPCache {{args}}
