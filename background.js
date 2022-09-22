const blockList = [
  "*://*.twitch.tv/*",
  "*://*.youtube.com/*",
  "*://*.reddit.com/*",
  "*://*.wowhead.com/*",
  "*://*.worldofwarcraft.com/*",
];

chrome.webRequest.onBeforeRequest.addListener(
  () => {
    return { cancel: true };
  },
  // Add the URLS that you want to block in this array with the same format
  { urls: blockList },
  ["blocking"]
);
