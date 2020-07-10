(() => {
  const rs = Math.random().toString(36).substr(2, 9);
  const bannerId = `nb-${rs}`;

  const locales = {
    'de': '<strong>Bitte beachten Sie, dass der verwendete Browser nicht mehr unterstützt wird.</strong><br> Am besten wechseln Sie direkt auf die neueste Version von <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> oder <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'ru': '<strong>Обратите внимание, что используемый Вами браузер больше не поддерживается.</strong><br> Рекомендуется перейти на последнюю версию <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> или <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'fr': '<strong>Veuillez noter que le navigateur utilisé n\'est plus pris en charge.</strong><br> Il serait préférable de passer directement à la dernière version de  <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> ou <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'en': '<strong>Please note that the used browser is no longer supported.</strong><br> It would be best to directly switch to the latest version of <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> or <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'it': '<strong>Si prega di notare che il browser utilizzato non è più supportato.</strong><br> Sarebbe meglio passare direttamente all\'ultima versione di <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> o <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'pt': '<strong>É favor notar que o navegador usado já não é suportado.</strong><br> Seria melhor mudar directamente para a versão mais recente do <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> ou <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'es': '<strong>Tenga en cuenta que el navegador utilizado ya no es compatible.</strong><br> Sería mejor cambiar directamente a la última versión de <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> o <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'ja': 'ご使用のブラウザはサポートされていませんのでご注意ください。直接、最新版の<br> <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>、<a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a>、<a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>に切り替えた方が良いでしょう。',
    'ko': '<strong>Please note that the used browser is no longer supported.</strong><br> It would be best to directly switch to the latest version of <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a> or <a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>.',
    'zh': '请注意，所使用的浏览器已不支持。最好直接切换到最新版本的<br> <a href="https://www.google.com/chrome/" target="_blank" rel="nofollow noopener">Google Chrome</a>、<a href="https://www.mozilla.org/firefox/new/" target="_blank" rel="nofollow noopener">Mozilla Firefox</a>或<a href="https://www.microsoft.com/edge" target="_blank" rel="nofollow noopener">Microsoft Edge</a>。'
  }

  const getHtmlLang = document.getElementsByTagName('html')[0].getAttribute('lang').slice(0, 2);
  const lang = getHtmlLang && getHtmlLang in locales ? getHtmlLang : 'en';

  const html = `
  <div id="notification-banner-${rs}">
    <div class="content-wrapper-${rs}">
      <div class="content-${rs}">
        <div class="icon-${rs}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" focusable="false"><path d="M12 3L3 21h18zm0 2.24L19.38 20H4.62z"/><path d="M12.5 15l.5-5h-2l.49 5h1.01zM11 16h2v2h-2z"/></svg>
        </div>
        <p>
          ${locales[lang]}
        </p>
      </div>
      <button type="button" onclick="removeBanner();">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" focusable="false">
          <path d="M4.91 19h1.5L12 12.83 17.59 19h1.5l-6.34-7 6.34-7h-1.5L12 11.17 6.41 5h-1.5l6.34 7-6.34 7z"/>
        </svg>
      </button>
    </div>
  </div>
  `;

  const css = `
  #notification-banner-${rs} {
    position: absolute;
    display: flex;
    justify-content: center;
    padding-left: 7vw;
    padding-right: 7vw;
    top: -100%;
    left: 0;
    right: 0;
    box-sizing: border-box;
    z-index: 99999;
    opacity: 0;
    transition: top 500ms ease 1000ms, opacity 500ms ease 1000ms;
  }
  
  #notification-banner-${rs}.loaded-${rs} {
    top: 100px;
    opacity: 1;
  }
  
  #notification-banner-${rs} .content-wrapper-${rs} {
    position: relative;
    width: 100%;
    max-width: 1536px;
    background-color: #fff5e5;
    border-top: 4px solid #ff9b00;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)
  }
  
  #notification-banner-${rs} .content-${rs} {
    padding: 12px 48px 12px 12px;
    display: flex;
  }
  
  #notification-banner-${rs} .icon-${rs} {
    width: 48px;
    height: 48px;
  }
  
  #notification-banner-${rs} p {
    padding: 4px 24px 0 24px;
    max-width: 948px;
    color: #000;
    font-size: 16px;
    font-family: PorscheNext-Regular, 'Arial Narrow', Arial, sans-serif;
    font-weight: normal;
    line-height: 24px;
    margin: 0;
  }
  
  #notification-banner-${rs} p > a {
    color: #000;
    font-weight: bold;
    text-decoration: underline;
    transition: color 0.24s ease;
    white-space: nowrap;
  }
  
  #notification-banner-${rs} p > a:hover {
    color: #d5001c;
  }
  
  #notification-banner-${rs} button {
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
    background-color: transparent;
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
    transition: color 0.24s ease;
  }
  
  #notification-banner-${rs} button > svg {
    fill: currentColor;
  }
  
  #notification-banner-${rs} button:hover {
    color: #d5001c;
  }
  
  #notification-banner-${rs} button:focus {
    outline: 2px solid #00d5b9;
    outline-offset: 1px;
  }
  `;

  const removeBanner = () => {
    const banner = document.getElementById(bannerId);
    const script = document.getElementById('notification-banner-script');
    const style = document.getElementById('notification-banner-style');
    document.body.removeChild(banner);
    document.body.removeChild(script);
    document.head.removeChild(style);
    document.cookie = 'notification-banner=true';
  }

  const insertSlottedStyles = (css) => {
    const style = document.createElement('style');
    style.id = 'notification-banner-style';
    style.appendChild(document.createTextNode(minifySlottedStyles(css)));

    const prependTo = document.head;
    const charsetTag = prependTo.querySelector('meta[charset]');

    if (charsetTag !== null) {
      prependTo.insertBefore(style, charsetTag.nextSibling);
    } else if (prependTo.childNodes.length > 0) {
      prependTo.insertBefore(style, prependTo.firstChild);
    } else {
      prependTo.appendChild(style);
    }
  };

  const minifySlottedStyles = (css) =>
      css
          .replace(/\s{2,}|(\/\*.*\*\/)/g, '') // remove 2 and more white spaces + comments
          .replace(/(:|;)\s/g, '$1') // remove space after colon and semi colon
          .replace(/[\s;]({|})\s?/g, '$1'); // remove semi colon and space before and after opening and closing curly bracket



  insertSlottedStyles(css);
  const div = document.createElement('div');
  div.id = bannerId;
  document.body.appendChild(div);
  div.innerHTML = html;
  const banner = document.getElementById(`notification-banner-${rs}`);
  setTimeout(() => {
    banner.classList.add(`loaded-${rs}`);
  }, 500);
})();
