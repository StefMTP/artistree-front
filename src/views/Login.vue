<template>
  <div>
    <h1>Login:</h1>
    <form @submit.prevent="handleSubmit">
        <p v-if="errorMessage">{{errorMessage}}</p>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="submittedEmail">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" v-model="submittedPassword">
        </div>
        <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            submittedEmail: '',
            submittedPassword: '',
            errorMessage: ''
        }
    },
    methods: {
        async handleSubmit() {
            await this.$store.dispatch('login', {
                email: this.submittedEmail,
                password: this.submittedPassword
            }).then(() => {
                this.$router.replace('/dashboard');
            }).catch(() => {
                this.errorMessage = 'Email and password combination is wrong.';
            });
        }
    }
}
</script>

<style>

</style>