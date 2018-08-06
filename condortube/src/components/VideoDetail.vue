<template>
    <!--Show video if exist-->
    <div class="row container mt-5" v-if="video">
        <div class="col-sm-12 mb-3">
           <bar></bar> 
        </div>
        <div class="col-sm-8 col-sm-push-2">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe v-bind:src="url" class="embed-responsive-item" frameborder="0"></iframe>
            </div>
            <!--Show video details-->
            <info-box :video="video" :statistics="statistics"></info-box>
        </div>
        <div class="col-sm-4">
            <recommended-video :videos="recommended"></recommended-video>
        </div>
    </div>
</template>

<script>
    //Import module and component necessary
    import { statistics, recommended } from '../search/search';
    import InfoBox from './InfoBox';
    import RecommendedVideo from './RecommendedVideo';
    import Bar from './Bar';
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

            statistics({
                id: this.videoId,
            }, response => this.handleViewsResult(response));

            recommended({
                id: this.videoId
            }, response => this.handleRelatedVideoResult(response));
        },
        mounted() {
            if(this.$route.params.id === undefined){
                this.$router.push({name: 'condortube-dashboard' });
            }
        },
        //Update data when choose a recommended video
        updated() {
            this.videoId = this.$route.params.id;
            this.url = `https://youtube.com/embed/${this.videoId}`;
            this.video = this.$route.params.video;

            statistics({
                id: this.videoId,
            }, response => this.handleViewsResult(response));

            recommended({
                id: this.videoId
            }, response => this.handleRelatedVideoResult(response));
        },
        //Set up data
        data(){
            return{
                videoId: null,
                video: null,
                url: null,
                statistics: null,
                recommended: null
            }
        },
        //Pass result of statistics to statistics data
        methods:{
            handleViewsResult(result){
                this.statistics = result;
            },
            handleRelatedVideoResult(result){
                this.recommended = result;
            }
        },
        //Set child components
        components:{
            InfoBox, RecommendedVideo, Bar
        }
    }
</script>