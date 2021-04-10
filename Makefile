install:
	npm ci

start:
	node bin/bot.js

publish:
	npm publish --dry-run
