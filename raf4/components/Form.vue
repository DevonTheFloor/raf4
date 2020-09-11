<template>
  <aside class="send col-12 col-lg-3">
    <form action="/" method="post" enctype="multipart/form-data">
      <br><br>
      <input id="file" type="file" name="file" required="required">
      <br>
      <br>
      <label for="matiere">Matière</label>
      <select id="matiere" name="matiere" required="required">
        <option value="">
          ---
        </option>
        <option value="upload">
          Nimp
        </option>
        <option value="anglais">
          Anglais
        </option>
        <option value="francais">
          Françai
        </option>
        <option value="maths">
          Maths
        </option>
        <option value="physique">
          Physique
        </option>
        <option value="chimie">
          Chimie
        </option>
        <option value="histoire">
          Histoire
        </option>
        <option value="geo">
          Géographie
        </option>
      </select><br>
      <br>
      <label for="cours">Cours</label><input id="cours" type="radio" name="categorie" value="cours" required="required"><br>
      <label for="devoir">Devoir</label><input id="devoir" type="radio" name="categorie" value="devoir"><br>
      <label for="exam">Contrôle</label>
      <input id="exam" type="radio" name="categorie" value="exam"><br>
      <br>
      <label for="com">Commentaire:</label><br>
      <textarea id="com" name="com" cols="23" /><br><br>
      <input id="upld" type="submit" value="Envoyer !"><br><br>
      <input id="cancel" type="reset" value="Annuler !" @click="annuler">
    </form>
  </aside>
</template>

<script>
export default {
  methods: {
    annuler () {
      this.seeform = false
    }
  }
}
</script>

<style lang="scss">
.send{
  display: none;
  text-align: center;
  background-color: rgb(162, 206, 245);
  opacity: 0.90;
  position: absolute;
  padding: 3%;
  z-index: 3;
}
#upld{
  background-color: rgb(62, 231, 62);
  border-radius: 10px;
  width: 50%;
}
#cancel{
  background-color: rgb(236, 176, 121);
  border-radius: 10px;
  width: 50%;
}

</style>
