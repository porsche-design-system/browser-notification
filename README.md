# Porsche - Browser Notification Banner

## Introduction
Stand-alone self invoking JS snippet to show a Notification Banner if IE11 is detected. 

## Start
Change path to static `index.js` file in `public/index.html`
Start local dev server to test application `http://192.168.178.59:61423/public/`

```
yarn start
```

## Build
Transpile `src/index.ts` to es5 to support IE11 and build CDN assets.

```
yarn build
```

## Deploy
To deploy a new version from the generated JS files to Porsche Design System Edgecast CDN create an `.env` file with the following credentials:

```
CDN_USER=porsche-ui-kit@porsche.de
```

Then execute script:
```
yarn deploy
```

## Publish
To publish a new package to Artifactory, add _npm registry token_ in following format `PORSCHE_NPM_REGISTRY_TOKEN=YOUR_TOKEN_GOES_HERE` to `.env` file.
Also add CDN credentials like SSH key, technical user mail address and password in the following format: 
`CDN_USER=porsche-ui-kit@porsche.de`
`CDN_PASS=CDN_PASSWORD`

Then execute script:
```
yarn publish
```
