
<template>  
<!-- 
    This template show child components, 
    like, VideoItem, VideoList and SeachBar
--> 
    <div>
        <div class="mt-5">
            <search-bar></search-bar>
            <!--Show videos if loading is false -->
            <div v-if="!loading">
                <br><br>
                <!--
                    Pass videos to prop videos on 
                    video-list component
                -->
                <video-list :videos="videos"></video-list>
            </div>
            <!--Show loading if loading data is false -->
            <div v-if="loading">Loading...</div>
        </div>
    </div>
</template>

<script>
    //Import child components
    import SearchBar from './SearchBar';
    import VideoList from './VideoList';
    import { search } from '../search/search';
    
    export default{
    
        created() {
        //Here, first get results about search default
            search({
               term: 'Php'
            }, response => this.handleSearchResults(response));
        
        //Listen event search-started and set loading to true
        window.eventBus.$on("search-started", () =>{
           this.loading = true; 
        });

        //Listen event search-results, set loading to false and
        //pass videos result to videos data component
        window.eventBus.$on("search-results", videos =>{
            this.loading = false;
            this.videos = videos;
        });
        },
        //Set default values to datas
        data(){
            return{
                videos: null,
                loading: true
            };
        },
        //Set methods to handle datas
        methods:{
            /*
                This method, set loading data to
                false and pass video results to
                video data
            */
            handleSearchResults(result){
                this.loading = false;
                this.videos = result;
            }
        },
        //Set components imported
        components: {
            VideoList,
            SearchBar
        }
    }
</script>



