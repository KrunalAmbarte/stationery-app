// cart.js — Shopping cart logic with LocalStorage persistence

const Cart = (() => {
  const STORAGE_KEY = 'stationery_cart';

  let items = [];

  // Load cart from LocalStorage
  function load() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      items = stored ? JSON.parse(stored) : [];
    } catch (e) {
      items = [];
    }
  }

  // Save cart to LocalStorage
  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  // Get all cart items
  function getItems() {
    return [...items];
  }

  // Get total item count
  function getCount() {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  // Get cart subtotal
  function getSubtotal() {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Add a product to the cart
  function addItem(product) {
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: 1
      });
    }
    save();
    return getCount();
  }

  // Remove an item entirely from the cart
  function removeItem(productId) {
    items = items.filter(i => i.id !== productId);
    save();
  }

  // Update quantity of an item (removes if quantity <= 0)
  function updateQuantity(productId, quantity) {
    const item = items.find(i => i.id === productId);
    if (item) {
      if (quantity <= 0) {
        removeItem(productId);
      } else {
        item.quantity = quantity;
        save();
      }
    }
  }

  // Clear the entire cart
  function clear() {
    items = [];
    save();
  }

  // Initialise on load
  load();

  return { getItems, getCount, getSubtotal, addItem, removeItem, updateQuantity, clear };
})();
