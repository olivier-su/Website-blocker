chrome.webRequest.onBeforeRequest.addListener(
  () => {
    return { cancel: true };
  },
  // Add the URLS that you want to block in this array with the same format
  { urls: ["*://*.twitch.tv/*"] },
  ["blocking"]
);
