<template>
    <div class="container">
      <app-header></app-header>
      <router-view></router-view>
      <climb-map></climb-map>
    </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Map from './components/Map.vue'

  export default {
    components: {
      appHeader: Header,
      climbMap: Map
    }

  }
</script>

<style>

</style>
