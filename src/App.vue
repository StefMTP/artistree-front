<template>
  <the-navbar></the-navbar>
  <div class="p-my-5 p-mx-2">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/nav/TheNavbar.vue';

export default {
  components: { 
    TheNavbar
  },
}
</script>

<style>
  body {
    background-image: url('./assets/img/swirl_pattern.png');
  }
</style>