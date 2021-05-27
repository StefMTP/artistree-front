<template>
  <the-navbar></the-navbar>
  <router-view/>
</template>

<script>
import TheNavbar from './components/nav/TheNavbar.vue';

export default {
  components: { 
    TheNavbar
  },
}
</script>