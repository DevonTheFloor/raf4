<template>
  <header>
    <div class="row nav-menu">
      <div class="col-3 col-sm-3 col-lg-3">
        <span class="btn btn-primary btn-primary"><i class="fas fa-chalkboard-teacher" /> COURS</span>
      </div>
      <div class="col-3 col-sm-3 col-lg-3">
        <span class="btn btn-primary btn-warning"><i class="fas fa-business-time" /> DEVOIR</span>
      </div>
      <div class="col-3 col-sm-3 col-lg-3">
        <span class="btn btn-primary btn-danger"><i class="fas fa-user-graduate" /> EXAM</span>
      </div>
      <div class="col-3 col-sm-3 col-lg-3">
        <span class="addform btn btn-primary btn-success" @click="toggform"><i class="fas fa-cloud-upload-alt" /> AJOUT</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggform () {
      this.$nuxt.$emit('toggform')
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  background-color: rgb(209, 198, 198);
  border: 7px ridge  rgb(236, 221, 221);
  position: fixed;
  top: 0px;
  padding: 0.5%;
  z-index: 1;
  width: 100vw;
  height: auto;
}

.btn{
  &:hover {
    cursor: pointer;
  }
}
</style>
