<template>
  <div class="mb-4" style="display: inline-block;">
    <input type="text" v-model="searchQuery" @input="searchUsers" placeholder="Поиск по имени" class="form-control">
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    searchUsers() {
      this.$emit('search-users', this.searchQuery);
    }
  }
};
</script>