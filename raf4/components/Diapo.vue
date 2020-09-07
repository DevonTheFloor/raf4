<template>
  <div>
    <div v-for="photo in angdata" :key="photo.id">
      <img class="diapo" :src="'https://school-task.herokuapp.com/UPIMG/'+photo.nom">
    </div>
  </div>
</template>
