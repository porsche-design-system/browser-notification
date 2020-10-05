import { version } from '../package.json';
import { CDN_PATH, supportsCustomElements, supportsMsBrowser } from './init-helpers';

const init = (file: string): void => {
  const script = document.createElement('script');
  script.src = `${CDN_PATH}/${file}.js`;
  document.body.appendChild(script);
};

if (!supportsCustomElements()) {
  init(`overlay.min.${version}`);
} else if (!supportsMsBrowser()) {
  init(`banner.min.${version}`);
}
