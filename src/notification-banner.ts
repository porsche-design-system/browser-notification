((): void => {
  const ID = 'pds-browser-notification-banner';

  const linkAttributes = 'target="_blank" rel="nofollow noopener"';
  const chrome = `<a href="https://www.google.com/chrome/" ${linkAttributes}>Google Chrome</a>`;
  const firefox = `<a href="https://www.mozilla.org/firefox/new/" ${linkAttributes}>Mozilla Firefox</a>`;
  const edge = `<a href="https://www.microsoft.com/edge" ${linkAttributes}>Microsoft Edge</a>`;

  // prettier-ignore
  const locales: { [lang: string]: string } = {
    de: `<strong>Bitte beachten Sie, dass der verwendete Browser nicht mehr unterstützt wird.</strong><p>Am besten wechseln Sie direkt auf die neueste Version von ${chrome}, ${firefox} oder ${edge}.</p>`,
    ru: `<strong>Обратите внимание, что используемый Вами браузер больше не поддерживается.</strong><p>Рекомендуется перейти на последнюю версию ${chrome}, ${firefox} или ${edge}.</p>`,
    fr: `<strong>Veuillez noter que le navigateur utilisé n'est plus pris en charge.</strong><p>Il serait préférable de passer directement à la dernière version de ${chrome}, ${firefox} ou ${edge}.</p>`,
    en: `<strong>Your browser is out of date.</strong><p>Everyone needs a pit stop sometime. To enjoy our site as usual, please update your browser or download ${chrome}, ${firefox} or ${edge}.</p>`,
    it: `<strong>Si prega di notare che il browser utilizzato non è più supportato.</strong><p>Si consiglia di aggiornare ${chrome}, ${firefox} o ${edge} all’ultima versione.</p>`,
    pt: `<strong>É favor notar que o navegador usado já não é suportado.</strong><p>Seria melhor mudar directamente para a versão mais recente do ${chrome}, ${firefox} ou ${edge}.</p>`,
    es: `<strong>Tenga en cuenta que el navegador utilizado ya no es compatible.</strong><p>Sería mejor cambiar directamente a la última versión de ${chrome}, ${firefox} o ${edge}.</p>`,
    ja: `ご使用のブラウザはサポートされていませんのでご注意ください。直接、最新版の<p>${chrome}、${firefox}、${edge}に切り替えた方が良いでしょう。</p>`,
    ko: `<strong>Please note that the used browser is no longer supported.</strong><p>It would be best to directly switch to the latest version of ${chrome}, ${firefox} or ${edge}.</p>`,
    zh: `请注意，您正在使用的浏览器已不支持或版本太旧。请安装使用最新版本的<p>${chrome}、${firefox}或${edge}。</p>`,
    nl: `<strong>Houd er rekening mee dat de gebruikte browser niet langer wordt ondersteund.</strong><p>U kunt het beste direct overschakelen op de nieuwste versie van ${chrome}, ${firefox} of ${edge}.</p>`,
    pl: `<strong>Należy pamiętać, że używana przeglądarka nie jest już obsługiwana.</strong><p>Najlepiej bezpośrednio przełączyć się na najnowszą wersję ${chrome}, ${firefox} lub ${edge}.</p>`,
  };

  const getLang = (): string => {
    const htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
    const locale = htmlLang?.slice(0, 2);
    return locale && locale in locales ? locale : 'en';
  };

  const addMarkup = (html: string): void => {
    const body = document.body;
    const markup = document.createElement('div');
    markup.id = ID;
    markup.innerHTML = html;
    body.appendChild(markup);
  };

  const applyLogic = (): void => {
    document.body.style.overflow = 'hidden';
  };

  /* Auto Generated Start */

  // prettier-ignore
  const css = '#ID{position:fixed;display:flex;justify-content:center;margin:0;padding:0 7vw;top:0;bottom:0;left:0;right:0;box-sizing:border-box;z-index:99999}#ID>div{position:relative;width:100%;max-width:96rem;margin:0;padding:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#fff;text-align:center;font-size:1rem;font-family:PorscheNext-Regular,"Arial Narrow",Arial,sans-serif;font-weight:400;line-height:1.5;color:#000}#ID>div>svg{width:5rem;height:5rem;margin:0 0 .5rem;padding:0;fill:#ff9b00}#ID>div>strong{display:block;margin:0 0 1rem;font-size:1.5rem}#ID>div>p{margin:.5rem 0 0;max-width:59.25rem}#ID>div>p>a{margin:0;padding:0;color:#000;font-weight:700;text-decoration:underline;white-space:nowrap;transition:color .24s ease}#ID>div>p>a:hover{color:#d5001c}'.replace(/ID/g, ID);
  // prettier-ignore
  const html = `<div><style>${css}</style><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24" width=100% height=100% focusable=false><path d="M12 3L3 21h18zm0 2.24L19.38 20H4.62z"/><path d="M12.5 15l.5-5h-2l.49 5h1.01zM11 16h2v2h-2z"/></svg>CONTENT</div>`.replace('CONTENT', locales[getLang()]);

  /* Auto Generated End */

  addMarkup(html);
  applyLogic();
})();
