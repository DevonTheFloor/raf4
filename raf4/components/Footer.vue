<template>
  <footer>
    <div class="row nav-menu">
      <div class="col-4 col-sm-4 col-lg-2">
        <nuxt-link to="upload">
          <figure>
            <nuxt-link to="/upload">
              <img id="tout" class="picnav" src="~assets/img/dl.gif" alt="upload">
            </nuxt-link>
          </figure>
        </nuxt-link>
      </div>

      <div class="col-4 col-sm-4 col-lg-2">
        <figure>
          <nuxt-link to="/anglais/cours">
            <img id="anglais" class="picnav" src="~assets/img/angl.gif" alt="anglais">
          </nuxt-link>
        </figure>
      </div>

      <div class="col-4 col-sm-4 col-lg-2">
        <figure>
          <nuxt-link to="/francais/cours">
            <img id="francais" class="picnav" src="~assets/img/fran.gif" alt="francais">
          </nuxt-link>
        </figure>
      </div>

      <div class="col-4 col-sm-4 col-lg-2">
        <figure>
          <nuxt-link to="/histoire/cours">
            <img id="histoire" class="picnav" src="~assets/img/histoire.gif" alt="histoire">
          </nuxt-link>
        </figure>
      </div>

      <div class="col-4 col-sm-4 col-lg-2">
        <figure>
          <nuxt-link to="/mathematique/cours">
            <img id="maths" class="picnav" src="~assets/img/math.gif" alt="mathematique">
          </nuxt-link>
        </figure>
      </div>

      <div class="col-4 col-sm-4 col-lg-2">
        <figure>
          <nuxt-link to="/physique/cours">
            <img id="phy" class="picnav" src="~assets/img/phys.gif" alt="physique">
          </nuxt-link>
        </figure>
      <!-- <Imgnav class="picnav" :lien="'physique'" :visuel="'~assets/img/phys.gif'" /-->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">

footer{
  background-color: rgb(209, 198, 198);
  border: 5px ridge rgb(236, 221, 221);
  position: fixed;
  bottom: 0px;
  z-index: 3;
  width: 100vw;
  height: auto;
  bottom: 0px;
}

</style>
