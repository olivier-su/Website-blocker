# Website-blocker

## Simple custom Chrome extension to block specified URLs

I was looking for ways to boost productivity by blocking distracting websites. I found the extension BlockSite but the free version only allows for 3 website blocks. I then decided to create my own extension that would allow me to easily block any distracting websites on demand without having to pay!

### How to use:

1. Clone the repository
2. In the background.js file, add the URLs of the links that you are trying to block into the block list array.
   - For example: To block youtube, you would add "_://_.youtube.com/\*" to the array. You should separate urls with a comma.  
     const blockList = ["*://*.twitch.tv/*", "*://*.youtube.com/*"]; This blocks twitch and youtube
3. After modifying the background.js file, navigate to chrome://extensions/ on your google chrome browser.
4. Make sure developer mode is on
5. Press on load upacked
6. Select the folder where you cloned the repository
7. The extension should now appear on your list of chrome extensions and you can now use it!
