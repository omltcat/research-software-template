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
        var section = encodeURIComponent(header.getAttribute('href'));
        var issueUrl = repoUrl + "/issues/new?title=Issue%20at%20" + section + "%20from%20" + encodeURIComponent(path) + "&body=Document%20link%20" + encodeURIComponent(window.location.href) + section + "&labels=documentation";
        var issueLink = document.createElement("a");
        issueLink.href = issueUrl;
        issueLink.title = "Report an issue";
        issueLink.className = "headerlink";
        issueLink.innerHTML = "✉"
        header.parentElement.appendChild(issueLink);
    });
}
