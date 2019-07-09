<template>
  <div>
    <Navbar />
    <ImgBanner imgSrc="https://source.unsplash.com/random/1600x900">
      <div style="line-height:1.2em;font-size:1.2em;" slot="text">Portfolio New</div>
    </ImgBanner>
    <v-container>

      <!-- Portfolio New -->
      <v-layout>
        <v-flex xs12>
          <!-- <Imgur></Imgur> -->
          <Form>
          </Form>
          <input name="img" type="file"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script type = "text/javascript">
import ImgBanner from '../components/ImgBanner'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
// import Imgur from '../components/Imgur'

export default {
	name: 'PortfolioNewPage',
	components: {
		ImgBanner,
    Form,
    Navbar,
    // Imgur,
	},
}

function uploadImageByImgur(file, callback) {            
    var form = new FormData();
    form.append('image', file);
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
        data: form,               
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
      }
    });
  });
});

</script>
