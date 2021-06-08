<template>
    <div v-if="ad">
        <Card>
            <template #title>
                <h1>{{ad.title}}</h1>
            </template>    
            <template #subtitle>
                <p>Uploaded by: {{ad.user_uploaded.username}}</p>
            </template>    
            <template #content>
                <h3>{{ad.description}}</h3>
            </template> 
            <template #footer>
                <router-link to="/ads">Back to Ads</router-link>
            </template> 
        </Card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data() {
        return {
            ad: null
        }
    },
    methods: {
        loadAd(id) {
            axios.get('/ads/'+id)
            .then(res => {
                this.ad = res.data;
            }).catch(err => console.log(err));
        }
    },
    mounted() {
        this.loadAd(this.id);
    }
}
</script>

<style>

</style>