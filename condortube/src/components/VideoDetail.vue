<template>
    <!--Show video if exist-->
    <div class="row" v-if="video">
        <div class="col-sm-8 col-sm-push-2">
            <h2>{{video.snippet.title}}</h2>
            <small>{{video.snippet.channelTitle}}</small>
            <p>{{video.snippet.description}}</p>
        <div class="embed-responsive embed-responsive-16by9">
            <iframe v-bind:src="url" class="embed-responsive-item" frameborder="0"></iframe>
        </div>
        </div>
    </div>
</template>

<script>
    export default{
        //If id params is undifined, comeback to 
        //condortube-dashboard  
        created() {
            if(this.$route.params.id === undefined){
                this.$router.push({name: 'condortube-dashboard' });
            }
            /*
                Pass params to data component (id and video),
                set the url and we pass to data url
            */
            this.videoId = this.$route.params.id;
            this.url = `https://youtube.com/embed/${this.videoId}`;
            this.video = this.$route.params.video;
        },
        data(){
            return{
                videoId: null,
                video: null,
                url: null
            }
        }
    }
</script>