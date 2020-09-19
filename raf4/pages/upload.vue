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
  asyncData (context) {
    return axios.get('https://school-task.herokuapp.com/nimp/')
      .then((response) => { return { datas: response.data } })
      .catch((error) => { console.log(error) })
  },
  data () {
    return {
      datas: ''
    }
  },
  created () {
    this.$nuxt.$on('effaceur', () => {
      axios.delete('https://school-task.herokuapp.com/del/')
        .then()
        .catch()
    })
  },
  head: {
    title: 'Uploadage'
  }
}
</script>
<style lang="scss">

</style>
