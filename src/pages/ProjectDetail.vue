<script>
import axios from 'axios';
export default {
  name: 'ProjectDetail',
  created() {
    console.log(this.$route);
  },
  data() {
    return {
      project: {},
      baseUrl: 'http://127.0.0.1:8000/',
      apiUrls: {
        projects: 'api/project',
      },
    };
  },
  methods: {
    getProjects() {
      axios
        .get(
          this.baseUrl + this.apiUrls.projects + '/' + this.$route.params.slug
        )
        .then((response) => {
          this.project = response.data.result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>
<template>
  <div class="container my-4">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <li>
      <router-link :to="{ name: 'projects' }">torna ai progetti</router-link>
    </li>
  </div>
</template>
