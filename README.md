# Phising Checkers

A lightweight, single-page tool to evaluate URLs and content for common phishing indicators. Built as a static site (pure HTML/CSS/JS) for fast, zero-backend deployment.

> Note: Repository/folder name uses "Phising"; you may prefer "Phishing" in public docs.

## Features
- Visual, friendly UI for quick checks
- Heuristics for suspicious patterns (domains, shortening, mixed chars)
- Mobile-responsive layout
- Zero dependencies; deploy anywhere

## Demo
- Add a live link here once deployed: <your-demo-url>

## Project Structure
```
phising checkers/
├─ index.html
└─ vercel.json
```

## Getting Started (Local)
- Option 1: Open `phising checkers/index.html` directly in your browser.
- Option 2: Serve locally (recommended for CORS-safe testing):

```bash
# Python 3
python -m http.server 8080

# Node
npx serve -l 8080
```
Then visit http://localhost:8080

## Deploy

### GitHub Pages
1. Create a repo and push this folder.
2. In GitHub: Settings → Pages → Deploy from branch → `main`/`docs` as needed.
3. If using a subfolder, move files to repo root or configure Pages to serve from `/` or `/docs`.

### Vercel
- This project includes `vercel.json`. Steps:
  1. Install Vercel CLI: `npm i -g vercel`
  2. Run: `vercel` → follow prompts
  3. For production: `vercel --prod`

### Netlify
- Drag-and-drop the folder in the Netlify UI or use `ntl deploy`.

## How to Publish to GitHub
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Customize
- Update titles, copy, and SEO tags inside `phising checkers/index.html`.
- Add favicon and social image tags in the `<head>`.
- Extend heuristics in the JS section of `index.html`.

## Security Note
This tool provides heuristic checks and educational guidance. It does not guarantee detection of all phishing attempts. Always verify with official sources.

## License
Choose one and add a LICENSE file (e.g., MIT, Apache-2.0).


