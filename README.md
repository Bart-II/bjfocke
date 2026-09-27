# bjfocke

Personal website of Bart Fokke: resume, projects and interests. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Editing content

| What | Where |
|---|---|
| About, experience, education, skills, languages, interests, links | `src/data/resume.ts` |
| Projects (one Markdown file each) | `src/content/projects/` |
| Downloadable CV | `public/cv-nl.pdf` |
| Styling | `src/styles/global.css` |

To add a project, copy `src/content/projects/project-placeholder.md`, change the front matter and write the story below it. Set `featured: true` to show it on the home page, and remove `placeholder: true` once it is real.

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321/bjfocke/
npm run build    # static output in dist/
```

## Deploying

Every push to `main` builds and deploys the site with `.github/workflows/deploy.yml`. One-time setup: in the repository settings under **Pages**, set **Source** to **GitHub Actions**. The site is then served at https://bart-ii.github.io/bjfocke/.

For a custom domain, set `site` in `astro.config.mjs` to the domain, remove `base`, and update the `Canonical` line in `public/.well-known/security.txt`.

## Security

The site ships no JavaScript, uses a strict Content-Security-Policy that only allows same-origin styles and images, loads no third-party fonts or analytics, and publishes a `security.txt`.
