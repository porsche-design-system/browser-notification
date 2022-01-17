import { minify as htmlMinifier } from 'html-minifier';
import CleanCSS from 'clean-css';

export const updateContent = (oldContent: string, newContent: string): string => {
  const separatorStart = '/* Auto Generated Start */';
  const separatorEnd = '/* Auto Generated End */';
  return `${oldContent.substr(0, oldContent.indexOf(separatorStart))}${separatorStart}
${newContent}
  ${oldContent.substr(oldContent.indexOf(separatorEnd))}`;
};

export const minifyHTML = (str: string): string =>
  htmlMinifier(str, {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeAttributeQuotes: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
    includeAutoGeneratedTags: false,
    quoteCharacter: '"',
  });

export const minifyCSS = (str: string): string => new CleanCSS().minify(str).styles;
