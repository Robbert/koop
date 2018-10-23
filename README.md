# KOOP componentenbibliotheek
De componentenbibliotheek voor KOOP.

## Requirements
- Node.js
- NPM
- webdriver-manager: ```npm install webdriver-manager -g```

## Development
In order to start your development environment, run ```npm run start``` or ```yarn start``` from the root of the project.

## E2E testing
Make sure you webdriver-manager is up to date, you can check this by running ```webdriver-manager update```.

Run three terminals and run the following commands:
- ```webdriver-manager start```
- ```gulp dev```
- ```npm run e2e```

## Visual regression testing
Run two terminals and run the following commands:
- ```gulp dev```
- ```npm run vrtest```

```npm run vrtest``` automatically updates your reference screenshots before creating new screenshots of your local. If you want to only create and diff new local screenshots, you can simply run ```backstop test```.
