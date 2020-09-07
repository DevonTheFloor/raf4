<template>
  <div class="container-fluid">
    <div>
      <Header />

      <Logo />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    metaInfo: {
      link: [
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.0/css/all.css' }
      ]
    }
  }
}
</script>

<style>
.container-fluid {
  margin: 0 auto;
  min-height: 100vh;
  background-image: url('~assets/img/fastn.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /*display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;*/
}
img{
  border: 1px solid black;
  box-shadow: 8px 8px 8px 8px grey;
}
</style>
