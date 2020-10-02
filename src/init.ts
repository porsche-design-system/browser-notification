import { version } from '../package.json';

((): void => {
  // TODO: add staging concept
  const cdnPath = 'https://cdn.ui.porsche.com/browser-notification-banner';
  // const cdnPath = './cdn';

  const supportsCustomElements = (): boolean => 'customElements' in window;

  if (!supportsCustomElements()) {
    const script = document.createElement('script');
    script.src = `${cdnPath}/overlay.min.${version}.js`;
    document.body.appendChild(script);
  }
})();
