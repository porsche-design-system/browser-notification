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
  return `<script>!function(){var n,e=function(n){var e=document.createElement("script");e.src="https://cdn.ui.porsche.com/browser-notification-banner/"+n+".js",document.body.appendChild(e)};"customElements"in window?((n=/\\b(MSIE |Trident.*?rv:|Edge\\/)(\\d+)/.exec(window.navigator.userAgent||navigator.userAgent))?parseInt(n[2]):-1)<=18||e("banner.min.${version}"):e("overlay.min.1.0.0-rc.1")}();</script>`;
};
