![Porsche Marque](https://upload.wikimedia.org/wikipedia/de/thumb/7/70/Porsche_Logo.svg/258px-Porsche_Logo.svg.png)

# Porsche - Browser Notification Banner

## Introduction
Stand-alone self invoking JS snippet to show a Notification Banner if IE11 is detected. 

## Setup

### Requirements
* [Node.js](https://nodejs.org)
* [Yarn](https://yarnpkg.com)
* [Docker](https://www.docker.com) ([see below](#docker-installation-steps))

### Getting started
1. Clone [`porsche-browser-notification-banner` repository](https://github.com/porscheui/porsche-browser-notification-banner)
1. Switch to __project root directory__
1. Make sure Docker app is running
1. Create an `.env` file within __project root directory__ (never push this file to Git because it will contain secrets – by default it's ignored by `.gitignore`)
1. Create a personal access token with the scopes `delete:packages`, `read:packages`, `write:packages`, `repo` at <https://github.com/settings/tokens>
1. Add the personal access token to the `.env` file in following format `GITHUB_PERSONAL_ACCESS_TOKEN=YOUR_TOKEN`
1. Login to the GitHub docker registry via `grep GITHUB_PERSONAL_ACCESS_TOKEN .env | cut -d '=' -f2 | docker login https://docker.pkg.github.com -u YOUR_USERNAME --password-stdin`
1. Run `./docker.sh run-install` - this may take up to several minutes at first start depending on your internet connection

*Note: `./docker.sh run-install` should be executed after every pull.*

### Docker installation steps
1. Register your Docker account on [Hub-Docker](https://hub.docker.com)
1. Download Docker app locally on your machine and login
1. Start Docker

### Start
Launches a demo project.
1. Switch to __project root directory__
1. Run `./docker.sh run-start`

### Build
Creates the npm package, cdn artifacts and demo project.
1. Switch to __project root directory__
1. Run `./docker.sh run-build`

--- 

## Dependency updates
Every week, we update our NPM packages:

1. Switch to __project root directory__
1. Run `./docker.sh run-upgrade`  
This should output the dependencies you might want to update. Select the npm dependencies to be updated and press _Enter_.
1. Run `./docker.sh run-install`
1. Run `./docker.sh run-build`
As final check start the demo application locally and have a look at it.
1. Run `./docker.sh run-start`

---

