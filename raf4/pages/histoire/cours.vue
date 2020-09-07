<template>
  <div class="container-fluid">
    <Header />
    <div class="diapo">
      <div v-for="photo in datas" :key="photo.id">
        <img :src="'https://school-task.herokuapp.com/UPIMG/'+photo.nom">
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
    return axios.get('https://school-task.herokuapp.com/histoire/')
      .then((response) => { console.log(response.data); return { datas: response.data } })
      .catch((error) => { console.log(error) })
  }
}
</script>
