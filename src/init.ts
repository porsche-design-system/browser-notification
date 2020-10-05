import { version } from '../package.json';
import { CDN_PATH, isEdge18, supportsCustomElements } from './init-helpers';

const init = (file: 'banner' | 'overlay'): void => {
  const script = document.createElement('script');
  script.src = `${CDN_PATH}/${file}.min.${version}.js`;
  document.body.appendChild(script);
};

if (isEdge18()) {
  init('banner');
} else if (!supportsCustomElements()) {
  init('overlay');
}
