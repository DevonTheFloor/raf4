<template>
  <button class="supr" @click="effacer">
    X
  </button>
</template>

<script>
export default {
  methods: {
    effacer () {
      alert('êtes vous sûr de vouloir effacer ce document ?')
    }
  }
}
</script>
<style lang="scss" scoped>
.supr{
  color: red;
  background-color: rgb(230, 135, 135);
  border: 1px solid red;
  border-radius: 3%;
}
</style>
