// TODO: this file (compiled npm package) should be used in the demo project
import { version } from '../package.json';

/* Auto Generated Below */
// prettier-ignore
export const includeBanner = (): string => `<script>!function(){var e,n;if(e=/\\b(MSIE |Trident.*?rv:|Edge\\/)(\\d+)/.exec(window.navigator.userAgent||navigator.userAgent),(n=e?parseInt(e[2]):-1)>0&&n<=18){var r=document.createElement("script");r.src="https://cdn.ui.porsche.com/browser-notification/banner.min.${version}.js",document.body.appendChild(r)}}();</script>`;
// prettier-ignore
export const includeOverlay = (): string => `<script>!function(){if(!("customElements"in window)){var n=document.createElement("script");n.src="https://cdn.ui.porsche.com/browser-notification/overlay.min.${version}.js",document.body.appendChild(n)}}();</script>`;