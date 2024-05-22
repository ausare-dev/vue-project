<template>
  <div class="card px-3 py-3">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="firstName" class="form-label">Имя</label>
        <input type="text" v-model="localUser.firstName" required class="form-control" placeholder="Иван"/>
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Фамилия</label>
        <input type="text" v-model="localUser.lastName" required class="form-control" placeholder="Иванов"/>
      </div>
      <div>
        <label for="dateOfBirth" class="form-label">Дата рождения</label>
        <input type="date" v-model="localUser.dateOfBirth" required class="form-control"/>
      </div>
      <button type="submit" class="btn btn-primary me-3 mt-4">{{ localUser.id ? 'Изменить' : 'Добавить' }} пользователя</button>
      <button type="button" @click="goBack" class="btn btn-secondary mt-4">Назад</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      localUser: { ...this.user }
    };
  },
  watch: {
    user(newUser) {
      this.localUser = { ...newUser };
    }
  },
  methods: {
    ...mapActions(['addUser', 'updateUser']),
    submitForm() {
      if (this.localUser.id) {
        this.updateUser(this.localUser);
      } else {
        this.addUser(this.localUser);
      }
      this.$emit('form-submitted');
    },
    goBack() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
