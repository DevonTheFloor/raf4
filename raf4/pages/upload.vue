<template>
  <div class="container-fluid">
    <div class="diapo">
      <div v-for="photo in datas" :key="photo.id">
        <div class="cadre">
          <nuxt-link :to="'/voir/'+photo.nom" class="voir">
            Voir
          </nuxt-link>
          <img class="photo" :src="'https://apiperso.herokuapp.com/UPIMG/'+photo.nom">
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
    return axios.get('https://apiperso.herokuapp.com/nimp/')
      .then((response) => { return { datas: response.data } })
      .catch((error) => { console.log(error) })
  },

  mounted () {
    const util = location.href
    sessionStorage.setItem('stockPath', util)
  },

  head: {
    title: 'Uploadage'
  }
}
</script>
<style lang="scss">

</style>
