<template>
  <div class="filecontainer">
    로컬 이미지
    <input name="img" type="file"/>
  </div>
</template>

<script>
import store from '../store.js'
var imagelink = "https://source.unsplash.com/random"

export default {
    name: 'Imgur',
    props: ['imagelink'],
    components: {
    },
    data() {
        return {
            imgSrc:''
            }
        },
    mounted() {
      console.log('마운트 되나?')
      console.log(imagelink)
      function uploadImageByImgur(file, callback) {            
        var imgform = new FormData();
        imgform.append('image', file);
        $.ajax({                   
          xhr: function(){
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function(evt){// 업로드상태이벤트리스너등록
                if (evt.lengthComputable) {               
                    console.log("업로드진행률:"+parseInt( (evt.loaded / evt.total * 100), 10)+"%");
                }
            }, false); 
            return xhr;
          },                     
          url: 'https://api.imgur.com/3/image',// 업로드요청주소              
          headers: { Authorization: 'Client-ID d7c48c6a71cd7d6' },               
          type: 'POST',               
          data: imgform,               
          cache: false,                   
          contentType: false,                    
          processData: false                   
          }).always(callback); 
      }
      /*파일 변경 이벤트가 감지되면 자동으로 이미지 업로드*/
      $(document).ready(function(){ // document가 모두 로드되면 실행됨
        $("input[name=img]").change(function(){// 사용자가 파일을 변경했을때 발생됨
          var file = this.files[0];
          uploadImageByImgur(file, function(result){
            console.log(result);
            console.log('업로드결과:'+result.status); 
            if(result.status!=200){
              result = $.parseJSON(result.responseText);
            }
            if(result.data.error){
              console.log('지원하지않는 파일형식..');
            }
            else{
              console.log('업로드된 파일경로:'+result.data.link);
              imagelink = result.data.link
              console.log(imagelink)
              console.log(this)
              store.state.imgSrc = imagelink;
              let bgimg = document.querySelector('.main-bg')
              bgimg.style.backgroundImage = `url(${imagelink})`;
            }
          });
        });
        });
    },
    methods: {
    }
    };
    

</script>

<style>
  .filecontainer {
    overflow: hidden;
    position: relative;
    text-align: center;
  }
  .filecontainer [type=file] {
    display: block;
    height: 100%;
    width: 100%;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>