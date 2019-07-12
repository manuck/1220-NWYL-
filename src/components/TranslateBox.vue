<template>
    <div class="card-wrapper">
        <div class="card-title">
            번역하기
        </div>
        <div class="card-bar"/>
        <div class="card-content-wrapper">
            <div id="google_translate_element"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TranslateBox',
    methods: {

    }
}
</script>

<style>
    #google_translate_element {
        width: 100%;
        height: 50px;
    }
</style>