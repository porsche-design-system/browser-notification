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
CDN_USER="$(grep CDN_USER "${ENV_PATH}" | cut -d '=' -f2)"

function upload {
  echo "task: [$(date)] \"upload\" (${1}, ${2}) version: ${PACKAGE_VERSION}"
  rsync -av -e "ssh -v -p22 -oUserKnownHostsFile=/dev/null -oStrictHostKeyChecking=no" ${1} ${CDN_USER}@rsync.ams.B2820.taucdn.net:"/assets/porsche-design-system/${2}"
}

upload "${SCRIPT_DIR}/../build-cdn/*.js" browser-notification-banner/
