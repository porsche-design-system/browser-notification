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
  return `<script>!function(){if(!("customElements"in window)){var n=document.createElement("script");n.src="https://cdn.ui.porsche.com/browser-notification-banner/notification-banner.min.${version}.js",document.body.appendChild(n)}}();</script>`;
};
