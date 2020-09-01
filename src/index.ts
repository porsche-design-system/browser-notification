import { version } from '../package.json';

type Options = { withoutTags: boolean };

export const init = (options?: Options): string => {
  const url = `https://cdn.ui.porsche.com/porsche-design-system/browser-notification-banner/init.min.${version}.js`;
  if (options?.withoutTags) {
    return url;
  }
  return `<script src="${url}"></script>`;
}
