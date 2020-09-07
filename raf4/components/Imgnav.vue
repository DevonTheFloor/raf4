<template>
  <nuxt-link :to="lien">
    <figure>
      <img class="picnav" :src="visuel">
    </figure>
  </nuxt-link>
</template>
<script>

export default {
  props: {
    visuel: {
      type: String,
      required: true
    },
    lien: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss">
.picnav{
  margin: 8%;
  width: 70%;
  height: 10%;
  &:hover{
    cursor: pointer;
  }
}
</style>
