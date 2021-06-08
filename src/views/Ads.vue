<template>
    <Card style="height: 7.5rem; background: transparent">
        <template #title>
        <h1 class="p-text-bold">ArtisTree - Ads</h1>
        </template>
    </Card>
    <div v-for="ad in activeAds" :key="ad.id">
        <Card>
            <template #title>
                <h3>{{ad.title}}</h3>
            </template>    
            <template #subtitle>
                <p>Uploaded by: {{ad.user_uploaded.username}}</p>
            </template>    
            <template #content>
                <p>{{ad.description}}</p>
            </template> 
            <template #footer>
                <a :href="'/ad/'+ad.id">Go to Ad</a>   
            </template> 
        </Card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            ads: [],
        }
    },
    computed: {
        activeAds() {
            return this.ads.filter(ad => ad.status === 'active');
        }
    },
    mounted() {
        axios.get('/ads')
        .then(res => {
            this.ads = res.data;
        });
    }
}
</script>

<style>

</style>