<template>
  <div class="dashboard">
    <ul v-if="userDetails">
      <li>Username: {{userDetails.username}}</li>
      <li>Email: {{userDetails.email}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  computed: {
    userDetails() {
      return this.$store.getters.getUserDetails;
    }
  }
}

</script>
