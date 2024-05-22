<template>
  <div class="container">
    <h2>Добавить пользователя</h2>
    <UserForm @form-submitted="formSubmitted" />
  </div>
</template>

<script>
import UserForm from '../components/UserForm.vue';

export default {
  components: {
    UserForm
  },
  methods: {
    formSubmitted() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
