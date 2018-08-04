<template>
    <div class="row mb-2">
        <div class="col-sm-6">
            <img class="card-img-top" width="120" height="100" v-bind:src="videoImage" v-bind:title="videoTitle">
        </div>
        <div class="col-sm-6">
            <p>{{videoTitle}}</p>
            <p style="color:grey">{{channelTitle}}</p>
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
            //Return video url for thumbnails medium size
            videoImage(){
                return this.video.snippet.thumbnails.default.url;
            }
        }
    }
</script>

