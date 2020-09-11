<template>
  <div>
    <Header v-show="seenav" />
    <Menu />
    <Form />
    <Nuxt />
    <Footer v-show="seenav" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      seenav: true
    }
  },
  created () {
    this.$nuxt.$on('toggling', () => {
      if (this.seenav === true) {
        this.seenav = false
      } else {
        this.seenav = true
      }
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
  border: 10px solid rgb(194, 179, 179);
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
  margin: 3%;
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
  box-shadow: 8px 8px 8px 8px grey;
}
</style>
