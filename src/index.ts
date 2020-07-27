import {version} from '../package.json';
(() => {
  const prefix = 'pds-browser-notification-banner';
  const path = 'https://cdn.ui.porsche.com/porsche-design-system/browser-notification-banner';
  // const path = '../lib/';
  const isCookie = (name: string) => {
    return document.cookie.split(';').some((item) => item.indexOf(`${name}=true`)>=0);
  }
  const ieVersion = (uaString: string) => {
    uaString = uaString || navigator.userAgent;
    const match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(uaString);
    if (match) return parseInt(match[2])
  }
  const ua = window.navigator.userAgent;

  if (ieVersion(ua) <= 18 && !isCookie(`${prefix}`)) {
    const body = document.getElementsByTagName('body')[0];
    const notificationBanner = document.createElement('script');
    notificationBanner.id = `${prefix}-script`;
    notificationBanner.src = `${path}/banner.min.${version}.js`;
    body.appendChild(notificationBanner)
  }
  else {
    return false;
  }
})();
