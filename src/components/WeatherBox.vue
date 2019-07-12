<template>
    <div class="card-wrapper">
        <div class="card-title">
            {{ today.getMonth() }}월 {{ today.getDate()}}일 의 날씨
        </div>
        <div class="card-bar"/>
        <div class="card-content-wrapper">
            
        </div>
    </div>
</template>
<script>

export default {
    name: 'WeatherBox',
    data() {
        return {
            today: new Date(),
        }
    }
}
</script>
<style>

</style>
