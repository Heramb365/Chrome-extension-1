const NOTION_PAGE_URL = 'https://www.notion.so/62c6952e390a4678ae8011d1dd24e3aa?v=587a1e17a676461891a16303e22c56ae';
const OPENED_TABS = {};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'loading' && tab.url.includes('meet.google.com/')) {
    if (!OPENED_TABS[tabId]) {
      OPENED_TABS[tabId] = true;
      chrome.tabs.create({ url: NOTION_PAGE_URL });
    }
  } else if (changeInfo.status === 'complete') {
    delete OPENED_TABS[tabId];
  }
});
