<template lang="html">
  <div>
    <div class="col-7">
       {{ itemName }}
    </div>
    <div class="col-2">
      <label class="sr-only">Quantity</label>
      <input type="number" v-model="quantity" />
    </div>
    <div class="col-3 text-right">
      <span class="cart-item-price">
        <span class="cart-item-price-currency">$</span>
        <span class="cart-item-price-subtotal">{{ subtotal }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
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
  watch: {
    quantity(newVal) {
      this.subtotal = newVal * this.unitPrice
      this.$emit('update:item-subtotal')
    }
  }
}
</script>

<style lang="css">
</style>
