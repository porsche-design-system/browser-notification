import { version } from '../package.json';
import { CDN_PATH, supportsCustomElements, supportsMsBrowser } from './init-helpers';

const init = (file: 'banner' | 'overlay'): void => {
  const script = document.createElement('script');
  script.src = `${CDN_PATH}/${file}.min.${version}.js`;
  document.body.appendChild(script);
};

if (!supportsCustomElements()) {
  init('overlay');
} else if (!supportsMsBrowser()) {
  init('banner');
}
