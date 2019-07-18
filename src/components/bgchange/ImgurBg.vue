<template>
    <input v-on:input="(imagelink) => this.$emit('imguring', imagelink)" name="img" type="file"/>
</template>

<script>
import { firestore } from '@/services/FirebaseService'
import store from '@/store'

export default {
    name: 'Imgur',
    props: {
        imagelink: {type: String, default: "https://source.unsplash.com/random"},
    },
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
                        console.log('업로드된 파일경로:' + result.data.link);
                        this.imagelink = result.data.link
                        console.log('imagelink:',this.imagelink)
                        let bgimg = document.querySelector('.main-bg')
                        bgimg.style.backgroundImage = `url(${this.imagelink})`;
                        console.log('bgimgchanged',bgimg.style.backgroundImage)
                    }
                    store.state.imgToDB.imglink = result.data.link
                    store.state.imgToDB.user_email = store.state.user.email
                    firestore.collection('Imglink').add(store.state.imgToDB).then(() =>{
                        console.log('added Imglink')
                    })
                });
            });
        });
    },
};
</script>

<style>
.card-content-wrapper input[type="file"]{
    display: none;
}
</style>