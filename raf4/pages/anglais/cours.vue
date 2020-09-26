<template>
  <div class="container-fluid">
    <div class="diapo">
      <div v-for="photo in datas" :key="photo.id">
        <div class="cadre">
          <nuxt-link :to="'/voir/'+photo.nom" class="voir">
            Voir
          </nuxt-link>
          <img class="photo" :src="'https://apiperso.herokuapp.com/UPIMG/'+photo.nom">
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
    return axios.get('https://apiperso.herokuapp.com/eng/')
      .then((response) => {
        return { datas: response.data }
      })
      .catch((error) => { console.log(error) })
  },
  mounted () {
    const util = location.href
    sessionStorage.setItem('stockPath', util)
  },
  head: { title: 'Anglais' }
}

</script>

<style lang="scss">
.cadre {
  border: whitesmoke;
  background-color: rgb(202, 201, 201);
  border-radius: 10px;
}
</style>
