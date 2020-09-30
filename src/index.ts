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
  return '<script>!function(n){"function"==typeof define&&define.amd?define(n):n()}((function(){"use strict";!function(){var n,e,t=(n=window.navigator.userAgent||navigator.userAgent,(e=/\\b(MSIE |Trident.*?rv:|Edge\\/)(\\d+)/.exec(n))?parseInt(e[2]):void 0);if(t&&t<=18){var i=document.getElementsByTagName("body")[0],o=document.createElement("script");o.src="https://cdn.ui.porsche.com/browser-notification-banner/notification-banner.min.1.0.0-rc.0.js",i.appendChild(o)}}()}));</script>';
};
