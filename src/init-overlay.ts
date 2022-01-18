import { version } from '../package.json';
import { CDN_PATH, supportsUsedPDSTechnologies } from './init-helpers';

if (!supportsUsedPDSTechnologies()) {
  const script = document.createElement('script');
  script.src = `${CDN_PATH}/overlay.min.${version}.js`;
  document.body.appendChild(script);
}
