<template>
    <div class="container">
      <router-view></router-view>
      <climb-map></climb-map>
    </div>
</template>

<script>
  import Home from './components/home/Home.vue';
  import Map from './components/map/Map.vue'

  export default {
    components: {
      appHome: Home,
      climbMap: Map
    }
  }
</script>

<style>

</style>
