<template>
  <div class="card-wrapper">
    <div class="card-title">
      지도
    </div>
    <div class="card-bar"/>
    <div class="card-content-wrapper">
        <div id="map"></div>
    </div>
    </div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'

export default {
  name: 'Map',
  data() {
    return {
      }
    },
  methods: function () {
    // GoogleMapsLoader.KEY = 'AIzaSyCVaIeCU6pPEngLSTnS5FvpklT3pJAL5ag';
      var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 35.194, lng: 128.102},
          zoom: 14
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Here');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
  
  }
  }
</script>
<style>
#map {
  height: 100%;
}
</style>