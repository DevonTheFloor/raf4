<template>
  <div>
    <Header v-show="seenav" />
    <Menu />
    <Form v-show="seeform" />
    <Nuxt />
    <Footer v-show="seenav" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      seenav: false,
      seeform: false,
      API: 'https://school-task.herokuapp.com'
    }
  },
  created () {
    this.$nuxt.$on('toggling', () => {
      if (this.seenav === false) {
        this.seenav = true
      } else {
        this.seenav = false
      }
    })
    this.$nuxt.$on('toggform', () => {
      this.seeform = true
    })
    this.$nuxt.$on('untoggform', () => {
      this.seeform = false
    })
  }

}
</script>

<style lang="scss">
$baknav: rgb(209, 198, 198);
$baknavbord: rgb(236, 221, 221);
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.diapo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.com{
  background-color: rgb(226, 210, 210);
}
.photo{
  width: 60vw;
  height: auto;
}

.container-fluid {
  margin: 0 auto;
  min-height: 100vh;
  background-image: url('~assets/img/fastn.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

img{
  border: 1px solid black;
  box-shadow: 3px 3px 3px 3px grey;
}

.voir {
  border: 1px solid blue;
  color: whitesmoke;
  border-radius: 5px;
  background-color: rgb(127, 127, 230);
  &:hover{
    background-color: rgb(97, 97, 151);
  }
}
</style>
