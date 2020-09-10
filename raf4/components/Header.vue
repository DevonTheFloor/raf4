<template>
  <header class="row nav-menu">
    <div class="col-3 col-sm-3 col-lg-3">
      <a href="EcoleMaison/" class="btn btn-primary btn-primary"><i class="fas fa-chalkboard-teacher"></i> COURS</a>
    </div>
    <div class="col-3 col-sm-3 col-lg-3">
      <a href="#" class="btn btn-primary btn-warning"><i class="fas fa-business-time"></i> DEVOIR</a>
    </div>
    <div class="col-3 col-sm-3 col-lg-3">
      <a href="#" class="btn btn-primary btn-danger"><i class="fas fa-user-graduate"></i> EXAM</a>
    </div>
    <div class="col-3 col-sm-3 col-lg-3">
      <a href="#" class="add btn btn-primary btn-success"><i class="fas fa-cloud-upload-alt" @click="addbar"></i> AJOUT</a>
    </div>
  </header>
</template>

<script>
export default {
  meyhods: {
    addbar () {
      this.seeform = true
    }
  }
}
</script>

<style>
header{
  background-color: darkgray;
  border: 7px ridge silver;
  position: fixed;
  top: 2px;
  z-index: 1;
  width: 100%;
  height: auto;
  padding: 1%;
  position: relative;
  top: 0px;
}
.add > {
  display: block;
}
</style>
