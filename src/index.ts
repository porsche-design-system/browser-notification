// TODO: this file (compiled npm package) should be used in the demo project
import { version } from '../package.json';
import { CDN_PATH } from './init-helpers';

type Options = { withoutTags: boolean };

export const init = (options?: Options): string => {
  const url = `${CDN_PATH}/init.min.${version}.js`;
  return options?.withoutTags ? url : `<script defer src="${url}"></script>`;
};

/* Auto Generated Below */
// prettier-ignore
export const include = (): string => `<script>!function(){var n,e=function(n){var e=document.createElement("script");e.src="https://cdn.ui.porsche.com/browser-notification/"+n+".min.${version}.js",document.body.appendChild(e)};"customElements"in window?((n=/\\b(MSIE |Trident.*?rv:|Edge\\/)(\\d+)/.exec(window.navigator.userAgent||navigator.userAgent))?parseInt(n[2]):-1)<=18||e("banner"):e("overlay")}();</script>`;
// prettier-ignore
export const includeBanner = (): string => `<script>!function(){var e;if(!(((e=/\\b(MSIE |Trident.*?rv:|Edge\\/)(\\d+)/.exec(window.navigator.userAgent||navigator.userAgent))?parseInt(e[2]):-1)<=18)){var n=document.createElement("script");n.src="https://cdn.ui.porsche.com/browser-notification/banner.min.${version}.js",document.body.appendChild(n)}}();</script>`;
// prettier-ignore
export const includeOverlay = (): string => `<script>!function(){if(!("customElements"in window)){var n=document.createElement("script");n.src="https://cdn.ui.porsche.com/browser-notification/overlay.min.${version}.js",document.body.appendChild(n)}}();</script>`;