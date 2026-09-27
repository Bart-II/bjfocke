---
title: This website
summary: A static, privacy-friendly personal site with a strict Content-Security-Policy and no trackers.
period: "2026"
tags: [Astro, Web security]
featured: true
order: 3
---

This site is built with [Astro](https://astro.build) and deployed as static files to GitHub Pages.

## Design

The site is styled like a terminal session: a dark screen, IBM Plex Mono throughout, green prompts and amber dates. The font is self-hosted.

## Security choices

- No JavaScript is shipped to the browser.
- A strict Content-Security-Policy only allows resources from this site itself.
- No analytics, third-party fonts or trackers.
- A [`security.txt`](/bjfocke/.well-known/security.txt) file explains how to report vulnerabilities.

The source is on [GitHub](https://github.com/Bart-II/bjfocke).
