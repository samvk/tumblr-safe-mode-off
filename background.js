//dashboard.js copied from https://assets.tumblr.com/assets/scripts/dashboard.js and modified to have shouldBypassSafeModeForPost modified to always return true

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var redirects, pattern, from, to, redirectUrl;
    redirects = [
		[	
			"^https://www.tumblr.com/safe-mode\\?url=https?%3A%2F%2F(.*).tumblr.com.*",
			"https://www.tumblr.com/dashboard/blog/$1"
		]
	];
    for (var i=0; i<redirects.length; i++) {
      from = redirects[i][0];
      to = redirects[i][1];
      try {
        pattern = new RegExp(from, 'i');
      } catch(err) {
        //bad pattern
        continue;
      }
      match = details.url.match(pattern);
	  console.log(match);
      if (match) {
        redirectUrl = details.url.replace(pattern, to);
        if (redirectUrl != details.url) {
          return {redirectUrl: redirectUrl};
        }
      }
    }
    return {};
  },
  {
    urls: [
      "*://*.tumblr.com/*",
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);


chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
		return {redirectUrl: chrome.runtime.getURL('dashboard.js')};					 
    },
    { urls: ["https://assets.tumblr.com/assets/scripts/dashboard.js?*"] },
    ["blocking"]
);
