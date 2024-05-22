<template>
  <div class="container">
    <h2>Изменить пользователя</h2>
    <UserForm :user="user" @form-submitted="formSubmitted" />
  </div>
</template>

<script>
import UserForm from '../components/UserForm.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserForm
  },
  props: ['id'],
  computed: {
    ...mapGetters(['getUserById']),
    user() {
      return this.getUserById(this.id) || {};
    }
  },
  methods: {
    formSubmitted() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
