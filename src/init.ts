import {version} from '../package.json';

((): void => {
  // TODO: add staging concept
  const cdnPath = 'https://cdn.ui.porsche.com/porsche-design-system/browser-notification-banner';
  // const cdnPath = '../build-cdn/';

  const msBrowserVersion = (): number | undefined => {
    const ua = window.navigator.userAgent || navigator.userAgent;
    const match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(ua);
    if (match) {
      return parseInt(match[2]);
    }
    return undefined;
  }

  if (msBrowserVersion() <= 18) {
    const body = document.getElementsByTagName('body')[0];
    const script = document.createElement('script');
    script.src = `${cdnPath}/notification-banner.min.${version}.js`;
    body.appendChild(script);
  }
})();
