document.addEventListener("DOMContentLoaded", function () {
  var repoLink = document.querySelector('a.md-source');
  if (repoLink) {
    var repoUrl = repoLink.href;
    var headers = document.querySelectorAll('.headerlink');
    headers.forEach(function (header) {
      var path = window.location.pathname.substring(1);
      var repoName = new URL(repoUrl).pathname.split('/').slice(2).join('/');
      if (path.startsWith(repoName)) {
        path = path.slice(repoName.length);
      }
      if (path === "/") {
        path = "home page";
      }
      var issueUrl = repoUrl + "/issues/new?title=Issue%20at%20" + encodeURIComponent(header.getAttribute('href')) + "%20from%20" + encodeURIComponent(path) + "&body=Document%20link%20" + encodeURIComponent(window.location.href);
      var issueLink = document.createElement("a");
      issueLink.href = issueUrl;
      issueLink.title = "Report an issue";
      issueLink.className = "headerlink";
      issueLink.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" style="fill: var(--md-default-fg-color--lighter);"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> <span style="font-size: 20px;">Issue</span>';
      header.parentElement.appendChild(issueLink);
    });
  }
});
