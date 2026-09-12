// ---------- Catálogo de tamanhos ----------
const SIZES = [
  { id: '10x15', name: '10x15', desc: 'Clássico álbum & porta-retratos', price: 5.00, tag: '3:2 proporção' },
  { id: '15x20', name: '15x20', desc: 'Retrato ampliado & quadros de mesa', price: 10.00, tag: '4:3 proporção' },
  { id: '2x2', name: '2x2 foto pingente', desc: 'Para relicários, joias e medalhas', price: 10.00, tag: '1:1 circular' },
  { id: '3x4', name: '3x4', desc: 'Documentos, currículos e RG', price: 10.00, tag: 'Kit 4 fotos' },
  { id: '5x7', name: '5x7', desc: 'Tamanho carteira e capinhas transparentes', price: 1.50, tag: 'Pocket size' },
  { id: '7x10', name: '7x10', desc: 'Mini porta-retrato, diários e geladeira', price: 2.50, tag: '70x100mm' },
  { id: 'polaroid', name: 'Polaroid', desc: 'Borda branca icônica & espaço para legenda', price: 2.50, tag: 'Margem autêntica' },
];

const STORAGE = {
  size: 'ac_selected_size',
  queue: 'ac_photo_queue',
  cart: 'ac_cart',
};

const AC = {
  fmt(v) {
    return 'R$ ' + v.toFixed(2).replace('.', ',');
  },
  getSize() {
    try { return JSON.parse(localStorage.getItem(STORAGE.size)); } catch (e) { return null; }
  },
  setSize(size) {
    localStorage.setItem(STORAGE.size, JSON.stringify(size));
  },
  getQueue() {
    try { return JSON.parse(localStorage.getItem(STORAGE.queue)) || []; } catch (e) { return []; }
  },
  setQueue(q) {
    localStorage.setItem(STORAGE.queue, JSON.stringify(q));
  },
  clearQueue() {
    localStorage.removeItem(STORAGE.queue);
  },
  getCart() {
    try { return JSON.parse(localStorage.getItem(STORAGE.cart)) || []; } catch (e) { return []; }
  },
  setCart(c) {
    localStorage.setItem(STORAGE.cart, JSON.stringify(c));
  },
  cartTotal(cart) {
    return cart.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);
  },
  cartCount(cart) {
    return cart.reduce((sum, item) => sum + item.qty, 0);
  },
  uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  },
  goto(page) {
    window.location.href = page;
  },
};

function iconCheck() {
  return '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5L9.5 17L19 7.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}
