# Porsche - Notification Banner

## Introduction
Stand-alone self invoking JS snippet to show a Notification Banner if IE11 is detected. 

## Start
Start local dev server to test application `http://192.168.178.59:61423/public/`

```
yarn start
```

## Build
Transpile js to es5 to support IE11.

```
yarn build
```

## Deploy

To deploy a new version from the generated JS files to Porsche Design System Edgecast CDN create an `.env` file with the following credentials:

```
CDN_USER=bernd.hacker@mhp.com
```

Then execute script:
```
yarn deploy
```

## Deploy and purge ()

If you want to deploy and purge an existing version, you need an [Edgecast CDN API token](https://my.edgecast.com) from the technical user (porsche-ui-kit@porsche.de) and check that the API access is set to 
- [x] GET
- [x] PUT
- [x] POST

Then add the CDN API token to the `.env` file in the root directory:

```
CDN_API_TOKEN=XXXXXXXXXX
```

Then execute script:
```
yarn deploy --purge
```

## Publish
