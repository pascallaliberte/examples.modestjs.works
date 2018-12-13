import Vue from 'vue'
import Cart from './vue/cart.vue'

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
