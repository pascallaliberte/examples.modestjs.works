<template lang="html">
  <span>
    Cart: <strong>{{ quantity }}</strong>
  </span>
</template>

<script>
export default {
  data() {
    return {
      quantity: {},
    }
  },
  mounted() {
    this.quantity = JSON.parse(this.$el.parentNode.getAttribute('data-quantity'))
    document.addEventListener('cart-quantity-updated', this.getNewQuantity)
  },
  beforeDestroy() {
    document.removeEventListener('cart-quantity-updated', this.getNewQuantity)
  },
  methods: {
    getNewQuantity(event) {
      if (!event.detail || !event.detail.newQuantity) return
      this.quantity = event.detail.newQuantity
    }
  }
}
</script>

<style lang="css">
</style>
