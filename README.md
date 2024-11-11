# Research Software Template

## GitHub Pages Setup
This repo already has been set up with a GitHub Actions workflow to build the documentation site using MkDocs. But you still need to enable GitHub Pages for this repo first:

1. Go to your repo settings
2. On the left sidebar, click on "Pages".
3. Under "Source", select "Deploy from a branch".
4. Choose the `gh-pages` branch and `/(root)`.
5. Click "Save".

Then edit the `mkdocs.yml` file accordingly with your GitHub Pages and repo information.

See [docs/README.md](docs/README.md) for more information on how to write, structure and preview your docs site.