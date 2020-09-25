<template>
  <div class="container-fluid">
    <div class="diapo">
      <div v-for="photo in datas" :key="photo.id">
        <div class="cadre">
          <nuxt-link :to="'/voir/'+photo.nom" class="voir">
            Voir
          </nuxt-link>
          <img class="photo" :src="'https://school-task.herokuapp.com/UPIMG/'+photo.nom">
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
    return axios.get('https://school-task.herokuapp.com/histoire/')
      .then((response) => {
        console.log(response.data)
        return {
          datas: response.data
        }
      })
      .catch((error) => { console.log(error) })
  },
  mounted () {
    const util = location.href
    sessionStorage.setItem('stockPath', util)
  },
  head: {
    title: 'Histoire'
  }
}

</script>
