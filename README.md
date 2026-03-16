# ✏️ Stationery Store

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20App-0d9488?style=for-the-badge&logo=github)](https://krunalambarte.github.io/stationery-app/)

🌐 **Live Demo:** [https://krunalambarte.github.io/stationery-app/](https://krunalambarte.github.io/stationery-app/)

A **complete, responsive stationery e-commerce web app** built with pure **HTML5, CSS3, and Vanilla JavaScript**. Works seamlessly on mobile, tablet, and desktop browsers — no frameworks, no build tools, no server required.

---

## ✨ Features

- **35+ Stationery Products** across 9 categories (Pens, Pencils, Notebooks, Erasers, Markers, Files & Folders, Adhesives, Art Supplies, Desk Accessories)
- **Search** — live filter products by name, category, or description
- **Category Filters** — filter by any product category with pill buttons
- **Sort** — Price Low→High, High→Low, Name A→Z
- **Product Detail Modal** — full description, rating, price, stock status
- **Shopping Cart** — add/remove items, update quantities, view subtotal/total
- **Cart Persistence** — cart is saved to `localStorage` and survives page reloads
- **Toast Notifications** — animated feedback when adding items to cart
- **Responsive Design** — mobile-first layout:
  - 📱 Mobile (<768px): 2-column grid, hamburger menu
  - 📟 Tablet (768–1024px): 3-column grid, full nav
  - 🖥️ Desktop (>1024px): 4-column grid
- **Accessibility** — ARIA labels, keyboard navigation, focus-visible styles
- **Smooth Animations** — hero fade-in, card entrance animations, hover effects
- **Scroll-to-top** button
- **Modern UI** — CSS variables for theming, teal/green color scheme

---

## 🚀 How to Run

### ▶️ Online (No Setup Required)
Visit the live demo directly in your browser:
**[https://krunalambarte.github.io/stationery-app/](https://krunalambarte.github.io/stationery-app/)**

### 💻 Run Locally
1. **Clone or download** this repository
2. Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge)
3. That's it — no server, no npm install, no build step needed!

```bash
git clone https://github.com/KrunalAmbarte/stationery-app.git
cd stationery-app
# Open index.html in your browser
```

Or simply double-click `index.html` to open it.

---

## 📁 File Structure

```
stationery-app/
├── index.html          # Main HTML page (hero, products, cart, modal)
├── css/
│   └── style.css       # All styles — responsive, CSS variables, animations
├── js/
│   ├── products.js     # 35+ product data (id, name, description, price, category…)
│   ├── cart.js         # Cart logic with localStorage persistence
│   └── app.js          # Main app — search, filter, sort, modals, toast, DOM
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic markup, accessibility (ARIA) |
| **CSS3** | CSS variables, Grid, Flexbox, responsive breakpoints, animations |
| **Vanilla JavaScript (ES6+)** | Product rendering, search/filter/sort, cart, modals, localStorage |

No frameworks, no dependencies, no build process.

---

## 📸 Screenshots

> Open `index.html` in your browser to see the live app.

| Mobile (< 768px) | Desktop (> 1024px) |
|---|---|
| 2-column grid, hamburger menu | 4-column grid, full navbar |
| Slide-in cart sidebar | Cart sidebar, product modals |

---

## 🔮 Future Enhancements

- [ ] User authentication (login/register)
- [ ] Backend API integration (Node.js / Django)
- [ ] Product reviews and comments
- [ ] Wishlist / Save for later
- [ ] Checkout flow with address and payment
- [ ] Admin panel for managing products
- [ ] Real product images instead of emoji
- [ ] Dark mode toggle
- [ ] PWA support (offline functionality)
- [ ] More filter options (price range slider, rating filter)
