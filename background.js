// background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'readCookie') {
    chrome.cookies.getAll({}, function(cookies) {
      cookies.forEach(function(cookie) {
        console.log(cookie);
      });
    });
  }
});
