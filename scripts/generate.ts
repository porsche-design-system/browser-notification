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
  const css = '${minifyCSS(`
  #ID {
    position: fixed;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 1rem 7vw;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    z-index: 99999;
    background: #fff;
  }
  
  #ID > div {
    position: relative;
    width: 100%;
    max-width: 96rem;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    font-family: PorscheNext-Regular, "Arial Narrow", Arial, sans-serif;
    font-weight: normal;
    line-height: 1.5;
    color: #000;
  }
  
  #ID > div svg {
    width: 5rem;
    height: 5rem;
    margin: 0 0 .5rem;
    padding: 0;
    fill: #ff9b00;
  }
  
  #ID > div strong {
    display: block;
    margin: 0 0 1rem;
    font-size: 1.5rem;
  }

  #ID > div > p {
    margin: .5rem 0 0;
    max-width: 59.25rem;
  }
  
  #ID > div a {
    margin: 0;
    padding: 0;
    color: #000;
    font-weight: bold;
    text-decoration: underline;
    white-space: nowrap;
    transition: color 0.24s ease;
  }
  
  #ID > div a:hover {
    color: #d5001c;
  }

  @media only screen and (min-width: 768px) {
    #ID > div > svg {
      width: 8.5rem;
      height: 8.5rem;
      margin: 0 0 1rem;
    }

    #ID > div > strong {
      font-size: 3rem;
    }
    
    #ID > div > div {
      margin: 2rem 0 0;
    }
    
    #ID > div > div a {
      display: inline-block;
      margin: 0 0 0 4rem;
      font-weight: normal;
    }

    #ID > div > div a:first-child {
      margin: 0;
    }

    #ID > div > div a i {
      display: block;
      height: 100px;
      width: 100px;
      background: url(./cdn/browser-icons.png) 0 0;
      background-size: 300px 100px;
      margin: 0 auto 1rem;
    }

    #ID > div > div a:nth-child(3) i {
      background-position: -100px 0;
    }

    #ID > div > div a:nth-child(2) i {
      background-position: -200px 0;
    }
  }
  `)}'.replace(/ID/g, ID);
  // prettier-ignore
  const html = \`${minifyHTML(`<div>
    STYLE
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" focusable="false">
      <path d="M12 3L3 21h18zm0 2.24L19.38 20H4.62z"/>
      <path d="M12.5 15l.5-5h-2l.49 5h1.01zM11 16h2v2h-2z"/>
    </svg>
    CONTENT
  </div>`)
    .replace('STYLE', '<style>${css}</style>')
    .replace('CONTENT', '${getContent()}')}\`;
`;

  fs.writeFileSync(targetFile, updateContent(oldContent, newContent));
};

(async (): Promise<void> => {
  await generateCssAndHtml().catch((e) => {
    console.error(e);
    process.exit(1);
  });
})();
