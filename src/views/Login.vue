<template>
    <Card>
        <template #title>
            Login
        </template>
        <template #content>
            <form @submit.prevent="handleSubmit">
                <Message severity="warn" v-if="errorMessage" @close="errorMessage = null">{{errorMessage}}</Message>
                <div class="p-fluid">
                    <div class="p-field p-mt-4">
                        <span class="p-float-label">
                            <InputText id="email" name="email" type="email" v-model="submittedEmail" />
                            <label for="email">Email</label>
                        </span>
                    </div>
                    <div class="p-field p-mt-4">
                        <span class="p-float-label">
                            <InputText type="password" name="password" id="password" v-model="submittedPassword" />
                            <label for="password">Password</label>
                        </span>
                    </div>
                    <Button type="submit" label="Login"/>
                </div>
            </form>
        </template>
        <template #footer>
            No account yet? Register <router-link to="/register">here</router-link>
        </template>
    </Card>
</template>

<script>
export default {
    data() {
        return {
            submittedEmail: '',
            submittedPassword: '',
            errorMessage: null
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