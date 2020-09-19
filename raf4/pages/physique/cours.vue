<template>
  <div class="container-fluid">
    <div class="diapo">
      <div v-for="photo in datas" :key="photo.id">
        <div class="cadre">
          <Supprimer />
          <Reup />
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
  /* asyncData () {
    return axios.get('https://school-task.herokuapp.com/physique/')
      .then((response) => { return { datas: response.data } })
      .catch((error) => { console.log(error) })
  } */
  beforeCreate () {
    axios.get('https://school-task.herokuapp.com/physique/')
      .then((response) => {
        console.log(response.data)
        this.datas = response.data
        this.datas.forEach((photo) => {
          console.log(photo._id)
        })
      })
      .catch(error => console.log(error))
  },
  mounted () {
    this.$nuxt.$on('effaceur', () => {
      axios.delete('https://school-task.herokuapp.com/del/', {
        id: this.photo._id
      })
        .then(() => console.log('object deleted'))
        .catch(error => console.log(error))
    })
  }
}
</script>

<style lang="scss">

</style>
