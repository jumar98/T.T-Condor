<template>
    <!--
        Show video data as title video, thumbnail image, 
        description and channel name
    -->
    <div class="mb-5 container row">
            <div class="col-md-4">
                <!--
                    Link to video-detail component,
                    we pass params id and video
                -->
                <router-link :to="{name:'video-detail', params:{id: video.id.videoId, video: video}}">
                    <img class="card-img-top" width="400" height="200" v-bind:src="videoImage" v-bind:title="videoTitle">
                </router-link>
            </div>
            <div class="col-md-8">
                <h5 class="">{{videoTitle}}</h5>
                <small><p>{{channelTitle}}</p></small>
                <p class="">{{videoDescription}}</p>
            </div>
    </div>
</template>

<script>
    export default{
        //Define prop video
        props:['video'],
        //Set methods on computed to return
        //video properties
        computed: {
            //Return title
            videoTitle(){
                return this.video.snippet.title;
            },
            //Return channel title
            channelTitle(){
                return this.video.snippet.channelTitle;
            },
            //Return video description
            videoDescription(){
                return this.video.snippet.description;
            },
            //Return video url for thumbnails medium size
            videoImage(){
                return this.video.snippet.thumbnails.medium.url;
            }

        }
    }
</script>
