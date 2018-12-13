<template>
  <div class="container cart">
    <div class="cart-items">
      <div v-for="item in items" :index="item.item_name" class="row cart-item">
        <div class="col-7">
           {{ item.item_name }}
        </div>
        <div class="col-2">
          <label class="sr-only">Quantity</label>
          <input type="number" v-model="item.quantity" />
        </div>
        <div class="col-3 text-right">
          <span class="cart-item-price">
            <span class="cart-item-price-currency">$</span>
            <span class="cart-item-price-subtotal">{{ item.subtotal }}</span>
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-9 text-right">
        Subtotal
      </div>
      <div class="col-3 text-right">
        <span class="cart-subtotal-price">
          <span class="cart-subtotal-price-currency">$</span>
          <span class="cart-subtotal-price-subtotal">{{ subtotal }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {},
      subtotal: null,
    }
  },
  mounted() {
    this.items = JSON.parse(this.$el.parentNode.getAttribute('data-items'))
    this.subtotal = JSON.parse(this.$el.parentNode.getAttribute('data-subtotal'))
  }
}
</script>

<style lang="css">
</style>
