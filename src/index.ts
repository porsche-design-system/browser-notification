// TODO: this file (compiled npm package) should be used in the demo project
import { version } from '../package.json';

/* Auto Generated Below */
// prettier-ignore
export const includeBanner = (): string => `<script>!function(){var e,n;if(e=/\\b(MSIE |Trident.*?rv:|Edge\\/)(\\d+)/.exec(window.navigator.userAgent||navigator.userAgent),(n=e?parseInt(e[2]):-1)>0&&n<=18){var r=document.createElement("script");r.src="https://cdn.ui.porsche.com/browser-notification/banner.min.${version}.js",document.body.appendChild(r)}}();</script>`;
// prettier-ignore
export const includeOverlay = (): string => `<script>!function(){if(["IntersectionObserver","MutationObserver","customElements"].some((function(e){return!(e in window)}))){var e=document.createElement("script");e.src="https://cdn.ui.porsche.com/browser-notification/overlay.min.${version}.js",document.body.appendChild(e)}}();</script>`;
// prettier-ignore
export const includeCookieOverlay = (): string => `<script>!function(){if(!window.navigator.cookieEnabled&&!navigator.cookieEnabled){var o=document.createElement("script");o.src="https://cdn.ui.porsche.com/browser-notification/cookie-overlay.min.${version}.js",document.body.appendChild(o)}}();</script>`;