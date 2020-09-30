import { version } from '../package.json';

((): void => {
  // TODO: add staging concept
  const cdnPath = 'https://cdn.ui.porsche.com/browser-notification-banner';
  // const cdnPath = './cdn';

  const getMSBrowserVersion = (): number | undefined => {
    const ua = window.navigator.userAgent || navigator.userAgent;
    const match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(ua);
    return match ? parseInt(match[2]) : undefined;
  };

  const msBrowserVersion = getMSBrowserVersion();
  if (msBrowserVersion && msBrowserVersion <= 18) {
    const body = document.getElementsByTagName('body')[0];
    const script = document.createElement('script');
    script.src = `${cdnPath}/notification-banner.min.${version}.js`;
    body.appendChild(script);
  }
})();
