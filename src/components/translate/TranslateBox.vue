<template>
    <div class="card-wrapper">
        <div class="card-title">
            페이지 번역하기
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
    },
}
</script>

<style>
#google_translate_element {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
}
.goog-te-gadget-simple {
    border-radius: 15px;
    padding: 3px 5px;
}
</style>