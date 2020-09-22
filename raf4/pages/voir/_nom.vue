<template>
  <div class="container-fluid">
    <div class="diapo">
      <Supprimer />
      <img class="fullimg" :src="uri+nom">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nom: this.$route.params.nom,
      params: '',
      uri: 'https://school-task.herokuapp.com/UPIMG/',
      urlimg: ''
    }
  },
  computed: {
  },
  beforCreate () {
    /* const params = new URLSearchParams(document.location.search)
    console.log(params)
    const id = params.get('id')
    console.log('id :', id)
    const nom = params.get('nom')
    console.log('nom :', nom)
    return nom */
  }
}
</script>

<style lang="scss">
.fullimg {
  width: 98%;
  height: auto;
  margin: 2%;
}
</style>
