<template>
  <div class="container">
    <h1>Пользователи
      <button @click="navigateToAddUser" class="btn btn-primary">Добавить</button>
    </h1>
    
    <UserSearch @search-users="searchUsers" />
    <UserList :users="filteredUsers" @edit-user="editUser" />
  </div>
</template>

<script>
import UserList from '../components/UserList.vue';
import UserSearch from '../components/UserSearch.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserList,
    UserSearch
  },
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    ...mapGetters(['getUsers']),
    filteredUsers() {
      if (this.searchQuery) {
        return this.getUsers.filter(user =>
          user.firstName.toLowerCase().includes(this.searchQuery.toLowerCase().trim())
        );
      }
      return this.getUsers;
    }
  },
  methods: {
    navigateToAddUser() {
      this.$router.push({ name: 'AddUser' });
    },
    editUser(user) {
      this.$router.push({ name: 'EditUser', params: { id: user.id } });
    },
    searchUsers(query) {
      this.searchQuery = query;
    }
  }
};
</script>
