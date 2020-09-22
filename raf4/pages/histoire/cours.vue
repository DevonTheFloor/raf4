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
    this.$nuxt.$on('effaceur', () => {
      axios.delete('https://school-task.herokuapp.com/del/', {
        id: this.photo._id
      })
        .then(() => console.log('object deleted'))
        .catch(error => console.log(error))
    })
  },
  head: {
    title: 'Histoire'
  }
}

</script>
