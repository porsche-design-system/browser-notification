#!/bin/bash

IMAGE=porsche-browser-notification-banner
TAG=12.18.3-stretch-slim

docker build -t docker.pkg.github.com/porscheui/porsche-browser-notification-banner/$IMAGE:$TAG ..
docker tag docker.pkg.github.com/porscheui/porsche-browser-notification-banner/$IMAGE:$TAG docker.pkg.github.com/porscheui/porsche-browser-notification-banner/$IMAGE:latest

docker push docker.pkg.github.com/porscheui/porsche-browser-notification-banner/$IMAGE:$TAG
docker push docker.pkg.github.com/porscheui/porsche-browser-notification-banner/$IMAGE:latest
