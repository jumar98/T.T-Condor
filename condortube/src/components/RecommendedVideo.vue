<template>
    <div id="recommended_board" class="container rounded">
        <p>Reccommended Videos</p>
        <!--
            Iterare on videos array and pass it to video prop, 
            this show recommended video
        -->
        <recommended-item v-for="video in videos"
            :video="video"
            :key="video.id.videoId"
        ></recommended-item>
    </div>
</template>

<script>
    import RecommendedItem from './RecommendedItem';
    export default{
        props: ['videos'],
        components:{
            RecommendedItem
        }
    }
</script>

<style>
    #recommended_board{
        background-color:#b0ecde;
    }
</style>
