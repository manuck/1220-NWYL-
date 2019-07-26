<template>
    <div id="menu-modal" class="modal-wrapper">
        <a href="#" class="modal-back"/>
        <div class="modal-box">
            <div class="modal-header">
                <!-- 밑의 메뉴 이름에 변수 넣어주세요 -->
                <span class="modal-title">메뉴 이름</span>
                <a href="#" class="modal-close">&times;</a>
            </div>
            <div class="modal-content">
                <div class="modal-image">
                    <!-- 밑의 src에 주소 넣어주세요 -->
                    <img src="" alt="modal_detail_image">
                </div>
                <div class="modal-info">
                    <!-- 이곳에 메뉴 정보를 넣어주세요 -->
                    메뉴 정보
                </div>
            </div>
            <div class="modal-comment">
                댓글창
                <!-- 이곳에 댓글창 구현해 주세요 -->
                <h1>hi</h1>
                <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
            </div>
        </div>
    </div>
</template>

<script id="dsq-count-scr" src="//hongyong3.disqus.com/count.js" async></script>
<script>
export default {
    name: 'MenuModal',
    props: {
        name: {type: String},
    },
    methods: {
      getComment: function() {
        var d = document,
            s = d.createElement('script');
        s.src = 'https://hongyong3.disqus.com/embed.js';
        s.setAttribute('data-timestamp', + new Date());
        (d.head || d.body).appendChild(s);
      }
    }
}
</script>

<style lang="scss">
@import './MenuModal.scss'
</style>
