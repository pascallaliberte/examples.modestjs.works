<template>
  <div class="container cart">
    <div class="cart-items">
      <cart-item v-for="item in items" :key="item.item_name" 
        :item-name="item.item_name"
        :quantity.sync="item.quantity"
        :subtotal.sync="item.subtotal"
        :unit-price="item.unit_price"
        v-on:update:subtotal="updateSubtotal()"
        class="row cart-item">
      </cart-item>
    </div>
    <div class="row">
      <div class="col-9 text-right">
        Subtotal
      </div>
      <div class="col-3 text-right">
        <currency
         :number="subtotal"
         class-prefix="cart-subtotal-price"
         number-class-suffix="subtotal"
         >
        </currency>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from './cart-item.vue'
import Currency from './currency.vue'
import Vue from 'vue'

export default {
  components: {
    CartItem,
    Currency
  },
  data() {
    return {
      items: {},
      subtotal: null,
    }
  },
  mounted() {
    this.items = JSON.parse(this.$el.parentNode.getAttribute('data-items'))
    this.subtotal = JSON.parse(this.$el.parentNode.getAttribute('data-subtotal'))
  },
  methods: {
    updateSubtotal() {
      this.subtotal = this.items.map((item) => item.subtotal).reduce((accumulator, itemSubtotal) => {
        return accumulator + itemSubtotal
      }, 0)
    }
  }
}
</script>

<style lang="css">
</style>
