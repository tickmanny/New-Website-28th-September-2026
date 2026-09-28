LineFive header synchronization — 27 September 2026

The homepage header was used as the source of truth and synchronized across all actual HTML pages:
- Services
- Our Work
- Process
- Instant Estimate
- Start Your Project
- Mobile menu with FAQs

The canonical floating header keeps the homepage's rounded shell, logo sizing, spacing,
button treatment, mobile behavior, and navigation structure.

Calculator/page-specific markup, formulas, and content were left intact. The header CSS is
scoped to .site-header on non-home pages to avoid collisions with calculator components.

Redirect-only contact.html and quote.html are preserved as redirects because they contain no
page UI to synchronize.

Files in this folder use conventional deployment names matching the navigation links.
