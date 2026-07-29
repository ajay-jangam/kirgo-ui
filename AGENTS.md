# AGENTS.md — Kirgo WordPress Theme

> Guidelines and project context for AI coding agents working in this repository.

---

## Project Overview

**Kirgo** is a custom WordPress theme built for an e-commerce apparel brand. It is based on the [Underscores (`_s`)](https://underscores.me/) starter theme and is tightly integrated with **WooCommerce**. The site sells activewear/leggings across multiple "collections" (Core, Summer, Classic) and uses a dark, minimalist aesthetic.

- **WordPress Theme Version:** 1.4.0 (`_S_VERSION` constant)
- **Package Manager:** Yarn 1.22.x (see `package.json` `packageManager` field)
- **Build Tool:** Laravel Mix 6 via `webpack.mix.js`
- **CSS Pre-processor:** SASS (compiled to `style.css` via `assets/sass/app.scss`)
- **JS Entry:** `assets/js/app.js` → compiled to `assets/dist/js/app.js`
- **Animations:** WOW.js + Animate.css (`animate__animated` class prefix)
- **Typography:** Custom `Blaak` font family (Light/Regular/Thin) + Bebas Neue + BlackJack + Poppins (Google Fonts, enqueued via `functions.php`)
- **Color:** Primary background `#0d0c0c` (near-black); text defaults to white

---

## Directory Structure

```
kirgo-theme/
├── assets/
│   ├── dist/             # Compiled output (do NOT edit manually)
│   │   └── js/app.js
│   ├── fonts/            # Custom fonts (Blaak, Bebas, BlackJack)
│   ├── images/           # Static assets (icons, graphics)
│   ├── js/
│   │   └── app.js        # Single JS entry point
│   └── sass/
│       ├── app.scss      # Main SASS entry (imports all partials)
│       ├── _variables.scss   # Breakpoints, font vars, color tokens
│       ├── _base.scss    # Resets / base element styles
│       ├── _mixins.scss  # SASS mixins
│       ├── _helpers.scss # Utility classes
│       ├── comman-style.scss  # Global shared component styles (typo: "comman")
│       ├── components/
│       │   ├── header.scss
│       │   ├── footer.scss
│       │   ├── buttons.scss
│       │   └── accordion.scss
│       ├── helpers/
│       │   └── mq        # sass-mq (media query helper)
│       └── pages/        # Per-page stylesheets
│           ├── home.scss
│           ├── product-single.scss
│           ├── product-listing.scss
│           ├── cart.scss
│           ├── checkout.scss
│           ├── my-account.scss
│           ├── about-us.scss
│           ├── register.scss
│           └── get-in-touch.scss
├── inc/
│   ├── custom-header.php
│   ├── customizer.php
│   ├── jetpack.php
│   ├── template-functions.php
│   ├── template-tags.php
│   ├── woocommerce.php        # WooCommerce hooks / setup
│   ├── woocommerce/
│   │   └── single-product.php # Single product customizations
│   └── wc-template-functions.php  # Large WooCommerce template overrides
├── template-parts/
│   ├── content-header.php     # Site-wide header partial
│   ├── content-footer.php     # Site-wide footer partial
│   ├── template-home.php      # Home page template (large file)
│   ├── template-get-in-touch.php
│   ├── template-my-account.php
│   ├── template-registration.php
│   └── woocommerce/           # WooCommerce template-part overrides
├── woocommerce/               # WooCommerce core template overrides
│   ├── content-product.php
│   ├── emails/
│   ├── includes/
│   ├── loop/
│   ├── myaccount/
│   └── single-product/
│       └── product-image.php
├── functions.php              # Main theme functions (hooks, enqueue, WC customizations)
├── style.css                  # Compiled CSS output (do NOT edit manually)
├── header.php                 # Theme header
├── footer.php                 # Theme footer
├── webpack.mix.js             # Laravel Mix build config
└── package.json               # Node dependencies and scripts
```

---

## Build System

### Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | One-time build (development mode) |
| `npm run watch` | Watch and auto-recompile on changes |
| `npm run production` | Minified production build |

> **Always use `npm run watch`** during active development.
> The compiled output lives at `style.css` (CSS) and `assets/dist/js/app.js` (JS).
> **Never edit `style.css` or `assets/dist/` files directly** — they are overwritten on every build.

### Build Pipeline (webpack.mix.js)

- **SASS** → `assets/sass/app.scss` → `style.css`
- **JS** → `assets/js/app.js` → `assets/dist/js/app.js`
- Source maps are enabled (`inline-source-map` in dev).
- `processCssUrls: false` — relative URLs in SCSS are **not** rewritten.

---

## SASS Architecture

### Import Order (app.scss)

1. `_variables.scss` — must be first (defines breakpoints, font vars)
2. `_base.scss`, `_mixins.scss`, `_helpers.scss`
3. `components/` — header, buttons, accordion
4. `pages/home.scss`, `comman-style.scss`, `components/footer.scss`
5. Remaining `pages/` — product-single, about-us, cart, checkout, etc.

### Breakpoints (sass-mq)

Defined in `_variables.scss`:

```scss
$mq-breakpoints: (
    small:           350px,
    mobile:          500px,
    mini:            769px,    // tablet portrait
    pro:             1025px,   // tablet landscape / small desktop
    desktop:         1280px,   // primary desktop breakpoint
    wide:            1300px,
    desktopAd:       810px,    // tweakpoint
    mobileLandscape: 480px,    // tweakpoint
);
```

**Usage:** `@include mq($from: desktop) { ... }` or `@include mq($until: mini) { ... }`
**Mobile-first** approach — base styles target mobile, overrides use `$from:` breakpoints.

### Font Variables

```scss
$lekton: "Poppins";                     // body/UI text
$blaak: "BlaakRegular_personal";        // primary brand font
$blaakLight: "BlaakLight_personl";      // lighter headings
$blaak-black-thin: "BlaakThin_personal";
$black-jack: "BlackJack";               // script/accent font
$bebas: "Bebas";                        // display/heading font
$background-color: #0d0c0c;
```

---

## PHP / WordPress Conventions

### Naming

- **Text domain:** `kirgo`
- **Function prefix:** `kirgo_` (e.g., `kirgo_setup`, `kirgo_scripts`)
- **Constants:** `_S_VERSION` (theme version string)

### Key Files

| File | Purpose |
|------|---------|
| `functions.php` | Main hub: enqueue scripts, WooCommerce hooks, custom REST endpoints, cart logic |
| `inc/woocommerce.php` | WooCommerce theme support and hook registration |
| `inc/wc-template-functions.php` | Large collection of WooCommerce template function overrides |
| `inc/woocommerce/single-product.php` | Single product page customizations |
| `template-parts/template-home.php` | Full home page HTML/PHP template |

### WooCommerce Customizations in functions.php

- **Quantity buttons** (`+`/`-`) injected via `woocommerce_after/before_quantity_input_field`
- **Text overrides** via `gettext` filter: "Cart totals" → "your receipt", "Your order" → "your receipt", "Update cart" → "Update receipt", "Browse products" → "Shop now"
- **Duplicate product content** added at priority 25 of `woocommerce_single_product_summary` (shows product image + title + description + buy button as a second layout block)
- **"Notify Me" modal** at priority 35 of `woocommerce_single_product_summary` (uses CF7 shortcode ID 398)
- **Share icons modal** at priority 5 of `woocommerce_single_product_summary`
- **Related products on cart/checkout** via `woocommerce_cart_collaterals` and `woocommerce_after_checkout_form` — includes smart "make it a set" upsell logic
- **Free shipping threshold:** `$free_shipping_threshold = 3000` (hardcoded in `display_related_products()`)
- **Coupon field hidden on cart page** via `woocommerce_coupons_enabled` filter
- **Collection prioritization** in shop loop via `posts_clauses` filter (`?prioritize_collection=slug` GET param)
- **Cart count AJAX fragment** (`span.cart-count`) and REST endpoint `/wp-json/kirgo/v1/cart-count` for Cloudflare-compatible cart updates
- **Body class:** `summer-collection-product` added for summer collection product pages

### Product Categories (Taxonomies)

The theme's upsell/related product logic relies on these `product_cat` slugs:

| Slug | Description |
|------|-------------|
| `core-collection` | Core collection products |
| `summer-collection` | Summer collection products |
| `classic-collection` | Classic collection products |
| `single-product` | Individual piece (not a set) |
| `set-product` | Full set product |

---

## JavaScript (assets/js/app.js)

Single entry file. Contains:
- Navigation/hamburger menu toggle
- WOW.js initialization for scroll-triggered animations
- Cart/modal interactions

> When adding new JS features, add them in `app.js` only. Do not create separate JS files unless explicitly discussed.

---

## Common Gotchas & Rules

1. **`comman-style.scss` is misspelled** (should be "common") — do not rename it; the import in `app.scss` matches.
2. **`style.css` is the compiled output** — it is not a source file. All styling work goes in `assets/sass/`.
3. **WOW.js animations** use the classes `wow animate__animated animate__fadeInUp` (and similar). Always add `wow` as the trigger class alongside the Animate.css class.
4. **Bootstrap modals** are used for the Notify Me, Share Icons, and cart product size modals. Bootstrap JS is expected to be loaded (likely via a plugin or separately enqueued).
5. **Poppins** is loaded via Google Fonts in `functions.php` and referenced in SCSS via `$lekton` variable or the literal string `"Poppins"`.
6. **The `display_related_products()` function** uses `WP_Query` internally — always call `wp_reset_postdata()` after (it already does this).
7. **`processCssUrls: false`** in Laravel Mix means background image URLs in SCSS must be absolute paths (e.g., `/wp-content/themes/kirgo-theme/assets/images/...`).
8. **Source maps** are enabled in dev — don't worry if `style.css.map` appears in the root.

---

## Pages & Templates

| URL / Template | File |
|----------------|------|
| Home | `page.php` + `template-parts/template-home.php` |
| Shop / Product listing | WooCommerce default + `pages/product-listing.scss` |
| Single Product | `woocommerce/single-product/` + `pages/product-single.scss` |
| Cart | WooCommerce default + `pages/cart.scss` |
| Checkout | WooCommerce default + `pages/checkout.scss` |
| My Account | `template-parts/template-my-account.php` + `pages/my-account.scss` |
| About Us | `template-parts/template-about-us.php` + `pages/about-us.scss` |
| Get In Touch | `template-parts/template-get-in-touch.php` + `pages/get-in-touch.scss` |
| Registration | `template-parts/template-registration.php` + `pages/register.scss` |

---

## Adding New Features — Checklist

### New Page Style
1. Create `assets/sass/pages/<page-name>.scss`
2. Import it at the bottom of `assets/sass/app.scss`
3. Run `npm run watch` to compile

### New Component Style
1. Create `assets/sass/components/<component-name>.scss`
2. Import it in `assets/sass/app.scss` under the `components/` block

### New WooCommerce Hook
1. Add hook/filter to `functions.php` with the `kirgo_` prefix for custom functions
2. For complex template logic, consider adding to `inc/woocommerce.php` or `inc/wc-template-functions.php`

### New Template Override
1. Mirror the WooCommerce plugin file structure under `woocommerce/` in the theme root
2. WordPress/WooCommerce will automatically use the theme override

---

## Linting & Code Quality

| Tool | Config File | Command |
|------|-------------|---------|
| PHP Coding Standards (PHPCS) | `phpcs.xml.dist` | `composer lint:wpcs` |
| PHP Syntax | — | `composer lint:php` |
| SCSS Linting | `.stylelintrc.json` | `npm run lint:scss` |
| JS Linting | `.eslintrc` | `npm run lint:js` |
| Prettier | `.prettierrc` | (editor integration) |

---

## Out of Scope (Do Not Modify)

- `vendor/` — Composer packages
- `node_modules/` — Node packages
- `style.css` and `assets/dist/` — compiled build artifacts
- `mix-manifest.json` — auto-generated by Laravel Mix
- `composer.lock` / `package-lock.json` — unless updating dependencies intentionally
