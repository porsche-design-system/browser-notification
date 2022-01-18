import { CDN_PATH, hasCookiesEnables } from './init-helpers';
import { version } from '../package.json';

if (!hasCookiesEnables()) {
  const script = document.createElement('script');
  script.src = `${CDN_PATH}/cookie-overlay.min.${version}.js`;
  document.body.appendChild(script);
}
