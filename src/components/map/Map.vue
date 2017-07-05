<template>
  <div id="map">
  </div>
</template>


<script>
  import keys from './../../../keys.js'

  export default {
    mounted() {
      var map = L.map('map', {
        center: [40, -105.38],
        zoomControl: false,
        zoom: 13
      });

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        id: keys.id,
        accessToken: keys.token
      }).addTo(map)
    }
  }
</script>

<style scoped>

  #map {
    height: 500px;
  }
</style>
