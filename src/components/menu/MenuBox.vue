<template>
    <div class="menu-box">
        <div class="menu-title">
            {{ menu.name }}
        </div>
        <div class="menu-image">
            <img :src="menu.image" style="width: 150px; height: 150px;">
        </div>
        <ul class="menu-tags">
            <li v-for="tag in menu.tags" :tag="tag" :key="tag.id" class="tag">
                {{ tag }}
            </li>
        </ul>
        <div class="menu-favorite">
            <img src="@/assets/images/favorites.png" class="favorite-icon"/>
            <img src="@/assets/images/favorites-1.png" class="favorite-icon"/>
        </div>
        <button class="button">
            리뷰 보기
        </button>
    </div>
</template>

<script>
export default {
    name: 'MenuBox',
    props: {
        menu: Object,
    }
}
</script>

<style lang="scss">
@import './MenuBox.scss';
</style>
