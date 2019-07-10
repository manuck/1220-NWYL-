<template>
    <div class="card-wrapper">
        <Weather />
    </div>
</template>

<script>
import Weather from '../components/Weather'

export default {
    name: "Cardview",
    components: {
        Weather,
    }
}
</script>
<style>
    .card-wrapper {
        display: flex;
        height: 350px;
        width: 250px;
        min-width: 250px;
        border-radius: 7px;
        background: white;
        margin: 10px 40px 10px 0;
        padding: 10px;
        box-shadow: 0 0 10px 1px grey;
    }
    .card-wrapper:last-of-type {
        margin: 10px 0;
    }
    #weather {
        color: black;
    }
</style>


