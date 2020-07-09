(() => {
  const rs = Math.random().toString(36).substr(2, 9);
  const bannerId = `nb-${rs}`;

  const locales = {
    'cs': {
      'c1': 'Czech',
      'c2': 'Lorem ipsum...',
    },
    'da': {
      'c1': 'Danish',
      'c2': 'Lorem ipsum...',
    },
    'de': {
      'c1': 'Ende des Supports des Internet Explorer 11!',
      'c2': 'Bitte beachten Sie, dass das Porsche Design System nicht länger den Internet Explorer 11 als Browser unterstützt. Wir empfehlen auf einen der folgenden Browser zu wechseln: ',
    },
    'en': {
      'c1': 'IE 11 end of support!',
      'c2': 'Please note that the Porsche Design System no longer supports Internet Explorer 11. Support will expires latest by 1st of October 2020. We recommend upgrading to the latest',
    },
    'es': {
      'c1': 'Spanish',
      'c2': 'Lorem ipsum...',
    },
    'et': {
      'c1': 'Estonian',
      'c2': 'Lorem ipsum...',
    },
    'fi': {
      'c1': 'Finnish',
      'c2': 'Lorem ipsum...',
    },
    'fr': {
      'c1': 'France',
      'c2': 'Lorem ipsum...',
    },
    'it': {
      'c1': 'Italian',
      'c2': 'Lorem ipsum...',
    },
    'ja': {
      'c1': 'Japanese',
      'c2': 'Lorem ipsum...',
    },
    'ko': {
      'c1': 'Korean',
      'c2': 'Lorem ipsum...',
    },
    'lt': {
      'c1': 'Lithuanian',
      'c2': 'Lorem ipsum...',
    },
    'lv': {
      'c1': 'Lettish',
      'c2': 'Lorem ipsum...',
    },
    'nl': {
      'c1': 'Dutch',
      'c2': 'Lorem ipsum...',
    },
    'no': {
      'c1': 'Norwegian',
      'c2': 'Lorem ipsum...',
    },
    'pl': {
      'c1': 'Polish',
      'c2': 'Lorem ipsum...',
    },
    'pt': {
      'c1': 'Portuguese',
      'c2': 'Lorem ipsum...',
    },
    'ru': {
      'c1': 'Russian',
      'c2': 'Lorem ipsum...',
    },
    'sv': {
      'c1': 'Swedish',
      'c2': 'Lorem ipsum...',
    },
    'tr': {
      'c1': 'Turkish',
      'c2': 'Lorem ipsum...',
    },
    'zh': {
      'c1': 'Chinese',
      'c2': 'Lorem ipsum...',
    }
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
        <p class="description-${rs}">
          <b>${locales[lang].c1}</b> ${locales[lang].c2} <a href="https://www.google.com/chrome/" target="_blank">Chrome</a>, <a href="https://www.microsoft.com/edge" target="_blank">Microsoft Edge Chromium</a>, <a href="https://www.mozilla.org/firefox/new/" target="_blank">Mozilla Firefox</a> or <b>Safari</b>.
        </p>
      </div>
      <button type="button" class="button-close-${rs}" onclick="removeBanner();">
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
  
  #notification-banner-${rs} .description-${rs} {
    padding: 4px 24px 0 24px;
    max-width: 948px;
    color: #000;
    font-size: 16px;
    font-family: PorscheNext-Regular, 'Arial Narrow', Arial, sans-serif;
    font-weight: normal;
    line-height: 24px;
    margin: 0;
  }
  
  #notification-banner-${rs} .description-${rs} a {
    color: #000;
    font-weight: bold;
    text-decoration: underline;
    transition: color 0.24s ease;
  }
  
  #notification-banner-${rs} .description-${rs} a:hover {
    color: #d5001c;
  }
  
  #notification-banner-${rs} .button-close-${rs} {
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
  
  #notification-banner-${rs} .button-close-${rs} svg {
    fill: currentColor;
  }
  
  #notification-banner-${rs} .button-close-${rs}:hover {
    color: #d5001c;
  }
  
  #notification-banner-${rs} .button-close-${rs}:focus {
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
