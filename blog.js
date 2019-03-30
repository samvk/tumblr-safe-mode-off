// automatically click "View this Tumblr"
const observer = new MutationObserver((_, self) => {
    const showMeButton = document.querySelector('.peepr-drawer-container .show-me');
    if (showMeButton) {
        showMeButton.click();
        // self.disconnect();
    }
});
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// default to "fullscreen" with query string
const urlParams = new URLSearchParams(location.search);
const fullscreen = urlParams.has('peepr-fullscreen');

if (fullscreen) {
    document.body.classList.add('peepr-fullscreen');
}
