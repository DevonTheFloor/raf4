<template>
  <button @click="toglbar" class="menu btn btn-primary btn-lg">
    <i class="fas fa-bars"></i>
  </button>
</template>

<script>
export default {
  methods: {
    toglbar () {
      this.$nuxt.$emit('toggling')
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  position: fixed;
  top: 150px;
  z-index: 1;
}
</style>
