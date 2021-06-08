<template>
  <Card>
    <template #title>
        Register your Artistree account.
    </template>
    <template #content>
        <form @submit.prevent="handleSubmit">
            <div class="p-fluid">
                <div class="p-field p-mt-4">
                    <span class="p-float-label">
                        <InputText id="email" name="email" type="email" v-model="submittedEmail" />
                        <label for="email">Email</label>
                    </span>
                </div>
                <div class="p-field p-mt-4">
                    <span class="p-float-label">
                        <InputText type="text" name="username" id="username" v-model="submittedUsername" />
                        <label for="username">Username</label>
                    </span>
                </div>
                <div class="p-field p-mt-4">
                    <span class="p-float-label">
                        <InputText type="text" name="first_name" id="first_name" v-model="submittedFirstName" />
                        <label for="username">First Name</label>
                    </span>
                </div>
                <div class="p-field p-mt-4">
                    <span class="p-float-label">
                        <InputText type="text" name="last_name" id="last_name" v-model="submittedLastName" />
                        <label for="username">Last Name</label>
                    </span>
                </div>
                <div class="p-field p-mt-4">
                    <span class="p-float-label">
                        <InputText type="password" name="password" id="password" v-model="submittedPassword" />
                        <label for="password">Password</label>
                    </span>
                </div>
                <div class="p-field p-mt-4">
                    <span class="p-float-label">
                        <InputText type="password" name="password_confirmation" id="password_confirmation" v-model="submittedPasswordConf" />
                        <label for="password">Confirm Password</label>
                    </span>
                </div>
                <div class="p-field p-mt-4">
                  <span class="p-float-label">
                    <DropDown id="role" name="role" v-model="submittedRole" :options="roles" />
                    <label for="role">User Role</label>
                  </span>
                </div>
                <div class="p-field p-mt-4">
                  <span class="p-float-label">
                    <DropDown id="gender" name="gender" v-model="submittedGender" :options="genders" />
                    <label for="gender">Gender</label>
                  </span>
                </div>
                <div class="p-field p-mt-4">
                    <span class="p-float-label">
                        <InputText type="tel" name="phone" id="phone" v-model="submittedPhone" />
                        <label for="password">Phone</label>
                    </span>
                </div>
                <div class="p-field p-mt-4">
                    <span class="p-float-label">
                        <InputText type="text" name="location" id="location" v-model="submittedLocation" />
                        <label for="password">Location</label>
                    </span>
                </div>
                <Button type="submit" label="Register"/>
            </div>
        </form>
    </template>
    <template #footer>
        Own an account? Login <router-link to="/register">here</router-link>
    </template>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      roles: [
        'artist',
        'contributor',
        'follower'
      ],
      genders: [
        'Male',
        'Female',
        'Other'
      ],
      submittedEmail: '',
      submittedUsername: '',
      submittedFirstName: '',
      submittedLastName: '',
      submittedPassword: '',
      submittedPasswordConf: '',
      submittedRole: '',
      submittedGender: '',
      submittedPhone: '',
      submittedLocation: ''
    }
  },
  methods: {
    async handleSubmit() {
      await this.$store.dispatch('register', {
        username: this.submittedUsername,
        email: this.submittedEmail,
        password: this.submittedPassword,
        password_confirmation: this.submittedPasswordConf,
        first_name: this.submittedFirstName,
        last_name: this.submittedLastName,
        role: this.submittedRole,
        gender: this.submittedGender,
        phone: this.submittedPhone,
        location: this.submittedLocation
      }).then(() => {
        this.$router.replace('/dashboard');
      });
    }
  }
}
</script>