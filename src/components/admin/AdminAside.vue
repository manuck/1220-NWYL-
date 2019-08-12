<template>
    <div class="admin-aside">
        <div class="admin-aside-flex">
            <div class="admin-aside-title">
                ADMIN PAGE
            </div>
            <div class="admin-aside-profile">
                <div class="admin-aside-profile-image">
                    <!-- <img src="@/assets/images/aboutus/ldm_emoji.png" style="height: 100%; width: 100%;"/> -->
                </div>
                <div class="admin-aside-profile-info">
                    관리자이름
                </div>
            </div>
            <div class="admin-aside-menu">
                <a href="#admin-dashboard" class="admin-aside-li">
                    <span>💻</span>대시 보드
                </a>
                <a href="#admin-pageinfo" class="admin-aside-li">
                    <span>⚙️</span>페이지 정보
                </a>
                <a href="#admin-userinfo" class="admin-aside-li">
                    <span>🙍</span>회원 정보
                </a>
                <a href="#admin-menuinfo" class="admin-aside-li">
                    <span>🍛</span>메뉴 정보
                </a>
                <a href="#admin-pagelog" class="admin-aside-li">
                    <span>📰</span>페이지 기록
                </a>
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
