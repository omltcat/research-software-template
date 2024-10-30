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
pip install mkdocs mkdocs-material mkdocs-bibtex
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