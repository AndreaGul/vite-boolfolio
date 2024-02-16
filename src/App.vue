<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { RouterView } from 'vue-router';
export default {
  name: 'Template',

  components: {
    AppHeader,

    AppFooter,
    RouterView,
  },
};
</script>

<template>
  <AppHeader />

  <router-view> </router-view>
  <AppFooter />
</template>

<style scoped></style>
