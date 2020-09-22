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
      listId: []
    }
  },
  created () {

  },
  mounted () {
    axios.get('https://school-task.herokuapp.com/eng/')
      .then((response) => {
        console.log(response.data)
        this.datas = response.data
        this.datas.forEach((photo) => {
          console.log(photo._id)
          return this.fotoid
        })
      })
      .catch(error => console.log(error))
    this.$nuxt.$on('effaceur', () => {
      console.log(this.fotoid)
      axios.delete('https://school-task.herokuapp.com/del/' + this.fotoid)
        .then(() => console.log('object deleted'))
        .catch(error => console.log(error))
    })
  },
  methods: {
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
