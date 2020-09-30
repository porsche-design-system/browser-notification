import * as fs from 'fs';
import * as path from 'path';
import { version } from '../package.json';

const updateContent = (oldContent: string, newContent: string): string => {
  const separator = '/* Auto Generated Below */';
  return `${oldContent.substr(0, oldContent.indexOf(separator))}${separator}
${newContent}`;
};

const generatePartial = async (): Promise<void> => {
  const targetFile = path.normalize('./src/index.ts');

  const initScript = fs.readFileSync(path.normalize(`./cdn/init.min.${version}.js`), 'utf8');

  const oldContent = fs.readFileSync(targetFile, 'utf8');
  const newContent = `export const include = (): string => {
  return '<script>${initScript.replace(/^\s+|\s+$/g, '')}</script>';
};
`;

  fs.writeFileSync(targetFile, updateContent(oldContent, newContent));
};

(async (): Promise<void> => {
  await generatePartial().catch((e) => {
    console.error(e);
    process.exit(1);
  });
})();
