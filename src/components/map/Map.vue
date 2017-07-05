<template>
  <div id="map">
  </div>
</template>


<script>
  import keys from './../../../keys.js';
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';

  let map = null;
  let geojsonLayer = null;

  export default {
    watch: {
      getMapMarkers(markers) {
        geojsonLayer.clearLayers()
        geojsonLayer.addData(markers)
      }
    },
    computed: {
      ...mapGetters([
        'getMapMarkers'
      ])
    },
    methods: {
      ...mapActions([
        'getMarkers'
      ])
    },
    mounted() {
      this.getMarkers();
      map = L.map('map', {
        center: [40, -105.38],
        zoomControl: false,
        zoom: 13
      });

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        id: keys.id,
        accessToken: keys.token
      }).addTo(map)

      geojsonLayer = L.geoJson(this.markers, {
        // onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng,
          //   {
          //   icon: areaIcon
          // }
          )
        }
      }).addTo(map)

      // scope.$watch('data', function (newVal, oldVal) {
      //   if (newVal !== oldVal) {
      //     geojsonLayer.clearLayers()
      //     geojsonLayer.addData(scope.data)
      //   }
      // }, true)

    },
    data() {
      return {
        markers: this.getMapMarkers
      }
    }
  }
</script>

<style scoped>

  #map {
    height: 500px;
  }
</style>
