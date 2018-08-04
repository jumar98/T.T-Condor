<template>
    <div id="info_box" class="mt-2 container">
        <h2>{{videoTitle}}</h2>
        <p>{{channelTitle}}</p>
        <small>
            <p style="color:grey">
            {{new Intl.NumberFormat().format(statistics.viewCount)}} views
            {{new Intl.NumberFormat().format(statistics.likeCount)}} likes
            {{new Intl.NumberFormat().format(statistics.dislikeCount)}} dislikes
            </p>
        </small>
        <small style="color:grey">{{videoDescription}}</small>
    </div>
</template>

<script>
    export default{
        props:['video','statistics'],
        
        computed:{
            //Return title
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
            }
        }
    }
</script>

<style>
    #info_box{
        background-color: #b0ecde;
    }
</style>
