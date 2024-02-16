<script>
export default {
  name: 'AppHeader',
};
</script>

<template>
  <header class="container d-flex justify-content-between">
    <div>
      <h2 class="text-center">header</h2>
    </div>
    <div>
      <ul class="list-unstyled d-flex gap-2">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'project' }">About</router-link></li>
        <li>
          <router-link :to="{ name: 'projects' }">List projects</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped></style>
