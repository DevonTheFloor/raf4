<template>
  <div class="logo d-flex">
    <figure class="mx-auto my-auto">
      <img class="NuxtLogo" src="~assets/img/nuxt-icon.png">
    </figure>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.NuxtLogo {

  animation: 3s appear;
  margin-top: 10%;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
.logo{
  max-height: 100vmax;
}

</style>
