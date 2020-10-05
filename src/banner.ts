((): void => {
  const ID = 'pds-browser-notification-banner';

  const linkAttributes = 'target=_blank rel="nofollow noopener"';
  const chrome = `<a href=https://www.google.com/chrome/ ${linkAttributes}>Google Chrome</a>`;
  const firefox = `<a href=https://www.mozilla.org/firefox/new/ ${linkAttributes}>Mozilla Firefox</a>`;
  const edge = `<a href=https://www.microsoft.com/edge ${linkAttributes}>Microsoft Edge</a>`;

  type Lang = 'de' | 'ru' | 'fr' | 'en' | 'it' | 'pt' | 'es' | 'ja' | 'ko' | 'zh' | 'nl' | 'pl';

  // prettier-ignore
  const locales: { [key in Lang]: string } = {
    de: `<strong>Der Browser, den Sie verwenden, wird nicht mehr unterstützt.</strong><br> Am besten wechseln Sie direkt auf die neueste Version von ${chrome}, ${firefox} oder ${edge}.`,
    ru: `<strong>Используемый вами браузер больше не поддерживается.</strong><br> Рекомендуется перейти на последнюю версию ${chrome}, ${firefox} или ${edge}.`,
    fr: `<strong>Le navigateur que vous utilisez n'est plus pris en charge.</strong><br> Il serait préférable de passer directement à la dernière version de ${chrome}, ${firefox} ou ${edge}.`,
    en: `<strong>The browser you are using is no longer supported.</strong><br> It would be best to directly switch to the latest version of ${chrome}, ${firefox} or ${edge}.`,
    it: `<strong>Il browser utilizzato non è più supportato.</strong><br> Si consiglia di aggiornare ${chrome}, ${firefox} o ${edge} all’ultima versione.`,
    pt: `<strong>O browser que está a utilizar já não é suportado.</strong><br> Seria melhor mudar directamente para a versão mais recente do ${chrome}, ${firefox} ou ${edge}.`,
    es: `<strong>El navegador que está utilizando ya no es compatible.</strong><br> Sería mejor cambiar directamente a la última versión de ${chrome}, ${firefox} o ${edge}.`,
    ja: `お使いのブラウザはサポートされていません。<br> 直接、最新版の${chrome}、${firefox}、${edge}に切り替えた方が良いでしょう。`,
    ko: `<strong>The browser you are using is no longer supported.</strong><br> It would be best to directly switch to the latest version of ${chrome}, ${firefox} or ${edge}.`,
    zh: `您所使用的浏览器已不再支持。<br> 请安装使用最新版本的${chrome}、${firefox}或${edge}。`,
    nl: `<strong>De browser die u gebruikt wordt niet langer ondersteund.</strong><br> U kunt het beste direct overschakelen op de nieuwste versie van ${chrome}, ${firefox} of ${edge}.`,
    pl: `<strong>Przeglądarka, której używasz, nie jest już obsługiwana.</strong><br> Najlepiej bezpośrednio przełączyć się na najnowszą wersję ${chrome}, ${firefox} lub ${edge}.`,
  };

  const preventBannerFromBeingShown = (): void => {
    sessionStorage.setItem(ID, 'true');
  };

  const shallBannerBeShown = (): boolean => {
    return sessionStorage.getItem(ID) !== 'true';
  };

  const getLang = (): Lang => {
    const htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
    const locale = htmlLang && (htmlLang.slice(0, 2) as Lang);
    return locale && locale in locales ? locale : 'en';
  };

  const addMarkup = (html: string): void => {
    const markup = document.createElement('div');
    markup.id = ID;
    markup.innerHTML = html;
    document.body.appendChild(markup);
  };

  const getBanner = () => document.getElementById(ID);
  const getButton = (banner: HTMLElement) => banner.getElementsByTagName('button')[0];

  const applyLogic = (): void => {
    const banner = getBanner();
    if (banner) {
      const button = getButton(banner);
      button.addEventListener('click', removeBanner);

      setTimeout(() => {
        banner.classList.add(`${ID}--loaded`);
      }, 500);
    }
  };

  const removeBanner = (): void => {
    const banner = getBanner();
    if (banner) {
      const button = getButton(banner);
      preventBannerFromBeingShown();
      button.removeEventListener('click', removeBanner);
      document.body.removeChild(banner);
    }
  };

  /* Auto Generated Start */

  // prettier-ignore
  const css = '#ID{position:fixed;display:flex;justify-content:center;margin:0;padding:0 7vw;top:-100%;left:0;right:0;box-sizing:border-box;z-index:99999;opacity:0;transition:top .5s ease 1s,opacity .5s ease 1s}#ID.ID--loaded{top:3rem;opacity:1}#ID>div{position:relative;width:100%;max-width:96rem;margin:0;padding:1rem 3rem 1rem 1rem;display:flex;background-color:#fff5e5;border-top:4px solid #ff9b00;box-shadow:0 0 2.1875rem 0 #c9cacb}#ID>div>svg{width:3rem;height:3rem;margin:0;padding:0;flex-shrink:0}#ID>div>p{margin:0;padding:0 1.5rem 0 1rem;max-width:59.25rem;font-size:1rem;font-family:PorscheNext-Regular,"Arial Narrow",Arial,sans-serif;font-weight:400;line-height:1.5;color:#000}#ID>div>p>a{margin:0;padding:0;color:#000;font-weight:700;text-decoration:underline;white-space:nowrap;transition:color .24s ease}#ID>div>p>a:hover{color:#d5001c}#ID>div>button{width:1.5rem;height:1.5rem;border:none;border-radius:0;margin:0;padding:0;background-color:transparent;position:absolute;right:1rem;top:1rem;cursor:pointer;transition:color .24s ease}#ID>div>button:hover{color:#d5001c}#ID>div>button:focus{outline:2px solid #00d5b9;outline-offset:1px}#ID>div>button>svg{fill:currentColor;margin:0;padding:0}'.replace(/ID/g, ID);
  // prettier-ignore
  const html = `<div><style>${css}</style><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24" width=100% height=100% focusable=false><path d="M12 3L3 21h18zm0 2.24L19.38 20H4.62z"/><path d="M12.5 15l.5-5h-2l.49 5h1.01zM11 16h2v2h-2z"/></svg><p>${locales[getLang()]}</p><button type=button><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24" width=100% height=100% focusable=false><path d="M4.91 19h1.5L12 12.83 17.59 19h1.5l-6.34-7 6.34-7h-1.5L12 11.17 6.41 5h-1.5l6.34 7-6.34 7z"/></svg></button></div>`;

  /* Auto Generated End */

  if (shallBannerBeShown()) {
    addMarkup(html);
    applyLogic();
  }
})();
