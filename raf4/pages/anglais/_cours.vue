<template>
  <div class="container-fluid">
    <div class="diapo">
      <div v-for="photo in datas" :key="photo.id">
        <div class="cadre">
          <Supprimer />
          <Reup />
          <img class="photo" :src="'https://school-task.herokuapp.com/UPIMG/'+photo.nom">
          <input type="text" :value="photo._id">
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
  beforeCreate () {
    axios.get('https://school-task.herokuapp.com/eng/')
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
