<template>
  <div class="container-fluid">
    <div class="diapo">
      <div v-for="photo in datas" :key="photo.id">
        <div class="cadre">
          <Supprimer />
          <Reup />
          <img class="photo" :src="'https://school-task.herokuapp.com/UPIMG/'+photo.nom">
          <p> {{ photo._id }} </p>
          <p> {{ photo.com }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData () {
    return axios.get('https://school-task.herokuapp.com/nimp/')
      .then((response) => { return { datas: response.data } })
      .catch((error) => { console.log(error) })
  },
  created () {
    this.$nuxt.$on('effaceur', () => {
      axios.delete('https://school-task.herokuapp.com/del/' + photo._ide)
        .then()
        .catch()
    })
  }
}
</script>
<style lang="scss">

</style>
