<template>
  <div class="container-fluid">
    <Header />
    <Menu />
    <div class="diapo col-lg-12">
      <div v-for="photo in datas" :key="photo.id">
        <img class=" photo" :src="'https://school-task.herokuapp.com/UPIMG/'+photo.nom">
        <p class="com">
          {{ photo.com }}
        </p>
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

<style lang="scss">

</style>
