// TODO: add staging concept
export const CDN_PATH = 'https://cdn.ui.porsche.com/browser-notification';

export const isIEorEdgeHTML = (): boolean => {
  const match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(window.navigator.userAgent || navigator.userAgent);
  const msBrowserVersion = match ? parseInt(match[2]) : -1;
  return msBrowserVersion > 0 && msBrowserVersion <= 18;
};

// TODO: extend array if new technologies are used
export const supportsUsedPDSTechnologies = (): boolean => {
  return !['ResizeObserver', 'IntersectionObserver', 'MutationObserver', 'customElements'].some((x) => !(x in window));
};
