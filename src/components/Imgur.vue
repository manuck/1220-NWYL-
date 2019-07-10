<template>
  <div>
    <img id=image src="http://dy.gnch.or.kr/img/no-image.jpg">
    <br>
    <input id=file type=file>
  </div>
</template>

<script>
export default {
    name: 'Imgur',
    components: {
    },
    data() {
        return {
            drawer: false
                }
            }
    };

var file = document.getElementById('file');
var image = document.getElementById('image');
file.onchange = function (event) {
    var target = event.currentTarget;
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('POST', 'https://api.imgur.com/3/image/', true);
    xmlHttpRequest.setRequestHeader("Authorization", "Client-ID d7c48c6a71cd7d6");
    xmlHttpRequest.onreadystatechange = function () {
      if (xmlHttpRequest.readyState == 4) {
        if (xmlHttpRequest.status == 200) {
          var result = JSON.parse(xmlHttpRequest.responseText);
          image.src = result.data.link;
          console.log(result);
        }
        else {
        	alert("업로드 실패");
          image.src = "http://dy.gnch.or.kr/img/no-image.jpg";
        }
      }
    };
    xmlHttpRequest.send(target.files[0]);
    image.src = "https://nrm.dfg.ca.gov/images/image-loader.gif";
};

</script>

<style>

</style>