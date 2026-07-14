# BT255CO · Introduction to Data Science — Lecture Book

> **An online lecture textbook built with MkDocs + Material Theme, published via GitHub Pages.**

[![Deploy Status](https://github.com/rajaramayan/BT255CO-Introduction-to-Data-Science/actions/workflows/deploy.yml/badge.svg)](https://github.com/rajaramayan/BT255CO-Introduction-to-Data-Science/actions/workflows/deploy.yml)
[![MkDocs](https://img.shields.io/badge/MkDocs-1.6%2B-blue)](https://www.mkdocs.org/)
[![Material Theme](https://img.shields.io/badge/Material-9.5%2B-blueviolet)](https://squidfunk.github.io/mkdocs-material/)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

---

## Live Website

🌐 **[https://rajaramayan.github.io/BT255CO-Introduction-to-Data-Science/](https://rajaramayan.github.io/BT255CO-Introduction-to-Data-Science/)**

> Replace `rajaramayan` with your actual GitHub username after publishing.

---

## Features

| Feature | Details |
|---------|---------|
| **Theme** | Material for MkDocs — responsive, modern |
| **Dark / Light Mode** | Toggle button in header |
| **Search** | Full-text search with highlight & suggestions |
| **Math** | MathJax 3 — inline `$...$` and block `$$...$$` |
| **Diagrams** | Mermaid — flowcharts, sequence, class diagrams |
| **Code** | Syntax highlighting (Python, SQL, C, C++, Java, HTML, CSS, JS) |
| **Code Copy** | One-click copy button on every code block |
| **Admonitions** | Note, Tip, Warning, Info, Success, Danger boxes |
| **Tabs** | Tabbed content for comparing code/output |
| **Footnotes** | Academic-style footnotes |
| **Collapsible** | Expandable/collapsible sections |
| **TOC** | Per-page table of contents with scroll tracking |
| **Breadcrumbs** | Hierarchical breadcrumb navigation |
| **Prev / Next** | Page-by-page navigation buttons |
| **GitHub Actions** | Auto-deploy to GitHub Pages on every push to `main` |

---

## Project Structure

```
LectureNotes/
│
├── docs/
│   ├── index.md                    ← Home / Landing page
│   ├── Unit1/
│   │   ├── index.md                ← Unit overview
│   │   ├── topic1.md
│   │   ├── topic2.md
│   │   └── topic3.md
│   ├── Unit2/
│   │   ├── index.md
│   │   ├── topic1.md
│   │   ├── topic2.md
│   │   └── topic3.md
│   ├── Unit3/
│   │   ├── index.md
│   │   ├── topic1.md
│   │   ├── topic2.md
│   │   └── topic3.md
│   ├── templates/
│   │   └── template.md             ← Reusable page template
│   ├── images/                     ← Place all images here
│   └── assets/
│       ├── extra.css               ← Custom styles
│       ├── extra.js                ← MathJax config
│       ├── abbreviations.md        ← Global abbreviations
│       └── overrides/              ← Theme override templates
│
├── mkdocs.yml                      ← Main configuration
├── requirements.txt                ← Python dependencies
├── .gitignore
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml              ← GitHub Actions CI/CD
```

---

## Quick Start

### 1. Prerequisites

- Python 3.8 or higher
- Git

### 2. Clone the Repository

```bash
git clone https://github.com/rajaramayan/BT255CO-Introduction-to-Data-Science.git
cd BT255CO-Introduction-to-Data-Science/LectureNotes
```

### 3. Create a Virtual Environment (Recommended)

```bash
# Windows
python -m venv .venv
.venv\Scripts\activate

# macOS / Linux
python -m venv .venv
source .venv/bin/activate
```

### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

### 5. Run Locally

```bash
mkdocs serve
```

Open your browser at **http://127.0.0.1:8000** to preview the book.

The server watches for file changes and auto-reloads the browser.

---

## Adding New Content

### Add a New Topic to an Existing Unit

1. Create a new Markdown file:

```
docs/Unit1/topic4.md
```

2. Add it to the `nav` section in `mkdocs.yml`:

```yaml
nav:
  - "Unit 1 · Intro to Data Science":
    - Unit1/index.md
    - "1.1 What is Data Science?": Unit1/topic1.md
    - "1.2 Data Types and Structures": Unit1/topic2.md
    - "1.3 The Data Science Process": Unit1/topic3.md
    - "1.4 New Topic Title": Unit1/topic4.md   # ← Add this line
```

3. Use the template at `docs/templates/template.md` as a starting point.

### Add a New Unit

1. Create the unit folder and files:

```
docs/Unit4/
    index.md
    topic1.md
    topic2.md
```

2. Add to `mkdocs.yml`:

```yaml
nav:
  - "Unit 4 · Unit Title":
    - Unit4/index.md
    - "4.1 Topic Name": Unit4/topic1.md
    - "4.2 Topic Name": Unit4/topic2.md
```

### Add Images

Place all images in `docs/images/` and reference them in Markdown:

```markdown
![Alt text](../images/your-image.png)
```

---

## Building for Production

```bash
mkdocs build
```

The static website is generated in the `site/` folder.

---

## Deploying to GitHub Pages

### Automatic Deployment (Recommended)

The `.github/workflows/deploy.yml` file configures **GitHub Actions** to automatically deploy on every push to the `main` branch.

**Setup steps:**

1. Push your project to a GitHub repository.
2. Go to **Settings → Pages** in your repository.
3. Set **Source** to `gh-pages` branch.
4. Push any change to `main` — the workflow deploys automatically.

### Manual Deployment

```bash
mkdocs gh-deploy --force
```

This builds the site and force-pushes to the `gh-pages` branch.

---

## Updating the Website

```bash
# Edit any .md file in docs/
# Then commit and push:
git add .
git commit -m "Update: added Unit 2 Topic 3 notes"
git push origin main
```

GitHub Actions will automatically rebuild and publish within 1-2 minutes.

---

## Customization

| What to change | Where |
|---------------|-------|
| Site title, author, URL | `mkdocs.yml` → `site_name`, `site_author`, `site_url` |
| Color palette | `mkdocs.yml` → `theme.palette` |
| Navigation structure | `mkdocs.yml` → `nav` |
| Custom styles | `docs/assets/extra.css` |
| Math config | `docs/assets/extra.js` |
| Abbreviations | `docs/assets/abbreviations.md` |

---

## Updating `mkdocs.yml` After GitHub Setup

Replace all occurrences of `rajaramayan` with your actual GitHub username:

```yaml
site_url: "https://rajaramayan.github.io/BT255CO-Introduction-to-Data-Science/"
repo_url: "https://github.com/rajaramayan/BT255CO-Introduction-to-Data-Science"
repo_name: "rajaramayan/BT255CO-Introduction-to-Data-Science"
```

---

## License

These lecture notes are released under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

You are free to share and adapt the material for any purpose, provided appropriate credit is given.

---

*Built with [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).*
