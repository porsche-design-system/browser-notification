((): void => {
  const ID = 'pds-browser-notification-banner';

  const linkAttributes = 'target=_blank rel="nofollow noopener"';
  const chrome = `<a href=https://www.google.com/chrome/ ${linkAttributes}>Google Chrome</a>`;
  const firefox = `<a href=https://www.mozilla.org/firefox/new/ ${linkAttributes}>Mozilla Firefox</a>`;
  const edge = `<a href=https://www.microsoft.com/edge ${linkAttributes}>Microsoft Edge</a>`;

  type Lang = 'de' | 'ru' | 'fr' | 'en' | 'it' | 'pt' | 'es' | 'ja' | 'ko' | 'zh' | 'nl' | 'pl';

  // prettier-ignore
  const locales: { [key in Lang]: { title: string; content: string } } = {
    de: {
      title: 'Zeit für ein kleines Update',
      content: `Der Browser, den Sie verwenden, wird nicht mehr unterstützt.<br> Am besten wechseln Sie direkt auf die neueste Version von ${chrome}, ${firefox} oder ${edge}.`,
    },
    ru: {
      title: 'Время для небольшого обновления',
      content: `Используемый вами браузер больше не поддерживается.<br> Рекомендуется перейти на последнюю версию ${chrome}, ${firefox} или ${edge}.`,
    },
    fr: {
      title: "Le temps d'une petite mise à jour",
      content: `Le navigateur que vous utilisez n'est plus pris en charge.<br> Il serait préférable de passer directement à la dernière version de ${chrome}, ${firefox} ou ${edge}.`,
    },
    en: {
      title: 'Time for a small update',
      content: `The browser you are using is no longer supported.<br> It would be best to directly switch to the latest version of ${chrome}, ${firefox} or ${edge}.`,
    },
    it: {
      title: 'Tempo per un piccolo aggiornamento',
      content: `Il browser utilizzato non è più supportato.<br> Si consiglia di aggiornare ${chrome}, ${firefox} o ${edge} all’ultima versione.`,
    },
    pt: {
      title: 'Tempo para uma pequena actualização',
      content: `O browser que está a utilizar já não é suportado.<br> Seria melhor mudar directamente para a versão mais recente do ${chrome}, ${firefox} ou ${edge}.`,
    },
    es: {
      title: 'Es hora de una pequeña actualización',
      content: `El navegador que está utilizando ya no es compatible.<br> Sería mejor cambiar directamente a la última versión de ${chrome}, ${firefox} o ${edge}.`,
    },
    ja: {
      title: '小さな更新の時間',
      content: `お使いのブラウザはサポートされていません。<br>直接、最新版の${chrome}、${firefox}、${edge}に切り替えた方が良いでしょう。`,
    },
    ko: {
      title: 'Time for a small update',
      content: `The browser you are using is no longer supported.<br> It would be best to directly switch to the latest version of ${chrome}, ${firefox} or ${edge}.`,
    },
    zh: {
      title: '是时候来个小更新了',
      content: `您所使用的浏览器已不再支持。请安装使用最新版本的${chrome}、${firefox}或${edge}。`,
    },
    nl: {
      title: 'Tijd voor een kleine update',
      content: `De browser die u gebruikt wordt niet langer ondersteund.<br> U kunt het beste direct overschakelen op de nieuwste versie van ${chrome}, ${firefox} of ${edge}.`,
    },
    pl: {
      title: 'Czas na małą aktualizację',
      content: `Przeglądarka, której używasz, nie jest już obsługiwana.<br> Najlepiej bezpośrednio przełączyć się na najnowszą wersję ${chrome}, ${firefox} lub ${edge}.`,
    },
  };

  const getLang = (): Lang => {
    const htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
    const locale = htmlLang?.slice(0, 2) as Lang;
    return locale && locale in locales ? locale : 'en';
  };

  const getContent = (): string => {
    const { title, content } = locales[getLang()];
    const isDesktop = document.documentElement.clientWidth >= 768;
    // strip <br> tags on mobile
    return `<strong>${title}</strong><p>${isDesktop ? content : content.replace('<br>', '')}</p>${
      isDesktop ? `<div>${[chrome, firefox, edge].map((link) => link.replace('>', '><i></i>')).join('')}</div>` : ''
    }`;
  };

  const addMarkup = (html: string): void => {
    const markup = document.createElement('div');
    markup.id = ID;
    markup.innerHTML = html;
    document.body.appendChild(markup);
  };

  const applyLogic = (): void => {
    document.body.style.overflow = 'hidden';
  };

  /* Auto Generated Start */

  // prettier-ignore
  const css = '#ID{position:fixed;display:flex;justify-content:center;margin:0;padding:1rem 7vw;top:0;bottom:0;left:0;right:0;box-sizing:border-box;z-index:99999;background:#fff}#ID>div{position:relative;width:100%;max-width:96rem;margin:0;padding:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-size:1rem;font-family:PorscheNext-Regular,"Arial Narrow",Arial,sans-serif;font-weight:400;line-height:1.5;color:#000}#ID>div svg{width:5rem;height:5rem;margin:0 0 .5rem;padding:0;fill:#ff9b00}#ID>div strong{display:block;margin:0 0 1rem;font-size:1.5rem}#ID>div>p{margin:.5rem 0 0;max-width:59.25rem}#ID>div a{margin:0;padding:0;color:#000;font-weight:700;text-decoration:underline;white-space:nowrap;transition:color .24s ease}#ID>div a:hover{color:#d5001c}@media only screen and (min-width:768px){#ID>div>svg{width:8.5rem;height:8.5rem;margin:0 0 1rem}#ID>div>strong{font-size:3rem}#ID>div>div{margin:2rem 0 0}#ID>div>div a{display:inline-block;margin:0 0 0 4rem;font-weight:400}#ID>div>div a:first-child{margin:0}#ID>div>div a i{display:block;height:100px;width:100px;background:url(cdn/browser-icons.png) 0 0;background-size:300px 100px;margin:0 auto 1rem}#ID>div>div a:nth-child(3) i{background-position:-100px 0}#ID>div>div a:nth-child(2) i{background-position:-200px 0}}'.replace(/ID/g, ID);
  // prettier-ignore
  const html = `<div><style>${css}</style><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24" width=100% height=100% focusable=false><path d="M12 3L3 21h18zm0 2.24L19.38 20H4.62z"/><path d="M12.5 15l.5-5h-2l.49 5h1.01zM11 16h2v2h-2z"/></svg>${getContent()}</div>`;

  /* Auto Generated End */

  addMarkup(html);
  applyLogic();
})();
