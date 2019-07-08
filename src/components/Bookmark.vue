<template>
    <div>
        <img src="../assets/bookmark.png" class="bookmark" @click="addBookmark()">
    </div>
</template>

<script>
export default {
    name: 'Bookmark',
    methods: {
        addBookmark() {
            console.log('gd')
            alert('Ctrl + D 를 눌러 북마크에 추가할 수 있습니다.')
        }
    }
}
</script>

<style>
    .bookmark {
        position: fixed;
        top: 80px;
        right: 30px;
        width: 50px;
        height: 50px;
        z-index: 5;
    }
</style>