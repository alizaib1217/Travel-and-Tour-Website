# Usman Tour & Travels

**Live site:** https://alizaib1217.github.io/Travel-and-Tour-Website/

A modern editorial travel website for **Usman Tour & Travels** — a car-rental, holiday-planning, and guided-tour studio based in Islamabad, Pakistan.

## Stack

- React 18 + Vite
- Custom CSS design system (editorial / magazine aesthetic)
- No UI library — fully hand-crafted components

## Features

- **5 pages** — Home, Vehicles, Services, About, Contact
- **Fleet browser** — 17 vehicles across 5 tiers (Standard → Luxury), filterable by class
- **Booking drawer** — slide-in panel with live price calculator (rate × days + 8% tax)
- **Search form** — tabbed Rent-a-Vehicle / Holiday Planning with city + date pickers
- **Destinations grid** — editorial layout for Hunza, Skardu, Naran, Lahore, Islamabad, Rawalpindi
- **Dark mode** ready via CSS custom properties
- **Responsive** — mobile-first breakpoints at 980px and 640px

## Local development

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` auto-deploy to GitHub Pages via GitHub Actions.

---

> Legacy Bootstrap 4 design preserved on the [`legacy`](https://github.com/alizaib1217/Travel-and-Tour-Website/tree/legacy) branch.
