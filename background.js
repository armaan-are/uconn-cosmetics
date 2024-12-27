// For testing, log the database on startup
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get(['urlDatabase'], (result) => {
    console.log('urlDatabase on startup:', result.urlDatabase);
  });
});