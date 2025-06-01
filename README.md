# Research Software Template

## Note
This template is WIP but most of the documentation structures and automations are already in place.
As of June 2025, you can use it for your own project.  
If you run into any problems or have any suggestions, please do not hesitate to open an issue on this repo.

It is featured in the proceeding [A Practical Framework for Small Teams to Develop Sustainable Research Software](https://ucar-sea.github.io/SEA-ISS-2025-A-Practical-Framework-for-Small-Teams-to-Develop-Sustainable-Research-Software/README.html). 
([Citation](https://github.com/UCAR-SEA/SEA-ISS-2025-A-Practical-Framework-for-Small-Teams-to-Develop-Sustainable-Research-Software/blob/main/how-to-cite-this-paper.md))

## GitHub Pages Setup
This repo already has been set up with a GitHub Actions workflow to build the documentation site using MkDocs. But you still need to enable GitHub Pages for this repo first:

1. Go to your repo settings
2. On the left sidebar, click on "Pages".
3. Under "Source", select "Deploy from a branch".
4. Choose the `gh-pages` branch and `/(root)`.
5. Click "Save".

Then edit the `mkdocs.yml` file accordingly with your GitHub Pages and repo information.

See [docs/README.md](docs/README.md) for more information on how to write, structure and preview your docs site.