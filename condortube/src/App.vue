<template>
<!-- 
    Set router-view for show component of
    each route
-->
  <div>
    <div class="col-md-12 bd">
        <img src="./assets/CondorTube-logo.png" alt="">
    </div>
  <div id="app" class="container">
    <router-view/>
  </div>
  </div>
</template>


<script>
//Define name for component
export default {
  name: 'App'
}
</script>

<style>
    .bd{
        background-color: #99C2EC;
    }
</style>