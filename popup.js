// popup.js
document.addEventListener('DOMContentLoaded', function() {
  var readCookieButton = document.getElementById('readCookieButton');
  readCookieButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({action: 'readCookie'}, function(response) {
      console.log("Cookies logged to the console");
    });
  });
});
