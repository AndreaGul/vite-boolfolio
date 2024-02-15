<script>
import AppMainProjectCard from './AppMainProjectCard.vue';
export default {
  name: 'AppMain',
  components: { AppMainProjectCard },
  props: ['projects'],
};
</script>

<template>
  <header class="container">
    <ul class="row list-unstyled">
      <li class="col-sm-4 g-3" v-for="project in projects">
        <AppMainProjectCard :project="project" />
      </li>
    </ul>
    <h2 class="text-center">main</h2>
  </header>
</template>

<style scoped></style>
