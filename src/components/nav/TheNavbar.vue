<template>
    <nav>
        <p><router-link to="/">Home</router-link></p>
        <ul>
            <div v-if="isLoggedIn && userDetails">
                <li><router-link to="about">About</router-link></li>
                <li><router-link to="dashboard">Dashboard</router-link></li>
                <li><button @click="logout">Logout</button></li>
                <p>Welcome {{userDetails.username}}.</p>
            </div>
            <div v-else>
                <li><router-link to="login">Login</router-link></li>
                <li><router-link to="register">Register</router-link></li>
            </div>
        </ul>
    </nav>
</template>

<script>
export default {
    methods: {
        logout() {
            // dispatch the logout action and then redirect us to the login page
            this.$store.dispatch('logout')
            .then(() => this.$router.replace('/login'));
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        },
        userDetails() {
            return this.$store.getters.getUserDetails;
        }
    }
}
</script>