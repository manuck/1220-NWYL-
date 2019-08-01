<template>
    <div class="admin-aside">
        <div class="admin-aside-flex">
            <div class="admin-aside-title">
                ADMIN PAGE
            </div>
            <div class="admin-aside-menu">
                <div id="admin-dashboard" @click="showContent" class="admin-aside-li">
                    대시 보드
                </div>
                <div id="admin-pageinfo" @click="showContent" class="admin-aside-li">
                    페이지 정보
                </div>
                <div id="admin-userinfo" @click="showContent" class="admin-aside-li">
                    회원 정보
                </div>
                <div id="admin-menuinfo" @click="showContent" class="admin-aside-li">
                    메뉴 정보
                </div>
                <div id="admin-pagelog" @click="showContent" class="admin-aside-li">
                    페이지 기록
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdminAside",
    methods: {
        showContent(e) {
            this.$emit('state', e.target.id)
        }
    }
}
</script>

<style lang="scss">
@import './AdminAside.scss';
</style>
