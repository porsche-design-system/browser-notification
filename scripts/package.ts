import * as fs from 'fs';
import * as path from 'path';

const rootDirectory = path.resolve(__dirname, '..');
const targetDirectory = path.resolve(rootDirectory, 'dist');
const packageJson = require('../package.json');

const copyFiles = (files: string[]): void => {
  for (const file of files) {
    const source = path.resolve(rootDirectory, file);
    const target = path.resolve(targetDirectory, path.basename(file));
    fs.copyFile(source, target, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

const removePropsFromPackageJson = (props: string[]): void => {
  for (const prop of props) {
    Reflect.deleteProperty(packageJson, prop);
  }
};

const addPropsToPackageJson = (props: { [key: string]: string }): void => {
  for (const [key, value] of Object.entries(props)) {
    packageJson[key] = value;
  }
};

const savePackageJson = () => {
  const target = path.resolve(targetDirectory, 'package.json');
  const data = JSON.stringify(packageJson, null, 2);
  fs.writeFileSync(target, data);
};

copyFiles(['README.md', 'CHANGELOG.md', 'LICENSE']);
removePropsFromPackageJson(['private', 'scripts', 'devDependencies']);
addPropsToPackageJson({ main: 'index.js', module: 'esm/index.js', types: 'types/index.d.ts' });
savePackageJson();
