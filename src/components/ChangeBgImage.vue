<template>
    <div class="card-wrapper">
        <div class="card-title">
            배경화면 변경하기
        </div>
        <div class="card-bar"/>
        <div class="card-content-wrapper">
            <button class="button">랜덤 이미지</button>
            <button class="button">로컬 이미지</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "ChangeBgImage",
    components: {

    }
}
</script>

<style>
    .card-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100px;
        width: 250px;
        min-width: 250px;
        border-radius: 7px;
        background: white;
        margin: 10px 40px 10px 0;
        padding: 10px;
        box-shadow: 0 0 10px 1px grey;
        font-family: 'Noto Sans KR', sans-serif;
    }
    .card-wrapper:last-of-type {
        margin: 10px 0;
    }
    .card-title {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 10px;
    }
    .card-bar {
        height: 1px;
        width: 100%;
        background: rgba(0,0,0,0.1);
    }
    .card-content-wrapper {
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        padding-bottom: 1px;
    }
    .button {
        border: 1px solid #c9c9c9;
        border-radius: 5px;
        padding: 5px 10px;
        margin: 5px 0;
    }
    .button:hover {
        background-color: rgba(0,0,0,0.1);
    }
</style>


