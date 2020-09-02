FROM node:12.18.3-stretch-slim

ENV PATH="/opt/porsche-browser-notification-banner/bin:${PATH}"

COPY ./entrypoint.sh "/opt/porsche-browser-notification-banner/entrypoint.sh"
COPY ./bin "/opt/porsche-browser-notification-banner/bin"
COPY ./shared "/opt/porsche-browser-notification-banner/shared"

ENTRYPOINT [ "/opt/porsche-browser-notification-banner/entrypoint.sh" ]
