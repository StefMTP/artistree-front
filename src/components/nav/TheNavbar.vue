<template>
    <MenuBar :model="menuItems">
        <template #start>
            <router-link to="/"><img src="@/assets/img/logo.png" alt="logo" height="100" class="p-mr-2"></router-link>
        </template>
        <template v-if="isLoggedIn && userDetails" #end>
            <Button @click="logout">Logout</Button>
        </template>
    </MenuBar>
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
        },
        menuItems() {
            return this.isLoggedIn 
            ? [
                {
                    label: 'Dashboard',
                    icon: 'pi pi-user',
                    to: '/dashboard'
                },
                {
                    label: 'Ads',
                    icon: 'pi pi-briefcase',
                    to: '/ads'
                },
            ] 
            : [
                {
                    label: 'Login',
                    icon: 'pi pi-sign-in',
                    to: '/login'
                },
                {
                    label: 'Register',
                    icon: 'pi pi-users',
                    to: '/register'
                }
            ];
        }
    }
}
</script>