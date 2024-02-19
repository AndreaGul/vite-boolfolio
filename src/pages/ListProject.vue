<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import ProjectSearch from '../components/ProjectSearch.vue';
import store from '../store';
export default {
  name: 'ListProject',
  data() {
    return {
      error: [],
      projects: {},
      store,
    };
  },
  components: { ProjectCard, ProjectSearch },
  methods: {
    getProjects() {
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.projects, {
          params: {
            key: this.store.pages.searchKey,
          },
        })
        .then((response) => {
          console.log('risposta prima');
          console.log(response);
          console.log('risposta dopo');
          this.projects = response.data;
          console.log(this.projects.results.data);
        })
        .catch((error) => {
          console.log(error);
          this.projects.results.data = [];
          this.error = error.response.data.message;
          console.log(this.projects.results.data);
          console.log(this.error);
        });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <main class="container">
    <ProjectSearch @search-project="getProjects" />
    <ul class="row list-unstyled">
      <li class="col-sm-4 g-3" v-for="project in projects.results">
        <ProjectCard :project="project" />
      </li>
    </ul>
    <h2 class="text-center">main</h2>
  </main>
</template>
