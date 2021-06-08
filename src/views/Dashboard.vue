<template>
  <Card v-if="!!userDetails">
    <template #title>
      {{userDetails.username}}
    </template>
    <template #subtitle>
      {{fullName}}
    </template>
    <template #content>
      <div class="p-grid">
        <div class="p-col-3">
          <h3>My role</h3>
          <p>{{userDetails.role}}</p>
        </div>
        <div class="p-col-3">
          <h3>Gender</h3>
          <p>{{userDetails.gender}}</p>
        </div>
        <div class="p-col-3">
          <h3>My phone number</h3>
          <p>{{userDetails.phone}}</p>
        </div>
        <div class="p-col-3">
          <h3>My location</h3>
          <p>{{userDetails.location}}</p>
        </div>
      </div>
    </template>
  </Card>
</template>

<script>

export default {
  name: 'Dashboard',
  computed: {
    userDetails() {
      return this.$store.getters.getUserDetails;
    },
    fullName() {
        return this.userDetails.first_name + ' ' + this.userDetails.last_name;
    }
  }
}

</script>
