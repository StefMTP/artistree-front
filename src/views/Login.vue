<template>
  <div>
    <h1>Login:</h1>
    <form @submit.prevent="handleSubmit">
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
            submittedPassword: ''
        }
    },
    methods: {
        async handleSubmit() {
            await this.$store.dispatch('login', {
                email: this.submittedEmail,
                password: this.submittedPassword
            }).then(() => {
                this.$router.replace('/dashboard');
            }).catch(err => {
                console.log(err);
            });
        }
    }
}
</script>

<style>

</style>