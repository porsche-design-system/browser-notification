// TODO: extend array if new technologies are used
export const supportsUsedPDSTechnologies = (): boolean => {
  return !['IntersectionObserver', 'MutationObserver', 'customElements'].some((x) => !(x in window));
};

export const hasCookiesEnables = (): boolean => window.navigator.cookieEnabled || navigator.cookieEnabled;
