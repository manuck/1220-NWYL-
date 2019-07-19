<template>
    <input v-on:input="(imagelink) => this.$emit('imguring', imagelink)" name="img" type="file" class="filecontainer"/>
</template>

<script>
import store from '@/store.js'
// 초기 imagelink = random 이미지
var imagelink = "https://source.unsplash.com/random"

export default {
    name: 'Imgur',
    props: ['imagelink']
    ,
    components: {
    },
    created() {
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
                document.getElementById("formButton").disabled = true; // 업로드가 시작할때 제출 버튼 비활성화
                document.getElementById("formButton").style.borderColor = "rgba(0,0,0,0.1)"; // 버튼 design 변경
                document.getElementById("formButton").style.color = "rgba(0,0,0,0.1)";
                var file = this.files[0];
                uploadImageByImgur(file, function(result){
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
                        // 업로드가 완료되면 vuex state에 이미지 경로 저장
                        store.state.imgSrc = imagelink;
                        // 제출 버튼 활성화 및 디자인 복구
                        document.getElementById("formButton").disabled = false;
                        document.getElementById("formButton").style.borderColor = "rgba(0,0,0,1)";
                        document.getElementById("formButton").style.color = "rgba(0,0,0,1)";
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
    height: 36.8px;  
}
.filecontainer::-webkit-file-upload-button {
    visibility: hidden;
    display: inline-block;
    height: 100%;
    width: 150px;
}
.filecontainer::before {
    content: '이미지 업로드';
    display: inline-block;
    border: 1px solid black;
    border-radius: 50px;
    color: black;
    padding: 7px 30px;
    background-color: rgba(0,0,0,0);
    transition: background-color 1s, border 0.3s;
}
.filecontainer:hover::before {
    background-color: rgba(0,0,0,0.2);
    border: 1px solid rgba(0,0,0,0.1);
}
</style>