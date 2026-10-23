# CurioLab — website starter

A responsive, static website for a practical AI-tool and workflow publication. It uses plain HTML, CSS and JavaScript; no build step or package installation is needed.

## Pages
- `index.html` — homepage, discovery paths, experiment board, combined category/search filters, and tool-finder interaction
- `blog.html` — blog index with published and clearly marked planned articles
- `blog-fair-ai-comparisons.html` — first original methods article
- `guide.html` — field guide: a 15-minute workflow audit
- `compare-ai-tools.html` — fair AI-tool comparison method and reusable scorecard
- `verify-ai-output.html` — practical workflow for verifying AI-generated claims
- `experiment.html` — transparent test plans; these are plans, not completed reviews
- `about.html` — publication purpose and promise
- `editorial-policy.html` — testing and disclosure principles
- `privacy.html` — current prototype privacy notes
- `styles.css` — responsive visual design
- `script.js` — client-side interactions

## Preview locally
Keep all files together in the same folder. Open `index.html` in a modern browser. The site should work without a server.

## Publish free (static hosting)
### Netlify manual deploy
1. Create/sign in to a Netlify account.
2. Use its manual deploy / drag-and-drop flow.
3. Upload the **unzipped folder contents** (the folder containing `index.html`, `styles.css`, `script.js`, and the other HTML files).
4. Open the URL Netlify gives you and test every page on desktop and mobile.

### GitHub Pages
1. Create a repository and upload all project files to its root.
2. Open repository Settings → Pages.
3. Select deployment from the main branch and root folder.
4. Wait for the published URL, then test it in a private/incognito window.

Hosting features and free-tier terms can change; confirm current terms with the provider.

## Must do before public launch
- [ ] Choose the final publication/author name and add a real, monitored contact address.
- [ ] Verify the name is available and consider trademark/domain conflicts before investing in it.
- [ ] Run at least one hands-on test and replace a test-plan card with the documented result—or keep all items clearly marked as plans.
- [ ] Connect a real newsletter provider before adding an email signup form. This version deliberately does **not** collect emails.
- [ ] Review the privacy notice against the actual hosting, fonts, analytics, cookies, newsletter and affiliate services used.
- [ ] Add a clear affiliate/sponsorship disclosure before publishing any paid links.
- [ ] Add a favicon and social-share image; add canonical URLs, sitemap and robots rules after choosing the final domain.
- [ ] Check every link, keyboard navigation, mobile layout, page titles, descriptions and page loading.
- [ ] Add analytics only if useful; configure privacy controls and consent requirements for your audience and jurisdiction.

## Current limitations
- No backend, CMS, database, accounts, comments, live pricing or affiliate integrations.
- Newsletter signup is intentionally absent until a real provider is connected.
- Tool finder gives evaluation guidance; it does not rank live tools or check current pricing.
- Experiment board entries are proposed tests, not verified product results.
- Google Fonts are loaded from a third-party service; self-host them if you prefer to avoid that request.

## Editorial rule
Never claim a tool was tested, a workflow saved time, or a product won a comparison until you have actually run and documented the test. Preserve the prompt/task, date, plan/version, representative outputs, scoring method, limitations and any commercial relationship.


## Before public launch

- Add the real publisher/author name and a monitored contact email.
- Set canonical URLs only after choosing the final public domain.
- Update the privacy notice to match the actual hosting and any analytics or newsletter services.
- Run and document at least one real experiment; do not present test plans as results.
- Test all pages and links on desktop and a real mobile device.


## Experiment #001 results page

`experiment-001-results.html` is an exploratory qualitative report. It includes corrected provisional evaluator scores (A: 83/100, B: 80/100, C: 100/100), with explicit caveats about Output A's unresolved identity, the missing shared prompt, unverified model attribution, and the subjective nature of the rubric. Do not present this as a definitive model ranking.


## Experiment #001 reproducibility update

The `experiment-001-results.html` page now includes the five weighted criteria and formula, a reproducibility-status table, and an archive checklist. It explicitly marks the original task prompt, model/version mapping, run dates, and Output A's authenticity as unresolved. The score table uses the corrected provisional totals A 83/100, B 80/100, C 100/100 and does not attribute these to named models.


## Blog update
This update adds a Blog link to the homepage navigation and secondary pages, a blog index, and one original methods article. Planned topics are marked as planned rather than presented as published posts. The article describes a recommended method; it does not claim new benchmark results.
\n\n## Latest content update\n- Added `blog-verify-ai-study-notes.html`, a practical source-checking workflow for AI-generated study notes. The Blog index and sitemap link to the article.\n\n- Added `blog-ai-tool-test-template.html` and a homepage “Latest from the Blog” section linking to published articles. The Blog index now labels Experiment #001 as a review rather than an upcoming item.\n
## Monetization-readiness update
- Clarified the current-state privacy notice and added an advertising/affiliate disclosure policy page. These are drafts that must be checked against actual deployed behavior and updated when monetization is activated; no ad code or publisher ID is included.

- Added `blog-verify-ai-answer.html`, linked from the homepage and Blog index, and included it in `sitemap.xml`.

- Added a free blank AI-output review worksheet page and CSV download; it is linked from the Blog index and sitemap. The worksheet is explicitly blank and does not present experimental scores as data.

- Added a browser-only AI Workflow Savings Calculator that estimates before/after time, net weekly savings, and setup payback; linked from homepage and Blog index and added to sitemap. Inputs are not submitted by the calculator page.

## v16 SEO metadata polish
- Added concise meta descriptions to About, Editorial Policy, and Experiment Notebook pages.
- Aligned each page's Open Graph description with its page purpose for cleaner social/link previews.
- This update does not connect analytics, verify Search Console, or guarantee indexing.
