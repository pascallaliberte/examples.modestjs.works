<template lang="html">
  <div>
    <div class="col-6 col-sm-7 d-flex flex-column justify-content-start align-items-start">
      <span class="cart-item-info-name">{{ itemName }}</span>
      <span class="cart-item-info-price">${{ unitPrice }}</span>
    </div>
    <div class="col-2 col-sm-2 d-flex flex-column justify-content-center">
      <label class="sr-only">Quantity</label>
      <input type="number" v-model="reactiveQuantity" />
    </div>
    <div class="col-4 col-sm-3 d-flex flex-column align-items-end text-right justify-content-center">
      <currency
       :number="reactiveSubtotal"
       class-prefix="cart-item-price"
       number-class-suffix="subtotal"
       >
      </currency>
    </div>
  </div>
</template>

<script>
import Currency from './currency.vue'

export default {
  components: {
    Currency,
  },
  data() {
    return {
      reactiveSubtotal: 0,
      reactiveQuantity: 0,
    }
  },
  props: {
    itemName: {
      type: String,
      default: '',
    },
    quantity: {
      type: Number,
      default: 0,
    },
    subtotal: {
      type: Number,
      default: 0,
    },
    unitPrice: {
      type: Number,
      default: 0,
    }
  },
  mounted() {
    this.reactiveQuantity = this.quantity
    this.reactiveSubtotal = this.subtotal
  },
  watch: {
    quantity(newVal) {
      this.reactiveQuantity = this.quantity
    },
    subtotal(newVal) {
      this.reactiveSubtotal = this.subtotal
    },
    reactiveQuantity(newVal, oldVal) {
      if (newVal === oldVal) return
      this.reactiveSubtotal = newVal * this.unitPrice
      this.$emit('update:quantity', newVal)
    },
    reactiveSubtotal(newVal, oldVal) {
      if (newVal === oldVal) return
      this.$emit('update:subtotal', newVal)
    },
  }
}
</script>

<style lang="css">
</style>
