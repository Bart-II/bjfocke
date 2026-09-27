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

The look is borrowed from the main control boards of 1960s and 70s nuclear power plants: sea-green panels, engraved legend plates, an annunciator with a working lamp test switch, a rotary mode selector for navigation, edgewise meters and a multi-pen event recorder for the timeline. All of it is plain HTML, CSS and SVG.

## Security choices

- No JavaScript is shipped to the browser.
- A strict Content-Security-Policy only allows resources from this site itself.
- No analytics, third-party fonts or trackers.
- A [`security.txt`](/bjfocke/.well-known/security.txt) file explains how to report vulnerabilities.

The source is on [GitHub](https://github.com/Bart-II/bjfocke).
