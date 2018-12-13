<template lang="html">
  <div>
    <div class="col-7">
       {{ itemName }}
    </div>
    <div class="col-2">
      <label class="sr-only">Quantity</label>
      <input type="number" v-model="reactiveQuantity" />
    </div>
    <div class="col-3 text-right">
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
