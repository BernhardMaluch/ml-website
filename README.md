Maluch Legal — Static Website

This repository contains a small static website for Maluch Legal.

Preview locally

```powershell
Set-Location 'C:\Users\BMaluch\Documents\ML-website'
python -m http.server 8000
# then open http://localhost:8000/ in your browser
```

Deploy options

- GitHub Pages (recommended):
  - Create a repo on GitHub (e.g. `MaluchLegal/website`), add it as a remote, then push the `main` branch and enable Pages from the `gh-pages` branch or from the `main` branch `/` or `/docs` folder.
  - Alternatively, use the included `deploy-gh-pages.ps1` script as a starting point (review before running).

- Netlify: drag & drop the folder into Netlify, or connect the GitHub repo and set the publish directory to `/`.

Notes

- The site uses root‑relative paths (e.g. `/styles.css`) and should be served from the site root for links to work correctly.
- Replace placeholder contact and legal information as needed.
