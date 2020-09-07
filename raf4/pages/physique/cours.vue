<template>
  <div class="container-fluid">
    <Header />
    <div class="diapo d-flex flex-column">
      <div class="justify-content-center" v-for="photo in datas" :key="photo.id">
        <img class=" photo" :src="'https://school-task.herokuapp.com/UPIMG/'+photo.nom">
        <p> {{ photo.com }} </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData () {
    return axios.get('https://school-task.herokuapp.com/physique/')
      .then((response) => { return { datas: response.data } })
      .catch((error) => { console.log(error) })
  }
}
</script>
