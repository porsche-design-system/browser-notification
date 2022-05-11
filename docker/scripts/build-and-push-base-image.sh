#!/bin/bash

REGISTRY=ghcr.io/porscheui/porsche-browser-notification-banner
IMAGE=node
TAG=16.14.2-stretch-slim

docker build -t $REGISTRY/$IMAGE:$TAG -t $REGISTRY/$IMAGE:latest ..

docker push $REGISTRY/$IMAGE:$TAG
docker push $REGISTRY/$IMAGE:latest
