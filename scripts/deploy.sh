#!/usr/bin/env bash

set -o errexit
set -o pipefail

PACKAGE_VERSION=$(cat ./package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr . - \
  | tr -d '[[:space:]]')

SCRIPT_DIR="$(cd `dirname ${0}` && pwd)"

ENV_PATH="./.env"
CDN_API_TOKEN="$(grep CDN_API_TOKEN "${ENV_PATH}" | cut -d '=' -f2)"
CDN_USER="$(grep CDN_USER "${ENV_PATH}" | cut -d '=' -f2)"

function upload {
  echo "task: [$(date)] \"upload\" (${1}, ${2}) version: ${PACKAGE_VERSION}"
  rsync -av -e "ssh -v -p22 -oUserKnownHostsFile=/dev/null -oStrictHostKeyChecking=no" ${1} ${CDN_USER}@rsync.ams.B2820.taucdn.net:"/assets/porsche-design-system/${2}"
}

function purge {
  echo "task: [$(date)] \"purge\""
  echo ${API_TOKEN}
  curl -sk -X PUT -H "Authorization: TOK:${CDN_API_TOKEN}" -H "Content-Type: application/json" -H "Accept: application/json" -d "{ \"MediaPath\":\"https:\/\/cdn.ui.porsche.com\/porsche-design-system\/browser-notification-banner\/index.js\", \"MediaType\":3}" "https://api.edgecast.com/v2/mcc/customers/B2820/edge/purge"
  curl -sk -X PUT -H "Authorization: TOK:${CDN_API_TOKEN}" -H "Content-Type: application/json" -H "Accept: application/json" -d "{ \"MediaPath\":\"https:\/\/cdn.ui.porsche.com\/porsche-design-system\/browser-notification-banner\/banner.min.${PACKAGE_VERSION}.js\", \"MediaType\":3}" "https://api.edgecast.com/v2/mcc/customers/B2820/edge/purge"
}

# echo "path: browser-notification-banner/${PACKAGE_VERSION}/"

upload "${SCRIPT_DIR}/../build-cdn/*.js" browser-notification-banner/

if
  [[ "--purge" == "${1}" ]]
then
  ${1:2}
fi
