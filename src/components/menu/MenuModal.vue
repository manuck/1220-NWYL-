<template>
    <div id="menu-modal" class="modal-wrapper">
        <a href="#" class="modal-back"/>
        <div class="modal-box">
            <div class="modal-header">
                <span class="modal-title">메뉴 이름</span>
                <a href="#" class="modal-close">&times;</a>
            </div>
            <div class="modal-content">
                <div class="modal-image">
                    <img src="" alt="modal_detail_image">
                </div>
                <div class="modal-info">
                    content
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuModal',
    props: {
        name: {type: String},
    }
}
</script>

<style lang="scss">
@import './MenuModal.scss'
</style>


