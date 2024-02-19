<script>
import axios from 'axios';
import store from '../store';
export default {
  name: 'ProjectSearch',
  data() {
    return {
      store,
    };
  },
  emits: ['searchProject'],
  methods: {
    search() {
      console.log('sto cercando qualcosa');
      this.$emit('searchProject');
    },
  },
};
</script>
<template>
  <section id="project-search">
    <form action="" @submit.prevent="search">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="search-key"
          placeholder="Nome progetto"
          v-model="store.pages.searchKey"
        />
        <label for="search-key" class="form-label">Nome progetto</label>
      </div>
      <button class="btn btn-primary">Cerca</button>
    </form>
  </section>
</template>
