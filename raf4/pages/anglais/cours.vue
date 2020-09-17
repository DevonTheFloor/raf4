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
  data () {
    return {
      datas: '',
      photo: ''
    }
  },
  created () {

  },
  mounted () {
    this.$nuxt.$on('effaceur', () => {
      console.log('photo._id : ', this.photo._id)
      axios.delete('https://school-task.herokuapp.com/del/')
        .then(() => { console.log('object deleted') })
        .catch((error) => { console.log(error) })
    })
    axios.get('https://school-task.herokuapp.com/eng/')
      .then((response) => { console.log(response.data); this.datas = response.data })
      .catch((error) => { console.log(error) })
  },
  methods: {
    effacer () {

    }
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
