<template>
    <div>
        <!-- 
            Prevent reload the page, with v-on directive
            and event modifiers .prevent
         -->
        <form v-on:submit.prevent="handleFormSubmit" action="" method="">            
                <div class="input-group pull-right">
                <!--
                    Bind input box with searchVideo data of the 
                    SearchBar component
                -->
                <input v-model="searchVideo" type="text" class="form-control" placeholder="Search" id="txtSearch"/>
                <div class="input-group-btn pull-right">
                        <button class="btn btn-primary" type="submit">
                        <span class="">Search</span>
                        </button>
                </div>
                </div>
        </form>
    </div>
</template>

<script>
    //Import seacrh module
    import { search } from '../search/search';  
    export default{
        data(){
            return{
               searchVideo: ""
            }
        },
        methods: {
            //This method search videos and emit results
            handleFormSubmit(){
            //Emit to start search 
            window.eventBus.$emit('search-started');
               search({
               key: 'AIzaSyASSJNgzHQQDmhotVtZZwUbDGibRw7OQCc',
               term: this.searchVideo, 
               item: 10
            }, data => {
            //Emit video result, whatever component listen this
            //event 
            window.eventBus.$emit('search-results', data);          
            this.searchVideo = "";
            });
            }
        }

    }
</script>