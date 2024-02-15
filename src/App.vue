<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'Template',
  data() {
    return {
      baseUrl: 'http://127.0.0.1:8000/',
      apiUrls: {
        project: 'api/project',
      },
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  methods: {
    getProjects() {
      axios.get();
    },
  },
  created() {},
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style scoped></style>
