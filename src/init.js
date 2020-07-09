(() => {
  const isCookie = (name) => {
    return document.cookie.split(';').some((item) => item.indexOf(`${name}=true`)>=0);
  }
  const ieVersion = (uaString) => {
    uaString = uaString || navigator.userAgent;
    const match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(uaString);
    if (match) return parseInt(match[2])
  }
  const ua = window.navigator.userAgent;

  if (ieVersion(ua) < 18 && !isCookie('notification-banner')) {
    const body = document.getElementsByTagName('body')[0];
    const notificationBanner = document.createElement('script');
    notificationBanner.id = 'notification-banner-script';
    notificationBanner.src = '../lib/notification-banner.js';
    body.appendChild(notificationBanner)
    document.cookie = 'notification-banner=false';
  }
  else {
    return false;
  }
})();
