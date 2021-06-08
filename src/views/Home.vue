<template>
  <Card style="height: 7.5rem; background: transparent;">
    <template #title>
      <h1 class="p-text-bold">ArtisTree - Home</h1>
    </template>
  </Card>
    <div v-for="post in posts" :key="post.id">
      <Card>
        <template #title>
          <h3>{{post.title}}</h3>
        </template>
        <template #subtitle>
          <p>Posted by {{post.user.username}} | {{post.type}}</p>
        </template>
        <template #content>
          <p>{{post.body}}</p>
        </template>
        <template #footer>
          <a :href="'/post/'+post.id">Go to Post</a>
        </template>
      </Card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    axios.get('/posts')
    .then(res => {
      this.posts = res.data;
    });
  }
}

</script>
