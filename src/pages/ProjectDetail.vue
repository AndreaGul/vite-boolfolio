<script>
export default {
  name: 'ProjectDetail',
  created() {
    console.log(this.$route);
  },
};
</script>
<template>
  <div class="container my-4">
    <h2>dettagli progetto</h2>
    <li><router-link :to="{ name: 'home' }">torna alla home</router-link></li>
  </div>
</template>
