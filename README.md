![Porsche Marque](https://upload.wikimedia.org/wikipedia/de/thumb/7/70/Porsche_Logo.svg/258px-Porsche_Logo.svg.png)

# Porsche - Browser Notification

## Introduction

Stand-alone self invoking JS snippet to show a Notification Banner or Overlay if IE11 or missing customElements support is detected.

## Setup

### Requirements

- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [Docker](https://www.docker.com) ([see below](#docker-installation-steps))

### Getting started

1. Clone [`porsche-browser-notification-banner` repository](https://github.com/porscheui/porsche-browser-notification-banner)
1. Switch to **project root directory**
1. Make sure Docker app is running
1. Create an `.env` file within **project root directory** (never push this file to Git because it will contain secrets – by default it's ignored by `.gitignore`)
1. Create a personal access token with the scopes `delete:packages`, `read:packages`, `write:packages`, `repo` at <https://github.com/settings/tokens>
1. Add the personal access token to the `.env` file in following format `GITHUB_PERSONAL_ACCESS_TOKEN=YOUR_TOKEN`
1. Login to the GitHub docker registry via `grep GITHUB_PERSONAL_ACCESS_TOKEN .env | cut -d '=' -f2 | docker login https://docker.pkg.github.com -u YOUR_USERNAME --password-stdin`
1. Run `./docker.sh run-install` - this may take up to several minutes at first start depending on your internet connection

_Note: `./docker.sh run-install` should be executed after every pull._

### Setup prettier
1. Go to Webstorm `Preferences`
1. Click on the Plugins tab and search for `prettier`
1. Install prettier
1. In `Preferences` go to `Languages and Frameworks` -> `Javascript` -> `Prettier`
1. Set `Prettier Package` to `{PATH_TO_YOUR_DIRECTORY}/porsche-design-system/node_modules/prettier`
1. Change `Run for files` to `{**/*,*}.{js,ts,jsx,tsx,vue,scss,json,css,html}`
1. Click checkbox `on save` and apply
1. You should be good to go.

### Docker installation steps

1. Register your Docker account on [Hub-Docker](https://hub.docker.com)
1. Download Docker app locally on your machine and login
1. Start Docker

### Start

Launches a demo project.

1. Switch to **project root directory**
1. Run `./docker.sh run-start`

### Build

Creates the npm package, cdn artifacts and demo project.

1. Switch to **project root directory**
1. Run `./docker.sh run-build`

---

## Dependency updates

Every week, we update our NPM packages:

1. Switch to **project root directory**
1. Run `./docker.sh run-upgrade`  
   This should output the dependencies you might want to update. Select the npm dependencies to be updated and press _Enter_.
1. Run `./docker.sh run-install`
1. Run `./docker.sh run-build` As final check start the demo application locally and have a look at it.
1. Run `./docker.sh run-start`

---

## Release management

### Preparation

1. Switch to **project root directory**
1. Run `git pull origin master`
1. Create a new branch e.g. **release/v1.2.3**
1. Make sure all relevant changes for the new release to be documented in following `CHANGELOG.md` file(s) under section **[Unreleased]**

- `./CHANGELOG.md`

1. Run `./docker.sh run-prepare-release ${TARGET_VERSION}` (If something goes wrong, make sure to revert all local changes before executing the task again.)

### Release

1. Create a commit with following message structure `Release Porsche Notification v{MAJOR_NUMBER}.{MINOR_NUMBER}.{PATCH_NUMBER} | {DEVELOPER_ABBREVEATION}`
1. Push the local commit to release branch, e.g. `git push origin release/v1.2.3`
1. Create pull request and start review
1. Merge into **master** branch (then CI/CD will trigger a npm release and cdn artifacts deployment automatically)

### Communicate

1. For the moment it's treated as silent release, so no communication is required
