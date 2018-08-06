<template>
    <!--Show video results on video-item component-->
    <div class="">
        <!--
            Iterate video array object and pass each
            video to prop video of video-item component
        -->
        <video-item v-for="video in videos" 
            :video = "video"
            :key="video.id.videoId">
        </video-item>
    </div>
</template>

<script>
    //Import VideoItem child component
    import VideoItem from './VideoItem';
    export default{
        //Define prop videos
        props: ['videos'],
        //Set VideoItem component
        components:{
            VideoItem
        }
    }
</script>
