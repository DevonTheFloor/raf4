<template>
  <button class="menu btn btn-primary btn-lg" @click="tglbar">
    <i class="fas fa-bars"></i>
  </button>
</template>

<script>
export default {
  methods: {
    tglbar () {

    }
  }
}
</script>

<style lang="scss" scoped>
.menu{
  width: 50px;
  height: 50px;
  border-radius: 25px;
  position: fixed;
  top: 150px;
  z-index: 1;
}
</style>
