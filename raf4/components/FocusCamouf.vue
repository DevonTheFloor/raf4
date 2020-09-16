<template>
  <div>
    <form class="formreup">
      <div class="parent-div">
        <button class="btn-upload">
          <i class="fas fa-upload" />
          <input id="file" type="file">
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.formreup {
  background-color: rgb(122, 221, 122);
  border: 2px solid green;
}
.parent-div {
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.parent-div input[type=file]{
  left:0;
  top:0;
  opacity:0;
  position:absolute;
}
.btn-upload {
  color:green;
}
</style>

<script>

</script>
