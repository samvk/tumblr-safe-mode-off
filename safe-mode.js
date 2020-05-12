// redirect to blog
const url = new URLSearchParams(window.location.search).get('url');
const blogName = url.match(/\/\/([^.]+)\./)[1];

if (blogName) {
  window.location.replace(`https://www.tumblr.com/dashboard/blog/${blogName}`);
}
