<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'ListProject',
  data() {
    return {
      projects: [],
      baseUrl: 'http://127.0.0.1:8000/',
      apiUrls: {
        projects: 'api/project',
      },
    };
  },
  components: { ProjectCard },
  methods: {
    getProjects() {
      axios
        .get(this.baseUrl + this.apiUrls.projects)
        .then((response) => {
          console.log(response);
          this.projects = response.data.data;
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
  <main class="container">
    <ul class="row list-unstyled">
      <li class="col-sm-4 g-3" v-for="project in projects">
        <ProjectCard :project="project" />
      </li>
    </ul>
    <h2 class="text-center">main</h2>
  </main>
</template>
