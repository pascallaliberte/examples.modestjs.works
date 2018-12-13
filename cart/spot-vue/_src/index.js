import Vue from 'vue'
import Cart from './vue/cart.vue'
import CartQuantity from './vue/cart-quantity.vue'

// CSS and SASS files
import './index.scss';


document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('[data-behavior="cart"]')
  if (!el) return
  
  new Vue({
    el: el.appendChild(document.createElement('cart')),
    render: h => h(Cart),
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('[data-behavior="cart-quantity"]')
  if (!el) return
  
  new Vue({
    el: el.appendChild(document.createElement('cart-quantity')),
    render: h => h(CartQuantity),
  })
})
