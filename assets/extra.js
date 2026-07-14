/* =============================================================================
   extra.js — MathJax configuration for BT255CO Lecture Book
   This file must be loaded BEFORE the MathJax CDN script.
   ============================================================================= */

window.MathJax = {
  tex: {
    // Inline math:  $...$  and  \(...\)
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    // Display math:  $$...$$  and  \[...\]
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ],
    processEscapes: true,
    processEnvironments: true,
    // Common LaTeX packages
    packages: { "[+]": ["ams", "boldsymbol", "color"] }
  },
  options: {
    // Only process elements with class "arithmatex" (set by pymdownx.arithmatex)
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  startup: {
    ready() {
      MathJax.startup.defaultReady();
      // Signal mkdocs-material that MathJax is ready
      document.dispatchEvent(new Event("mathjax-ready"));
    }
  }
};

/* ---------------------------------------------------------------------------
   Mermaid — reinitialise on MkDocs instant-load navigation
   (mkdocs-material uses a SPA-like navigation; mermaid must re-render)
   --------------------------------------------------------------------------- */
document$.subscribe(function () {
  if (typeof mermaid !== "undefined") {
    mermaid.initialize({
      startOnLoad: false,
      theme:
        document.body.getAttribute("data-md-color-scheme") === "slate"
          ? "dark"
          : "default"
    });
    mermaid.run({ querySelector: ".mermaid" });
  }
});
