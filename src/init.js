(() => {
  const prefix = 'pds-notification-banner';
  const path = 'https://cdn.ui.porsche.com/porsche-design-system/notification-banner/v1';
  const isCookie = (name) => {
    return document.cookie.split(';').some((item) => item.indexOf(`${name}=true`)>=0);
  }
  const ieVersion = (uaString) => {
    uaString = uaString || navigator.userAgent;
    const match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(uaString);
    if (match) return parseInt(match[2])
  }
  const ua = window.navigator.userAgent;

  if (ieVersion(ua) <= 18 && !isCookie(`${prefix}`)) {
    const body = document.getElementsByTagName('body')[0];
    const notificationBanner = document.createElement('script');
    notificationBanner.id = `${prefix}-script`;
    notificationBanner.src = `${path}/notification-banner.js`;
    body.appendChild(notificationBanner)
    document.cookie = `${prefix}=false`;
  }
  else {
    return false;
  }
})();
