<template>
    <div class="card-wrapper">
        <div class="card-title">
            포스트
        </div>
        <div class="card-bar"/>
        <div class="card-content-wrapper">
            <router-link to="post/new" class="button" style="color:black !important;">포스트 생성하기</router-link>
            <router-link to="post" class="button" style="color:black !important;"><u>See our posts</u></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostViewBox",
}
</script>

<style>

</style>
