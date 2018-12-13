<template>
  <div>
    Vue
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
