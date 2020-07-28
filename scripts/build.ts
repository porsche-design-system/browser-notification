import * as fs from 'fs';
import * as path from 'path';
import globby from 'globby';

type Manifest = {
  [name: string]: string;
};

const createManifest = async (cdn: string, files: string[]): Promise<void> => {
  const manifest: Manifest = {};

  for (const file of files) {
    const jsRawPath = path.normalize(file);
    const jsRawName = path.basename(jsRawPath, '.js');
    const jsShortName = jsRawName.split('.')[0];

    manifest[jsShortName] = jsRawName;
  }

  fs.writeFileSync(
    path.normalize('./index.ts'),
    `export const CDN_BASE_URL = "${cdn}";
export const JS_MANIFEST = ${JSON.stringify(manifest)};`
  );

  console.log('Created CDN path and js file names.');
};

(async (): Promise<void> => {
  const cdn = 'https://cdn.ui.porsche.com/porsche-design-system/browser-notification-banner';
  const files = await globby('./build-cdn/**/*.js');

  await createManifest(cdn, files).catch((e) => {
    console.error(e);
    process.exit(1);
  });
})();
