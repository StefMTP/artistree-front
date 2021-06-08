<template>
    <div v-if="post">
        <Card>
            <template #title>
                <h1>{{post.title}}</h1>
            </template>
            <template #subtitle>
                {{post.type}}
            </template>
            <template #content>
                <h3>{{post.body}}</h3>
            </template>
            <template #footer>
                <p>-{{post.user.username}}</p>
            </template>
        </Card>
        <div class="p-d-flex">
            <div class="comment p-m-2" v-for="comment in post.comments" :key="comment.id">
                <Card>
                    <template #content>
                        <strong>{{comment.user.username}}</strong> says... 
                        <p>"{{comment.body}}"</p>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data() {
        return {
            post: null
        }
    },
    methods: {
        loadPost(id) {
            axios.get('/posts/'+id)
            .then(res => {
                this.post = res.data;
            });
        }
    },
    mounted() {
        this.loadPost(this.id);
    }
}
</script>

<style>

</style>