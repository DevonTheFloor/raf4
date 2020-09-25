<template>
  <button class="supr" @click="effaceur">
    Supprimer
  </button>
</template>

<script>
export default {

  methods: {
    effaceur () {
      this.$nuxt.$emit('effaceur')
      console.log('$emit effaceur')
    }
  }
}
</script>

<style lang="scss" scoped>
.supr{
  color: red;
  background-color: rgb(230, 135, 135);
  border: 1px solid red;
  border-radius: 10px;
  &:active{
    background-color: rgb(200, 75, 169);
  }
}
</style>
