import { version } from '../package.json';
import { CDN_PATH, supportsMsBrowser } from './init-helpers';

if (!supportsMsBrowser()) {
  const script = document.createElement('script');
  script.src = `${CDN_PATH}/banner.min.${version}.js`;
  document.body.appendChild(script);
}
