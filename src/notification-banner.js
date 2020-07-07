const randomString = () => Math.random().toString(36).substr(2, 9);
const rs = randomString();
const bannerId = `nb-${rs}`;

const locales = {
  'cs_CZ': '',
  'da_DK': '',
  'de_DE': '',
  'en_GB': {
    'p1': 'Please note that from 1st of October 2020 you wont be able to access this site with your current browser.',
    'p2': 'Use the latest version of',
    'p3': 'instead - and get back on track.'
  },
  'en_US': '',
  'es_ES': '',
  'et_EE': '',
  'fi_FI': '',
  'fr_FR': '',
  'it_IT': '',
  'ja_JP': '',
  'ko_KR': '',
  'lt_LT': '',
  'lv_LV': '',
  'nl_NL': '',
  'no_NO': '',
  'pl_PL': '',
  'pt_PT': '',
  'ru_RU': '',
  'sv_SE': '',
  'tr_TR': '',
  'zh_CN': '',
  'zh_TW': ''
}

const html = `
<div id="notification-banner-${rs}">
  <div class="content-wrapper-${rs}">
    <div class="content-${rs}">
      <div class="icon-${rs}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" focusable="false">
          <path d="M11.49 13h1.01l.5-6h-2l.49 6zM11 15h2v2h-2z"></path>
          <path d="M12 3a9 9 0 109 9 9 9 0 00-9-9zm0 17a8 8 0 118-8 8 8 0 01-8 8z"></path>
        </svg>
      </div>
      <p class="description-${rs}">
        Please note that from 1st of October 2020 you wont be able to access this site with your current browser.
        <br />
        Use the latest version of <a href="https://www.google.com/chrome/" target="_blank">Chrome</a>,
        <a href="https://www.microsoft.com/edge" target="_blank">Microsoft Edge</a>, or
        <a href="https://www.mozilla.org/firefox/new/" target="_blank">Mozilla Firefox</a> instead - and get back on track.
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
  padding-left: 7vw;
  padding-right: 7vw;
  max-width: 1920px;
  position: absolute;
  top: 100px;
  margin: 0px auto;
  width: 100%;
  box-sizing: border-box;
  z-index: 99999;
}

#notification-banner-${rs} .content-wrapper-${rs} {
  position: relative;
  background-color: #fff5e5;
  border-left: 8px solid #ff9b00;
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
  padding: 4px 0 0 24px;
  color: #000;
  font-size: 14px;
  font-family: PorscheNext-Regular, 'Arial Narrow', Arial, sans-serif;
  font-weight: normal;
  line-height: 20px;
  margin: 0;
}

#notification-banner-${rs} .description-${rs} a {
  color: #000;
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


(() => {
  insertSlottedStyles(css);
  const div = document.createElement('div');
  div.id = bannerId;
  document.body.appendChild(div);
  div.innerHTML = html;
})();
