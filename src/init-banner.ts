import { CDN_PATH, supportsMsBrowser } from './init-helpers';

if (!supportsMsBrowser()) {
  const script = document.createElement('script');
  script.src = `${CDN_PATH}/banner.min.1.0.0-rc.1.js`; // TODO: bring back banner for better versioning?
  document.body.appendChild(script);
}
