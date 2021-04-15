install:
	npm ci

start:
	node bin/bot.js

database:
	node bin/show-database.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
