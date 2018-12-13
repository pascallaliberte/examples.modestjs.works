<template lang="html">
  <span :class="classPrefix">
    <span :class="`${classPrefix}-currency`">$</span>
    <span :class="`${classPrefix}-${numberClassSuffix}`">{{ numberFormatted }}</span>
  </span>
</template>

<script>
import roundCurrency from '../lib/roundCurrency'
export default {
  data() {
    return {
      numberFormatted: null
    }
  },
  props: {
    classPrefix: {
      type: String,
      default: 'item'
    },
    numberClassSuffix: {
      type: String,
      default: 'subtotal'
    },
    number: {
      type: Number,
      default: 0,
    },
    decimals: {
      type: Number,
      default: 2,
    }
  },
  mounted() {
    this.numberFormatted = roundCurrency(this.number, this.decimals)
  },
  watch: {
    number(newVal) {
      this.numberFormatted = roundCurrency(newVal, this.decimals)
    },
  },
}
</script>

<style lang="css">
</style>
