((): void => {
  const ID = 'pds-browser-notification-banner';

  // prettier-ignore
  const locales: { [lang: string]: string; } = {
    'de': '<strong>Bitte beachten Sie, dass der verwendete Browser nicht mehr unterstützt wird.</strong><br> Am besten wechseln Sie direkt auf die neueste Version von <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> oder <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'ru': '<strong>Обратите внимание, что используемый Вами браузер больше не поддерживается.</strong><br> Рекомендуется перейти на последнюю версию <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> или <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'fr': '<strong>Veuillez noter que le navigateur utilisé n\'est plus pris en charge.</strong><br> Il serait préférable de passer directement à la dernière version de  <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> ou <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'en': '<strong>Please note that the used browser is no longer supported.</strong><br> It would be best to directly switch to the latest version of <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> or <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'it': '<strong>Si prega di notare che il browser utilizzato non è più supportato.</strong><br> Si consiglia di aggiornare <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> o <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a> all’ultima versione.',
    'pt': '<strong>É favor notar que o navegador usado já não é suportado.</strong><br> Seria melhor mudar directamente para a versão mais recente do <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> ou <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'es': '<strong>Tenga en cuenta que el navegador utilizado ya no es compatible.</strong><br> Sería mejor cambiar directamente a la última versión de <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> o <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'ja': 'ご使用のブラウザはサポートされていませんのでご注意ください。直接、最新版の<br> <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>、<a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a>、<a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>に切り替えた方が良いでしょう。',
    'ko': '<strong>Please note that the used browser is no longer supported.</strong><br> It would be best to directly switch to the latest version of <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> or <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'zh': '请注意，您正在使用的浏览器已不支持或版本太旧。请安装使用最新版本的<br> <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>、<a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a>或<a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>。',
    'nl': '<strong>Houd er rekening mee dat de gebruikte browser niet langer wordt ondersteund.</strong><br> U kunt het beste direct overschakelen op de nieuwste versie van <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> of <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'pl': '<strong>Należy pamiętać, że używana przeglądarka nie jest już obsługiwana.</strong><br> Najlepiej bezpośrednio przełączyć się na najnowszą wersję <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> lub <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.'
  }

  const preventBannerFromBeingShown = (): void => {
    sessionStorage.setItem(ID, 'true');
  };

  const shallBannerBeShown = (): boolean => {
    return sessionStorage.getItem(ID) !== 'true';
  };

  const getLang = (): string => {
    const htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
    const locale = htmlLang && htmlLang.slice(0, 2);
    return locale && locale in locales ? locale : 'en';
  };

  const minifyStyles = (css: string): string => {
    return css
      .replace(/\s{2,}|(\/\*.*\*\/)/g, '') // remove 2 and more white spaces + comments
      .replace(/(:|;)\s/g, '$1') // remove space after colon and semi colon
      .replace(/[\s;]({|})\s?/g, '$1'); // remove semi colon and space before and after opening and closing curly bracket
  };

  const addStyles = (css: string): void => {
    const head = document.head;
    const charsetTag = head.querySelector('meta[charset]');
    const style = document.createElement('style');

    style.appendChild(document.createTextNode(minifyStyles(css)));

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

  const html = `
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" focusable="false">
        <path d="M12 3L3 21h18zm0 2.24L19.38 20H4.62z"/>
        <path d="M12.5 15l.5-5h-2l.49 5h1.01zM11 16h2v2h-2z"/>
      </svg>
      <p>
        ${locales[getLang()]}
      </p>
      <button type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" focusable="false">
          <path d="M4.91 19h1.5L12 12.83 17.59 19h1.5l-6.34-7 6.34-7h-1.5L12 11.17 6.41 5h-1.5l6.34 7-6.34 7z"/>
        </svg>
      </button>
    </div>
  `;

  const css = `
  #${ID} {
    position: fixed;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0 7vw;
    top: -100%;
    left: 0;
    right: 0;
    box-sizing: border-box;
    z-index: 99999;
    opacity: 0;
    transition: top 500ms ease 1000ms, opacity 500ms ease 1000ms;
  }
  
  #${ID}.${ID}--loaded {
    top: 3rem;
    opacity: 1;
  }
  
  #${ID} > div {
    position: relative;
    width: 100%;
    max-width: 96rem;
    margin: 0;
    padding: 1rem 3rem 1rem 1rem;
    display: flex;
    background-color: #fff5e5;
    border-top: 4px solid #ff9b00;
    box-shadow: 0 0 2.1875rem 0 #C9CACB;
  }
  
  #${ID} > div > svg {
    width: 3rem;
    height: 3rem;
    margin: 0;
    padding: 0;
    flex-shrink: 0;
  }
  
  #${ID} > div > p {
    margin: 0;
    padding: 0 1.5rem 0 1rem;
    max-width: 59.25rem;
    font-size: 1rem;
    font-family: PorscheNext-Regular, 'Arial Narrow', Arial, sans-serif;
    font-weight: normal;
    line-height: 1.5;
    color: #000;
  }
  
  #${ID} > div > p > a {
    margin: 0;
    padding: 0;
    color: #000;
    font-weight: bold;
    text-decoration: underline;
    white-space: nowrap;
    transition: color 0.24s ease;
  }
  
  #${ID} > div > p > a:hover {
    color: #d5001c;
  }
  
  #${ID} > div > button {
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
    background-color: transparent;
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
    transition: color 0.24s ease;
  }
  
  #${ID} > div > button:hover {
    color: #d5001c;
  }
  
  #${ID} > div > button:focus {
    outline: 2px solid #00d5b9;
    outline-offset: 1px;
  }
  
  #${ID} > div > button > svg {
    fill: currentColor;
    margin: 0;
    padding: 0;
  }
  `;

  if (shallBannerBeShown()) {
    addStyles(css);
    addMarkup(html);
    applyLogic();
  }
})();
