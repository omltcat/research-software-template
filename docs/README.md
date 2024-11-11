# Research Software Template

This is the front page of your project. It is more general facing (including for your domain expert) than your repo README. It should provide a high-level overview of your project, its goals and capabilities, and its intended audience.

Write all your documents in [Markdown format](https://www.markdownguide.org/basic-syntax/).

Documents on the site generator used: [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/getting-started/)

## Publishing your docs site
GitHub Actions is already setup to build for GitHub Pages. You should enable GitHub Pages in your repository settings and point to the `gh-pages` branch.

## Preview your site locally

You need to have Python installed
```bash
# Install the required packages
pip install mkdocs-material mkdocs-bibtex mkdocs-literate-nav mkdocs-git-revision-date-localized-plugin
# Start a preview server with live-reloading
mkdocs serve
```

## Project structure
```
.
├── .github/
│   └── workflows/
│       └── gh-pages.yml  # GitHub Actions for building the docs site
├── docs/
│   ├── index.md  # The docs site homepage.
│   ├── user-guide/
│   │   └── ...
│   ├── development/
│   │   └── ...
│   └── references.bib # A BibTeX file for references
├── src/          # Source code for your project
├── test/         # tests files for your project
├── mkdocs.yml    # The docs site configuration file.
└── README.md     # README file for your GitHub repository (not docs site)
```



To add pages or change the structure of the site, edit the `nav:` section in the `mkdocs.yml` file.

## Writing documentation
### LaTeX Math expressions
``` latex title="Math Block"
$$
\cos x=\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}x^{2k}
$$
```
$$
\cos x=\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}x^{2k}
$$

``` latex title="Inline Math"
$\exists x \in X \forall y \in Y$
```
Inline Math: $\exists x \in X \forall y \in Y$

### Citations
You can add references to your `references.bib` file and cite them in your markdown files. For example single citation [@SmithAndKoothoor2016], multiple citations [@SmithAndKoothoor2016; @Parnas1978].
```markdown
(Remove the \ before @)
single citation    [\@SmithAndKoothoor2016]
multiple citations [\@SmithAndKoothoor2016; \@Parnas1978]
```

### Page structure
- [**Home**](README.md)
- [User Guide](user-guide/)
- [Development](development/)

The list at the very end of the README.md at each level will be used to generate the structure of the docs site at that level. While technically the MkDocs can generate the structure from the file system, it is recommended to use the list in the README.md to have more control over the structure. People visiting the GitHub repository will be able to see the structure via the links as you intended.

Order in this list will be the order in the navigation bar. The first item must be the README.md file itself.