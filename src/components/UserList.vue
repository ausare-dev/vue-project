<template>
  <div>
    <table class="table table-bordered">
      <thead class="table-primary">
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Дата рождения</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th>{{ user.id }}</th>
          <th>{{ user.firstName }}</th>
          <th>{{ user.lastName }}</th>
          <th>{{ formatDate(user.dateOfBirth) }}</th>
          <th class="actions-table">
            <button @click="editUser(user)" class="btn btn-primary">Изменить</button>
            <button @click="deleteUser(user.id)" class="btn btn-danger">Удалить</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
    
</template>

<script>
import { mapActions } from 'vuex';
import { formatDate } from '../utils/formatDate';

export default {
  props: ['users'],
  methods: {
    ...mapActions(['deleteUser']),
    editUser(user) {
      this.$emit('edit-user', user);
    },
     formatDate
  }
};
</script>
<style>
.actions-table {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>