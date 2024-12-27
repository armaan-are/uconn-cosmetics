// Function to change the background color and update styles and colors
function changeBackgroundColor() {
    const newColor = '#0f1938'; // The Blue UConn Color
  
    // Change body and root element background color
    document.body.style.backgroundColor = newColor;
    document.documentElement.style.setProperty('--bs-body-bg', newColor); // Sets background color to UConn Blue
    document.documentElement.style.setProperty('--pt-tile-background-color', '#3f4962'); // Sets color of StudentAdmin Tiles
    document.documentElement.style.setProperty('--pt-tile-header-text-color', '#ffffff'); // Sets color of StudentAdmin Tile Header Text
    document.documentElement.style.setProperty('--pt-tile-text-color', '#ffffff'); // Sets Color of StudentAdmin Tile normal text
    document.documentElement.style.setProperty('--pt-tile-active-background-color', '#788697'); // Sets color of StudentAdmin Tile when clicked
    document.documentElement.style.setProperty('--pt-tile-emphasis-text-color', '#ffffff'); // Sets color of StudentAdmin Tile emphasis text
    document.documentElement.style.setProperty('--pt-tile-hover-shadow-color', '#000000db'); // Sets color of StudentAdmin Tile shadow 
    document.documentElement.style.setProperty('--pt-banner-button-hover-background-color', '#3f4962'); // Sets color of StudentAdmin Banner Hover Color 
    document.documentElement.style.setProperty('--pt-header-hover-text-color', '#535653'); // Sets color of StudentAdmin Banner Hover Color 
    document.documentElement.style.setProperty('--pt-palette-11', '#b1bfe31a'); // Sets color of when you hover over a button StudentAdmin
    document.documentElement.style.setProperty('--pt-selected-background-color', '#8299d038'); // Sets color of selected button from left menu StudentAdmin
    document.documentElement.style.setProperty('--pt-selected-border-color', '#0f1938'); // Sets border color of selected button from left menu StudentAdmin
    document.documentElement.style.setProperty('--pt-palette-17', '#000e2f'); // Sets color of search bar student admin
    document.documentElement.style.setProperty('--pt-palette-8', newColor); // Sets color of search bar student admin
    document.documentElement.style.setProperty('--pt-page-text-color', '#ffffff'); // Sets color of search bar student admin
    document.documentElement.style.setProperty('--pt-page-background-color', '#232428'); // Sets color of search bar student admin
    document.documentElement.style.setProperty('--pt-page-text-alt-color', '#c8c8c8'); // Sets color of search bar student admin
    document.documentElement.style.setProperty('--pt-palette-26', '#000e2f'); // Sets color of search bar student admin
    document.documentElement.style.setProperty('--pt-button-primary-background-color', '#0f1938'); // Sets border color of selected button from left menu StudentAdmin
    document.documentElement.style.setProperty('--pt-link-text-color', '#9abfea'); // Sets color of link text
    document.documentElement.style.setProperty('--pt-badge-background-color', '#ac0008'); // Sets color of StudentAdmin Banner Hover Color 
    document.documentElement.style.setProperty('--pt-palette-13', '#0f1938'); // Sets color of link text
    document.documentElement.style.setProperty('--pt-palette-12', '#0f193861'); // Sets color of link text
    document.documentElement.style.setProperty('--pt-palette-9', newColor); // Sets color of link text

    // Create and append a new style element
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
      .ps_box-button.ps_button_stdheader.psc_primary .ps-button:link, 
      .ps_box-button.ps_button_stdheader.psc_primary .ps-button:not(.psc_disabled) .ps-button:hover {
        color: #fcfcfc !important;
        border-color: #246fc7 !important;
        background: #246FC7 !important;
        color: var(--pt-button-primary-text-color) !important;
        border-color: #000e2f !important;
        background: #0f1938 !important;
      }
      .uc_pagetitle h1, .uc_pagetitle h2 {
        color: #d6d6d6 !important;
        border-bottom: 1px solid #ccc !important;
        font-size: 1.17em !important;
      }
    .nuilppnl .lptabpnl .ps_box-scrollarea-row {
      background: #0f1938 !important;
  }
      .sticky #uc-footer {
        position: absolute !important;
        bottom: 0 !important;
        left: 0 !important;
        width: 100% !important;
      }
      #uc-footer {
        border-top: 1px solid #000 !important;
        font-size: 13px !important;
        background-color: #000 !important;
      }
      #uc-footer a {
        margin: 0 1em !important;
        color: #8c8c8c !important;
        text-decoration: none !important;
      }
      .ps_header_bar_cont + .ps_pagetitle_cont {
        width: 100vw !important;
        min-height: calc(3em + var(--pt-strip-height)) !important;
        background: #000e2f !important;
        color: #ffffff !important;
        border-bottom: 1px solid #ffffff !important;
        position: relative !important;
        box-sizing: border-box !important;
        padding-top: var(--pt-strip-height) !important;
      }
      .lpnavigation {
        padding: 0.15em 1em !important;
        color: #1d2733 !important;
        text-align: left !important;
        border-bottom: 1px solid #848c94 !important;
        display: flex !important;
        flex-direction: row !important;
        width: 100% !important;
        background: #000e2f !important;
        color: #ffffff !important;
        border-color: #505d7c !important;
        padding-right: 0.25em !important;
      }
      .ps_header_bar .pts_category_button, 
      .ps_header_bar .pts_search_button, 
      .pts_search_widget_for_classic .pts_category_button, 
      .pts_search_widget_for_classic .pts_search_button {
        --pt-page-text-color: #ffffff !important;
        --pt-hover-background-color: #3f4962 !important;
        --pt-hover-outline-color: #3f496200 !important;
        --pt-active-background-color: var(--pt-palette-2) !important;
        --pt-active-outline-color: transparent !important;
        --pt-active-text-color: var(--pt-palette-1) !important;
      }
      .ps_header-group, .ps_grid-title, .ps_header-group > .ps-link, 
      .ps_header-group > .ps-link:hover, .ps_header-group > a, 
      .ps_header-group > a:hover, .ps_modal_header, 
      .psc_modal-pagetitle, .ps_prompt-header .ps_pagetitle {
        color: #fff !important;
        font-weight: bold !important;
      }
      .nuihdr_logo {
        margin-bottom: 0px !important;
        margin-left: 17px !important;
      }
      .psa_biographic_grid .ps_grid-title, .ps_header-group {
        color: #fff !important;
        font-weight: bold !important;
        white-space: nowrap !important;
        text-overflow: ellipsis !important;
        overflow: hidden !important;
      }
      .uc_container_pos_instructions {
      display: flex !important;
      flex-direction: column !important;
      flex-wrap: wrap !important;
      margin: 20px 0px 30px 0px !important;
      font-family: Verdana, Arial, sans-serif !important;
      font-size: 13px !important;
      font-weight: normal !important;
      font-style: normal !important;
      color: rgb(255 255 255) !important;
      text-align: justify !important;
  }
    .ps_box-value {
      color: rgb(255 255 255) !important;
  }
  label, .ps-label, .ps-required, .psc_value-aslabel {
      font-weight: bold !important;
      white-space: normal !important;
      color: #5a5a5a !important;
      color: #ffffff !important;
  }
      .pts_searched_keyword > .ps-htmlarea > b {
      color: rgb(255, 255, 255) !important;
      font-weight: bold !important;
      color: #ffffff !important;
  }
      .psa_desccolor > .ps-link-wrapper > .ps-link, .psa_desccolor .ps_box-value {
      color: rgb(255 255 255) !important;
  }
          .psa_list-linkitem > .ps-link-wrapper > .ps-link {
        display: block !important;
        color: #fff !important;
        text-decoration: none !important !important;
        font-weight: bold !important;
        text-overflow: ellipsis !important;
        overflow: hidden !important;
        white-space: nowrap !important;
        width: 100% !important;
      }
        .PSPAGE {
    font-family: Arial, sans-serif !important;
    background-color: rgb(255, 255, 12) !important !important;
    margin-top: 0px !important;
    margin-left: 2px !important;
}
    .uc_bn_bookstore > div {
    background-color: #232428 !important;
    width: 100% !important;
    margin: 10px !important;
    text-align: center !important;
    line-height: 30px !important;
    font-size: 20px !important;
}
    .uc_bn_bookstore {
    display: flex !important;
    flex-direction: column !important;
    flex-wrap: wrap !important;
    background-color: #232428 !important;
    padding-top: 20px !important;
    align-content: space-between !important;
}
    .ps_header-banner, .ps_header_bar {
    display: block !important;
    border: none !important;
    border-bottom: 1px solid #f0f0f0 !important;
    vertical-align: middle !important;
    text-align: center !important;
    position: relative !important;
    white-space: nowrap !important;
    color: rgba(255, 255, 255, 0.95) !important;
    background: #1D2733 !important;
    text-align: left !important;
    width: 100vw !important;
    background-color: var(--pt-banner-background-color) !important;
    color: #ffffff !important;
    border-bottom: none;
}
.psa_vsubtab .psc_selected, .psa_vsubtab .psc_selected:hover, .psa_vtab .psc_selected, .psa_vtab .psc_selected:hover, li.psc_selected > .psa_vsubtab {
    background: #8299d038 !important;
}
    .tdcolorgreen {
    background-color: #28355a; !important;
}
    .direct_card_header {
    background-color: #000e2f !important;
    /* border-bottom: 1px #9d77e9; */ !important;
    font-weight: bold;
    height: 30px;
    opacity: 1;
    /* text-shadow: 1px 1px 2px white; */ !important;
}
    .direct_card .ps_grid-row {
    height: 165px;
    width: 300px;
    margin-right: 0.2em;
    margin-left: 0.2em;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    vertical-align: top;
    border-radius: 5px;
    background-color: rgb(40 53 90) !important;
    overflow: hidden;
    cursor: pointer;
    display: inline-block;
    text-align: left;
}
    .direct_card_borderbottom {
    border-bottom: #28355a !important;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    padding-top: .1em;
    font-weight: bold;
}
    .direct_card_link_color a:link {
    color: #9abfea !important;
}
    .tdcolorgreen {
    background-color: #0f1938 !important;
}
    `;
    document.head.appendChild(style);
    console.log('Styles applied successfully');
  }

  function delayedCode() {
    const style1 = document.createElement('style');
    style1.type = 'text/css';
    style1.innerHTML = `
    .PSPAGE {
    font-family: Arial, sans-serif !important;
    background-color: rgb(255, 255, 12) !important;
    margin-top: 0px !important;
    margin-left: 2px !important;
}

    `;
    document.head.appendChild(style1);
    console.log("YASSSSSSSS");
  }

  // Function to delete the image background at the top of StudentAdmin
  function deleteHtmlElement() {
    const element = document.getElementById('win0hdrdivPT_TITLE_CONT1');
    if (element) {
      element.remove();
    }
  }

  // Function to remove the image background at the top of the financial aid page in StudentAdmin
  function removeCssProperty() {
    document.querySelectorAll('*').forEach(element => {
      const computedStyle = getComputedStyle(element);
      if (computedStyle.getPropertyValue('--pt-strip-background')) {
        element.style.setProperty('--pt-strip-background', 'none');
        console.log("Removed '--pt-strip-background' from element:", element);
      }
    });
  }

  // Function to remove the HTML element with id "iam_wrap" and its contents
  function removeIamWrap() {
    const iamWrapElement = document.getElementById('iam_wrap');
    if (iamWrapElement) {
      iamWrapElement.remove();
    }
    const iamWrapElement1 = document.getElementById('win67hdrdivPT_TITLE_CONT1');
    if (iamWrapElement1) {
      iamWrapElement1.remove();
    }
    const iamWrapElement2 = document.getElementById('win204hdrdivPT_TITLE_CONT1');
    if (iamWrapElement2) {
      iamWrapElement2.remove();
    }
    const removeUCFooter = document.getElementById('uc-footer');
    if (removeUCFooter) {
      removeUCFooter.remove();
    }
    
  }

  // Function to change the favicon
  function changeFavicon(newIconUrl) {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = newIconUrl;
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = newIconUrl;
      document.head.appendChild(newFavicon);
    }
  }


// Function to replace image URLs with CSS !important
function injectCustomCSS() {
    // Retrieve the urlDatabase from chrome storage
    chrome.storage.local.get('urlDatabase', (data) => {
      const urlDatabase = data.urlDatabase || {};  // Default to empty if no database
  
      const style = document.createElement('style');
      let cssContent = '';
  
      // Loop through each URL in the database and create a CSS rule to replace it
      for (const originalUrl in urlDatabase) {
        const newUrl = urlDatabase[originalUrl];
        cssContent += `.course-banner[style*="url('${originalUrl}')"] {
          background-image: url('${newUrl}') !important;
        }`;
      }
  
      // Inject the CSS into the document
      style.textContent = cssContent;
      document.head.appendChild(style);
    });
  }
  
  // Call this function to apply image replacements when the content script is loaded
  injectCustomCSS();
  
  // Run the CSS injection on page load
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded, injecting CSS...");
    injectCustomCSS();
  });

// Execute functions when the page is fully loaded
window.addEventListener('load', () => {
    changeBackgroundColor();
    deleteHtmlElement();
    removeCssProperty();
    removeCssProperty();
    removeIamWrap();
    changeFavicon('https://i.ibb.co/bFdS0b9/Connecticut-Huskies-logo-svg.png');
    setTimeout(changeBackgroundColor, 3000);
});

