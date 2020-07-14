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

To deploy the generated JS files to CDN, you need an [Edgecast CDN API token](https://my.edgecast.com) from the technical user and check that the API access is set to 
- [x] GET
- [x] PUT
- [x] POST

Then add the CDN API token to an `.env` file in the root directory:

```
CDN_USER=bernd.hacker@mhp.com
CDN_API_TOKEN=XXXXXXXXXX
```

Then execute script:
```
yarn deploy
```
