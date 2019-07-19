<template>
  <div class="card-wrapper" style="width: 400px;">
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
// 구글map api import
import GoogleMapsLoader from 'google-maps'

export default {
  name: 'Map',
  data() {
    return {
      }
    },
  mounted: function () {
      initMap();
      var map, infoWindow;
      // 초기 map 설정(위도, 경도, 줌상태)
      function initMap() {
        console.log('mapinit')
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 35.194, lng: 128.102},
          zoom: 14
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        // 위치 허용 확인하면 실행
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
      // 현재위치를 받을 수 없을 때 발생하는 함수
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
  height: 400px;
  width: 400px;
}
</style>