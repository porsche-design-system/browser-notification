import { version } from '../package.json';
import { CDN_PATH, supportsCustomElements } from './init-helpers';

if (!supportsCustomElements()) {
  const script = document.createElement('script');
  script.src = `${CDN_PATH}/overlay.min.${version}.js`;
  document.body.appendChild(script);
}
