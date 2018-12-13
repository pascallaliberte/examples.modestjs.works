/* eslint-disable */
const cartIconQuantitySelector = '[data-behavior="cart-icon-quantity"]'

document.addEventListener('cart-quantity-updated', function(event) {
  if (!event.detail || !event.detail.newQuantity) return
  
  const cartQuantityEl = document.querySelector(cartIconQuantitySelector)
  
  if (!cartQuantityEl) return
  
  cartQuantityEl.textContent = event.detail.newQuantity
})
