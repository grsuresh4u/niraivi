# Niraivi — Pure Kanchipuram Handloom Silk Sarees

Silk Mark certified pure Kanchipuram silk sarees, sourced directly from weaver
families in Kanchipuram. Static HTML/CSS/JS — no build step required.

## Deployment (GitHub Pages)

The site is served by GitHub Pages from the `main` branch, root folder
(**Settings → Pages**). Merging into `main` publishes the change.

## Contact details

Every WhatsApp, Instagram and email button on the site is filled in from one
place — the `NIRAIVI_CONTACT` block at the top of `js/main.js`:

```js
const NIRAIVI_CONTACT = {
  whatsapp: '919876543210',   // country code + number, digits only
  instagram: 'niraivi',       // handle without the @
  email: 'hello@example.com',
};
```

Until a value is set, its buttons scroll to the contact section instead.

## Structure

```
niraivi/
├── index.html          # Home: occasions, craft, motifs, story, how to buy, authenticity, care, FAQ
├── products.html       # The Collection, filterable by occasion (products.html#bridal etc.)
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Contact links, mobile menu, filters, scroll reveal
├── images/
│   ├── logo.webp       # Brand logo, round with transparent background (hero)
│   ├── logo-small.webp # Small brand logo (header and footer)
│   ├── og-image.jpg    # 1200×630 preview shown when the link is shared
│   ├── gopuram.svg     # Drawn temple gopuram behind the home-page banner
│   ├── logo.png        # High-resolution master logo (not loaded by the site)
│   ├── logo.jpg        # Original brand logo
│   └── favicon-logo.jpg # Browser tab icon
├── _config.yml         # GitHub Pages config
└── README.md
```

## Adding a saree to the collection

Copy one `<article class="product">` block in `products.html` and change:

- `data-occasion` — one or more of `bridal`, `festive`, `lightweight`, `pastels`
- the colours in `style="--body:…;--border:…;--zari:…"` (body, border, zari)
- the name, the Border / Motifs / Weight rows, and the WhatsApp `data-message`

When real photographs are ready, replace the `<div class="saree" …>` swatch
with `<img src="images/sarees/your-photo.jpg" alt="…" />`.

## Fonts

Loaded from Google Fonts:
- **Cormorant Garamond** — display headings
- **Inter** — body & UI
- **Noto Serif Tamil** — Tamil text (நிறைவி, motif names)

## Colours

| Token | Hex | Usage |
|-------|-----|-------|
| Maroon | `#5C0F1E` | Brand primary, dark sections |
| Maroon deep | `#3A0812` | Footer, announcement bar |
| Arakku | `#8E1B1B` | Accents, links |
| Temple gold | `#B8862B` | Zari accents, temple border |
| Gold light | `#DDBB72` | Gold on dark backgrounds |
| Ivory | `#FBF6EC` | Page background |
| Ivory deep | `#F3E9D6` | Alternate sections |
