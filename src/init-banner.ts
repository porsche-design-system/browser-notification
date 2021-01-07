import { version } from '../package.json';
import { CDN_PATH, isIEorEdgeHTML } from './init-helpers';

if (isIEorEdgeHTML()) {
  const script = document.createElement('script');
  script.src = `${CDN_PATH}/banner.min.${version}.js`;
  document.body.appendChild(script);
}
