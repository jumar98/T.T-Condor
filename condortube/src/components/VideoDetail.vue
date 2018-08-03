<template>
    <!--Show video if exist-->
    <div class="row container mt-5" v-if="video">
        <div class="col-sm-8 col-sm-push-2">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe v-bind:src="url" class="embed-responsive-item" frameborder="0"></iframe>
            </div>
            <!--Show video details-->
            <info-box :video="video" :statistics="statistics"></info-box>
        </div>
    </div>
</template>

<script>
    //Import module and component necessary
    import { statistics } from '../search/search';
    import InfoBox from './InfoBox';
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
                key:'AIzaSyASSJNgzHQQDmhotVtZZwUbDGibRw7OQCc',
                id: this.videoId,
            }, response => this.handleViewsResult(response));
        },
        //Set up data
        data(){
            return{
                videoId: null,
                video: null,
                url: null,
                statistics: null
            }
        },
        //Pass result of statistics to statistics data
        methods:{
            handleViewsResult(result){
                this.statistics = result;
            }
        },
        //Set InfoBox component
        components:{
            InfoBox
        }
    }
</script>