<template>
  <div class="container-fluid">
    <button class="btn btn-primary btn-lg">
      <i class="fas fa-bars"></i>
    </button>
    <div v-for="item in items" :key="item.id">
      <ol>
        <li> {{ item.message1 }} </li>
        <li> {{ item.crotte }} </li>
      </ol>
    </div>
      <p>  coucou  </p>
    <Footer />
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      updata: '',
      items: [
        { message1: 'Foo' },
        { message: 'Bar' },
        { message: 'coucou' },
        { crotte: 'salkut' }]
    }
  },
  mounted () {
    axios.get('https://school-task.herokuapp.com/nimp/')
      .then(async (response) => { console.log(response.data); await (response.data = this.updata) })
      .catch((error) => { console.log(error) })
  }
}
</script>
<style lang="scss">

</style>
