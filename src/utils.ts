export type Lang =
  | 'de'
  | 'ru'
  | 'fr'
  | 'en'
  | 'it'
  | 'pt'
  | 'es'
  | 'ja'
  | 'ko'
  | 'zh'
  | 'nl'
  | 'pl'
  | 'cs'
  | 'da'
  | 'et'
  | 'fi'
  | 'lt'
  | 'lv'
  | 'no'
  | 'sl'
  | 'sv'
  | 'tr'
  | 'uk';

export type Locales = { [key in Lang]: { title: string; content: string } };

export const getLang = (locales: Locales): Lang => {
  const htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
  const locale = htmlLang?.slice(0, 2) as Lang;
  return locale && locale in locales ? locale : 'en';
};

export const addMarkup = (html: string, ID: string): void => {
  const markup = document.createElement('div');
  markup.id = ID;
  markup.innerHTML = html;
  document.body.appendChild(markup);
};

export const applyLogic = (): void => {
  document.body.style.overflow = 'hidden';
};
