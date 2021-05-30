<template>
  <h1>Register:</h1>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="submittedEmail">
        </div>
        <div>
            <label for="username">Username</label>
            <input type="text" name="username" id="username" v-model="submittedUsername">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" v-model="submittedPassword">
        </div>
        <button type="submit">Register</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      submittedEmail: '',
      submittedUsername: '',
      submittedPassword: '',
    }
  },
  methods: {
    async handleSubmit() {
      await this.$store.dispatch('register', {
        username: this.submittedUsername,
        email: this.submittedEmail,
        password: this.submittedPassword
      }).then(() => {
        this.$router.replace('/dashboard');
      });
    }
  }
}
</script>