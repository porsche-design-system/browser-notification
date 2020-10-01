import * as fs from 'fs';
import * as path from 'path';
import { minifyHTML, minifyCSS } from './utils';

const updateContent = (oldContent: string, newContent: string): string => {
  const separatorStart = '/* Auto Generated Start */';
  const separatorEnd = '/* Auto Generated End */';
  return `${oldContent.substr(0, oldContent.indexOf(separatorStart))}${separatorStart}
${newContent}
  ${oldContent.substr(oldContent.indexOf(separatorEnd))}`;
};

const generateCssAndHtml = async (): Promise<void> => {
  const targetFile = path.normalize('./src/notification-banner.ts');

  const oldContent = fs.readFileSync(targetFile, 'utf8');
  const newContent = `
  // prettier-ignore
  const html = '${minifyHTML(`<div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" focusable="false">
      <path d="M12 3L3 21h18zm0 2.24L19.38 20H4.62z"/>
      <path d="M12.5 15l.5-5h-2l.49 5h1.01zM11 16h2v2h-2z"/>
    </svg>
    <p>
      CONTENT
    </p>
  </div>`)}'.replace('CONTENT', locales[getLang()]);
  // prettier-ignore
  const css = '${minifyCSS(`
  #ID {
    position: fixed;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0 7vw;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    z-index: 99999;
  }
  
  #ID > div {
    position: relative;
    width: 100%;
    max-width: 96rem;
    margin: 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    text-align: center;
  }
  
  #ID > div > svg {
    width: 3rem;
    height: 3rem;
    margin: 0;
    padding: 0;
    flex-shrink: 0;
  }
  
  #ID > div > p {
    margin: 0;
    padding: 0 1.5rem 0 1rem;
    max-width: 59.25rem;
    font-size: 1rem;
    font-family: PorscheNext-Regular, "Arial Narrow", Arial, sans-serif;
    font-weight: normal;
    line-height: 1.5;
    color: #000;
  }
  
  #ID > div > p > a {
    margin: 0;
    padding: 0;
    color: #000;
    font-weight: bold;
    text-decoration: underline;
    white-space: nowrap;
    transition: color 0.24s ease;
  }
  
  #ID > div > p > a:hover {
    color: #d5001c;
  }
  `)}'.replace(/ID/g, ID);
`;

  fs.writeFileSync(targetFile, updateContent(oldContent, newContent));
};

(async (): Promise<void> => {
  await generateCssAndHtml().catch((e) => {
    console.error(e);
    process.exit(1);
  });
})();
