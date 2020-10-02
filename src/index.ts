// TODO: this file (compiled npm package) should be used in the demo project
import { version } from '../package.json';

type Options = { withoutTags: boolean };

export const init = (options?: Options): string => {
  // TODO: add staging concept
  const url = `https://cdn.ui.porsche.com/browser-notification-banner/init.min.${version}.js`;
  return options?.withoutTags ? url : `<script defer src="${url}"></script>`;
};

/* Auto Generated Below */
export const include = (): string => {
  return `<script>!function(){var e,n,t=(e=window.navigator.userAgent||navigator.userAgent,(n=/\\b(MSIE |Trident.*?rv:|Edge\\/)(\\d+)/.exec(e))?parseInt(n[2]):void 0);if(t&&t<=18){var r=document.getElementsByTagName("body")[0],i=document.createElement("script");i.src="https://cdn.ui.porsche.com/browser-notification-banner/notification-banner.min.${version}.js",r.appendChild(i)}}();</script>`;
};
