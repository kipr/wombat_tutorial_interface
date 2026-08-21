build:
	hugo build --ignoreCache --minify --cleanDestinationDir

build-pilot:
	hugo build --config hugo.toml,build-targets/pilot.toml --ignoreCache --minify --cleanDestinationDir

serve:
	hugo server --disableFastRender --noHTTPCache
