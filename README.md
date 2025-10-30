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


---

## ⚙️ Editing

- **Text:** Edit `.html` files directly in `/de/` or `/en/`.  
- **Design:** Adjust `/assets/styles.css`.  
- **Fonts:** Local copies in `/assets/fonts/` (GDPR-compliant).  
- **Header/Footer:** Remember to update both languages if you change navigation or contact details.

---

## 🔒 Compliance

- Fully static: no cookies, no JavaScript tracking.  
- Fonts hosted locally.  
- Impressum and Datenschutzerklärung pages meet TMG & DSGVO requirements (update them as laws evolve).  

---

## 🧰 Maintenance

1. Edit locally or in GitHub web editor.  
2. Commit to `main` — GitHub Pages deploys automatically.  
3. If you change legal texts, log the update in `CHANGELOG.txt`:

4. Keep a local ZIP backup occasionally.

---

## 🧑‍💻 Developer Notes

If you want to test locally:


Then open `http://localhost:8000` in your browser.

---

© MALUCH LEGAL – Bernhard Maluch, Frankfurt am Main


