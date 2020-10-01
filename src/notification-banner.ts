((): void => {
  const ID = 'pds-browser-notification-banner';

  const linkAttributes = 'target="_blank" rel="nofollow noopener"';
  const chrome = `<a href="https://www.google.com/chrome/" ${linkAttributes}>Google Chrome</a>`;
  const firefox = `<a href="https://www.mozilla.org/firefox/new/" ${linkAttributes}>Mozilla Firefox</a>`;
  const edge = `<a href="https://www.microsoft.com/edge" ${linkAttributes}>Microsoft Edge</a>`;

  // prettier-ignore
  const locales: { [lang: string]: string } = {
    de: `<strong>Bitte beachten Sie, dass der verwendete Browser nicht mehr unterstützt wird.</strong><br> Am besten wechseln Sie direkt auf die neueste Version von ${chrome}, ${firefox} oder ${edge}.`,
    ru: `<strong>Обратите внимание, что используемый Вами браузер больше не поддерживается.</strong><br> Рекомендуется перейти на последнюю версию ${chrome}, ${firefox} или ${edge}.`,
    fr: `<strong>Veuillez noter que le navigateur utilisé n\'est plus pris en charge.</strong><br> Il serait préférable de passer directement à la dernière version de ${chrome}, ${firefox} ou ${edge}.`,
    en: `<strong>Your browser is out of date.</strong><br> Everyone needs a pit stop sometime. To enjoy our site as usual, please update your browser or download ${chrome}, ${firefox} or ${edge}.`,
    it: `<strong>Si prega di notare che il browser utilizzato non è più supportato.</strong><br> Si consiglia di aggiornare ${chrome}, ${firefox} o ${edge} all’ultima versione.`,
    pt: `<strong>É favor notar que o navegador usado já não é suportado.</strong><br> Seria melhor mudar directamente para a versão mais recente do ${chrome}, ${firefox} ou ${edge}.`,
    es: `<strong>Tenga en cuenta que el navegador utilizado ya no es compatible.</strong><br> Sería mejor cambiar directamente a la última versión de ${chrome}, ${firefox} o ${edge}.`,
    ja: `ご使用のブラウザはサポートされていませんのでご注意ください。直接、最新版の<br> ${chrome}、${firefox}、${edge}に切り替えた方が良いでしょう。`,
    ko: `<strong>Please note that the used browser is no longer supported.</strong><br> It would be best to directly switch to the latest version of ${chrome}, ${firefox} or ${edge}.`,
    zh: `请注意，您正在使用的浏览器已不支持或版本太旧。请安装使用最新版本的<br> ${chrome}、${firefox}或${edge}。`,
    nl: `<strong>Houd er rekening mee dat de gebruikte browser niet langer wordt ondersteund.</strong><br> U kunt het beste direct overschakelen op de nieuwste versie van ${chrome}, ${firefox} of ${edge}.`,
    pl: `<strong>Należy pamiętać, że używana przeglądarka nie jest już obsługiwana.</strong><br> Najlepiej bezpośrednio przełączyć się na najnowszą wersję ${chrome}, ${firefox} lub ${edge}.`,
  };

  const preventBannerFromBeingShown = (): void => {
    sessionStorage.setItem(ID, 'true');
  };

  const shallBannerBeShown = (): boolean => {
    return sessionStorage.getItem(ID) !== 'true';
  };

  const getLang = (): string => {
    const htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
    const locale = htmlLang?.slice(0, 2);
    return locale && locale in locales ? locale : 'en';
  };

  const addStyles = (css: string): void => {
    const head = document.head;
    const charsetTag = head.querySelector('meta[charset]');
    const style = document.createElement('style');

    style.appendChild(document.createTextNode(css));

    if (charsetTag !== null) {
      head.insertBefore(style, charsetTag.nextSibling);
    } else if (head.childNodes.length > 0) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  };

  const addMarkup = (html: string): void => {
    const body = document.body;
    const markup = document.createElement('div');
    markup.id = ID;
    markup.innerHTML = html;
    body.appendChild(markup);
  };

  /* Auto Generated Start */

  // prettier-ignore
  const html = '<div><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24" width=100% height=100% focusable=false><path d="M12 3L3 21h18zm0 2.24L19.38 20H4.62z"/><path d="M12.5 15l.5-5h-2l.49 5h1.01zM11 16h2v2h-2z"/></svg><p>CONTENT</p></div>'.replace('CONTENT', locales[getLang()]);
  // prettier-ignore
  const css = '#ID{position:fixed;display:flex;justify-content:center;margin:0;padding:0 7vw;top:0;bottom:0;left:0;right:0;box-sizing:border-box;z-index:99999}#ID>div{position:relative;width:100%;max-width:96rem;margin:0;padding:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#fff;text-align:center}#ID>div>svg{width:3rem;height:3rem;margin:0;padding:0;flex-shrink:0}#ID>div>p{margin:0;padding:0 1.5rem 0 1rem;max-width:59.25rem;font-size:1rem;font-family:PorscheNext-Regular,"Arial Narrow",Arial,sans-serif;font-weight:400;line-height:1.5;color:#000}#ID>div>p>a{margin:0;padding:0;color:#000;font-weight:700;text-decoration:underline;white-space:nowrap;transition:color .24s ease}#ID>div>p>a:hover{color:#d5001c}'.replace(/ID/g, ID);

  /* Auto Generated End */

  if (shallBannerBeShown()) {
    addStyles(css);
    addMarkup(html);
  }
})();
