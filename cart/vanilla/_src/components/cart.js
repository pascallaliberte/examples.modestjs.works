/* eslint-disable */
const quantityFieldsSelector = '[data-behavior="cart-item-quantity"]'
const itemSubtotalSelector = '[data-behavior="cart-item-subtotal"]'
const cartSubtotalSelector = '[data-behavior="cart-subtotal"]'

function enableQuantityFields() {
  document.addEventListener('change', function(event) {
    if (event.target.getAttribute('data-behavior') !== 'cart-item-quantity') return
    updateItemSubtotal(event)
    broadcastNewCartQuantity()
  })
}

function updateItemSubtotal(event) {
  if (!event.target.hasAttribute('data-product-id')) return

  const quantity = event.target.value
  const productId = event.target.getAttribute('data-product-id')

  let itemSubtotalEl = document.querySelector(`${itemSubtotalSelector}[data-product-id="${productId}"]`)

  if (!itemSubtotalEl) return
  if (!itemSubtotalEl.hasAttribute('data-item-price')) return

  const price = parseFloat(itemSubtotalEl.getAttribute('data-item-price'))
  const subtotal = quantity * price
  
  itemSubtotalEl.setAttribute('data-item-subtotal', subtotal)
  itemSubtotalEl.textContent = roundCurrency(subtotal)
  
  updateCartSubtotal()
}

function updateCartSubtotal() {
  const subtotalEls = document.querySelectorAll(itemSubtotalSelector)
  const cartSubtotalEl = document.querySelector(cartSubtotalSelector)
  
  if (subtotalEls.length === 0) return
  if (!cartSubtotalEl) return
  
  const subtotals = []
  subtotalEls.forEach(function(el) {
    if (!el.hasAttribute('data-item-subtotal')) return
    subtotals.push(parseFloat(el.getAttribute('data-item-subtotal')))
  })
  
  const subtotal = subtotals.reduce(function(accumulator, currentItemSubTotal) {
    if (currentItemSubTotal === null) return accumulator
    return accumulator + currentItemSubTotal
  })
  
  // update the cart subtotal
  cartSubtotalEl.textContent = roundCurrency(subtotal)
}

function broadcastNewCartQuantity() {
  const quantityFields = document.querySelectorAll(quantityFieldsSelector)
  
  if (quantityFields.length === 0) return
  
  let newQuantity = 0;
  quantityFields.forEach(function(el) {
    if (!el.value) return
    newQuantity = newQuantity + parseInt(el.value)
  })
  
  const event = new CustomEvent('cart-quantity-updated', { detail: {
    newQuantity: newQuantity
  }});
  
  document.dispatchEvent(event)
}

function roundCurrency(float) {
  // see https://stackoverflow.com/a/18358056
  return +(Math.round(float + "e+2")  + "e-2")
}

enableQuantityFields()
