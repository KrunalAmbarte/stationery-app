// app.js — Main application logic: render products, search, filter, sort, modals, cart UI, toast

(function () {
  'use strict';

  /* ─── State ─────────────────────────────────────────────── */
  let searchQuery = '';
  let activeCategory = 'All';
  let sortOrder = 'default';
  let cartOpen = false;
  let modalProduct = null;

  /* ─── DOM References ─────────────────────────────────────── */
  const productGrid        = document.getElementById('product-grid');
  const searchInput        = document.getElementById('search-input');
  const categoryFilters    = document.getElementById('category-filters');
  const sortSelect         = document.getElementById('sort-select');
  const cartIcon           = document.getElementById('cart-icon');
  const cartBadge          = document.getElementById('cart-badge');
  const cartSidebar        = document.getElementById('cart-sidebar');
  const cartOverlay        = document.getElementById('cart-overlay');
  const cartClose          = document.getElementById('cart-close');
  const cartItems          = document.getElementById('cart-items');
  const cartSubtotal       = document.getElementById('cart-subtotal');
  const cartTotal          = document.getElementById('cart-total');
  const cartEmpty          = document.getElementById('cart-empty');
  const cartFooter         = document.getElementById('cart-footer');
  const clearCartBtn       = document.getElementById('clear-cart');
  const toastContainer     = document.getElementById('toast-container');
  const modal              = document.getElementById('product-modal');
  const modalClose         = document.getElementById('modal-close');
  const modalBody          = document.getElementById('modal-body');
  const navToggle          = document.getElementById('nav-toggle');
  const navMenu            = document.getElementById('nav-menu');
  const productCountLabel  = document.getElementById('product-count');
  const resultsSection     = document.getElementById('results-section');

  /* ─── Categories ─────────────────────────────────────────── */
  const CATEGORIES = [
    'All', 'Pens', 'Pencils', 'Notebooks', 'Erasers',
    'Markers', 'Files & Folders', 'Adhesives', 'Art Supplies', 'Desk Accessories'
  ];

  /* ─── Build Category Filters ─────────────────────────────── */
  function buildCategoryFilters() {
    categoryFilters.innerHTML = '';
    CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (cat === activeCategory ? ' active' : '');
      btn.textContent = cat;
      btn.setAttribute('data-category', cat);
      btn.addEventListener('click', () => {
        activeCategory = cat;
        searchQuery = '';
        searchInput.value = '';
        updateFiltersUI();
        renderProducts();
      });
      categoryFilters.appendChild(btn);
    });
  }

  function updateFiltersUI() {
    categoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === activeCategory);
    });
  }

  /* ─── Filter + Sort Products ─────────────────────────────── */
  function getFilteredProducts() {
    let list = [...products];

    if (activeCategory !== 'All') {
      list = list.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    switch (sortOrder) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return list;
  }

  /* ─── Render Stars ───────────────────────────────────────── */
  function renderStars(rating) {
    const full  = Math.floor(rating);
    const half  = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
  }

  /* ─── Render Product Grid ────────────────────────────────── */
  function renderProducts() {
    const list = getFilteredProducts();

    if (productCountLabel) {
      productCountLabel.textContent = `${list.length} product${list.length !== 1 ? 's' : ''} found`;
    }

    if (list.length === 0) {
      productGrid.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">🔍</span>
          <h3>No products found</h3>
          <p>Try adjusting your search or filter criteria.</p>
          <button class="btn btn-primary" onclick="App.resetFilters()">Clear Filters</button>
        </div>`;
      return;
    }

    productGrid.innerHTML = list.map(product => `
      <article class="product-card" data-id="${product.id}">
        <div class="product-image" onclick="App.openModal(${product.id})">
          <span class="product-emoji">${product.image}</span>
          ${!product.stock ? '<span class="out-of-stock-badge">Out of Stock</span>' : ''}
        </div>
        <div class="product-info">
          <span class="product-category">${product.category}</span>
          <h3 class="product-name" onclick="App.openModal(${product.id})">${product.name}</h3>
          <div class="product-rating" aria-label="Rating: ${product.rating} out of 5">
            <span class="stars">${renderStars(product.rating)}</span>
            <span class="rating-value">${product.rating}</span>
          </div>
          <div class="product-footer">
            <span class="product-price">₹${product.price}</span>
            <button
              class="btn btn-add-cart${!product.stock ? ' disabled' : ''}"
              onclick="App.addToCart(${product.id})"
              ${!product.stock ? 'disabled aria-disabled="true"' : ''}
              aria-label="Add ${product.name} to cart"
            >${product.stock ? 'Add to Cart' : 'Out of Stock'}</button>
          </div>
        </div>
      </article>
    `).join('');

    requestAnimationFrame(setupScrollAnimations);
  }

  /* ─── Cart UI ────────────────────────────────────────────── */
  function updateCartBadge() {
    const count = Cart.getCount();
    cartBadge.textContent = count;
    cartBadge.style.display = count > 0 ? 'flex' : 'none';
  }

  function renderCart() {
    const items = Cart.getItems();
    const subtotal = Cart.getSubtotal();

    updateCartBadge();

    if (items.length === 0) {
      cartEmpty.style.display = 'flex';
      cartFooter.style.display = 'none';
      cartItems.innerHTML = '';
      return;
    }

    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';

    cartItems.innerHTML = items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-image">
          <span>${item.image}</span>
        </div>
        <div class="cart-item-details">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-price">₹${item.price} each</p>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="App.updateQty(${item.id}, ${item.quantity - 1})" aria-label="Decrease quantity">−</button>
            <span class="cart-item-qty">${item.quantity}</span>
            <button class="qty-btn" onclick="App.updateQty(${item.id}, ${item.quantity + 1})" aria-label="Increase quantity">+</button>
            <button class="remove-btn" onclick="App.removeFromCart(${item.id})" aria-label="Remove ${item.name} from cart">🗑️</button>
          </div>
        </div>
        <div class="cart-item-total">₹${item.price * item.quantity}</div>
      </div>
    `).join('');

    cartSubtotal.textContent = `₹${subtotal}`;
    cartTotal.textContent = `₹${subtotal}`;
  }

  function openCart() {
    cartOpen = true;
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('visible');
    document.body.classList.add('no-scroll');
    renderCart();
  }

  function closeCart() {
    cartOpen = false;
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('visible');
    document.body.classList.remove('no-scroll');
  }

  /* ─── Toast Notification ─────────────────────────────────── */
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.innerHTML = `
      <span class="toast-icon">${type === 'success' ? '✅' : '❌'}</span>
      <span class="toast-msg">${message}</span>
    `;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, 3000);
  }

  /* ─── Product Modal ──────────────────────────────────────── */
  function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    modalProduct = product;

    modalBody.innerHTML = `
      <div class="modal-product">
        <div class="modal-product-image">
          <span class="modal-emoji">${product.image}</span>
          ${!product.stock ? '<span class="out-of-stock-badge large">Out of Stock</span>' : ''}
        </div>
        <div class="modal-product-info">
          <span class="product-category">${product.category}</span>
          <h2 class="modal-product-name">${product.name}</h2>
          <div class="modal-rating">
            <span class="stars">${renderStars(product.rating)}</span>
            <span class="rating-value">${product.rating} / 5</span>
          </div>
          <p class="modal-description">${product.description}</p>
          <div class="modal-meta">
            <div class="modal-price">₹${product.price}</div>
            <div class="modal-stock ${product.stock ? 'in-stock' : 'no-stock'}">
              ${product.stock ? '✅ In Stock' : '❌ Out of Stock'}
            </div>
          </div>
          <button
            class="btn btn-primary btn-add-modal${!product.stock ? ' disabled' : ''}"
            onclick="App.addToCart(${product.id})"
            ${!product.stock ? 'disabled' : ''}
          >${product.stock ? '🛒 Add to Cart' : 'Out of Stock'}</button>
        </div>
      </div>
    `;

    modal.classList.add('open');
    modal.removeAttribute('hidden');
    document.body.classList.add('no-scroll');
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('hidden', '');
    if (!cartOpen) document.body.classList.remove('no-scroll');
    modalProduct = null;
  }

  /* ─── Public API (attached to window) ───────────────────── */
  const App = {
    addToCart(productId) {
      const product = products.find(p => p.id === productId);
      if (!product || !product.stock) return;
      Cart.addItem(product);
      updateCartBadge();
      showToast(`"${product.name}" added to cart!`);
      if (cartOpen) renderCart();
    },

    updateQty(productId, newQty) {
      Cart.updateQuantity(productId, newQty);
      renderCart();
    },

    removeFromCart(productId) {
      Cart.removeItem(productId);
      renderCart();
    },

    openModal(productId) {
      openModal(productId);
    },

    resetFilters() {
      activeCategory = 'All';
      searchQuery = '';
      sortOrder = 'default';
      searchInput.value = '';
      sortSelect.value = 'default';
      updateFiltersUI();
      renderProducts();
    }
  };

  window.App = App;

  /* ─── Event Listeners ────────────────────────────────────── */
  // Search
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    activeCategory = 'All';
    updateFiltersUI();
    renderProducts();
  });

  // Sort
  sortSelect.addEventListener('change', e => {
    sortOrder = e.target.value;
    renderProducts();
  });

  // Cart open/close
  cartIcon.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Clear cart
  clearCartBtn.addEventListener('click', () => {
    Cart.clear();
    renderCart();
    showToast('Cart cleared', 'error');
  });

  // Modal close
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // Hamburger nav
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('open');
  });

  // Close nav on link click (mobile)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Keyboard close modal / cart
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (modal.classList.contains('open')) closeModal();
      else if (cartOpen) closeCart();
    }
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ─── Init ───────────────────────────────────────────────── */
  function init() {
    buildCategoryFilters();
    renderProducts();
    updateCartBadge();

    // Fade-in animation for hero
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.classList.add('fade-in');
    }

    // Animate feature cards on load
    requestAnimationFrame(setupScrollAnimations);
  }

  // Intersection Observer for card animations
  function setupScrollAnimations() {
    if (!window.IntersectionObserver) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .product-card').forEach(el => {
      observer.observe(el);
    });
  }

  init();
})();
