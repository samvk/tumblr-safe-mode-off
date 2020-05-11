// automatically click "View this Tumblr"
const observer = new MutationObserver((_, self) => {
    const showMeButton = document.querySelector('button[aria-label="View this Tumblr" i]'); // fragile - class names are all generated
    if (showMeButton) {
        document.querySelector('._3uGiA').classList.add('blog-fullscreen'); // only show blog fullscreen if safe-view
        showMeButton.click();
        // self.disconnect();
    }
});
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
