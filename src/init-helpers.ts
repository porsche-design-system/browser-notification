// TODO: add staging concept
export const CDN_PATH = 'https://cdn.ui.porsche.com/browser-notification';

export const supportsCustomElements = (): boolean => 'customElements' in window;

export const supportsMsBrowser = (): boolean => {
  const match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(window.navigator.userAgent || navigator.userAgent);
  const msBrowserVersion = match ? parseInt(match[2]) : -1;
  return msBrowserVersion > 18;
};
