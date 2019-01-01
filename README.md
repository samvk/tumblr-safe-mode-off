# Tumblr-Safe-Mode-Bypass
A browser plugin to display all posts hidden behind the 'adult content' error, and display Tumblr blogs blocked by the 'sensetive media' error.

# Code
Blog unblocking is done by redirecting blocked blocks to instead display in the Tumblr side bar (which doesn't block blogs). The redirection code is from https://github.com/bendavis78/chrome-extension-redirector.

Post unblocking is done by modifying the dashboard.js file and using a custom one included in this plugin. Dashboard.js originally from https://assets.tumblr.com/assets/scripts/dashboard.js.

In the modified dashboard.js these 4 values are modified to always return true:
- shouldBypassSafeModeForBlog:true
- shouldBypassSafeModeForPost:true
- shouldBypassTagFiltering:true
- canModifySafeMode:true

## Installing the Plugin
The plugin is available in the Chrome Web Store.

[Link](https://chrome.google.com/webstore/detail/boibcalhejlcjjggfnochjmhccpgbidd/)
