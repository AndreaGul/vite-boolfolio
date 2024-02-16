<script>
export default {
  name: 'AppMainProjectCard',
  props: {
    project: Object,
  },
  computed: {
    projectContent() {
      return this.project.description?.substring(0, 100) + '...';
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        {{ projectContent }}
      </p>

      <router-link
        :to="{ name: 'single-project', params: { slug: project.slug } }"
      >
        Dettagli
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
