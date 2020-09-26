<template>
  <div class="container-fluid">
    <div class="diapo">
      <Supprimer @click="backing" />
      <img class="fullimg" :src="urimg+nom">
    </div>
    <i class="back-btn fas fa-step-backward" @click="backforward" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      nom: this.$route.params.nom,
      urimg: 'https://apiperso.herokuapp.com/UPIMG/'
    }
  },

  created () {
    this.$nuxt.$on('effaceur', () => {
      axios.delete('https://apiperso.herokuapp.com/del/' + this.nom)
        .then(statut => console.log(statut.message))
        .then(this.backing())
        .catch(error => console.log(error))
    })
  },
  methods: {
    backforward () {
      history.back()
    },
    backing () {
      const urli = sessionStorage.getItem('stockPath')
      location.assign(urli)
    }
  },
  head: {
    title: 'Détails'
  }
}
</script>

<style lang="scss">
.fullimg {
  width: 98%;
  height: auto;
  margin: 2%;
}
.back-btn {
  margin:2%;
  cursor: pointer;
  color: blue;
  font-size: 2em;
  border:1px solid blue;
  background-color: rgb(140, 214, 236);
  &:hover {
    background-color: rgb(123, 123, 230);
  }
}
</style>
