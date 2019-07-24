<template>
    <div id="menu-modal" class="modal-wrapper">
        <div class="modal-box">
            this is modal
            <span id="close-modal">close</span>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        var modal = document.querySelector('#menu-modal')
        var btn = document.querySelector('#modal-button')
        var close = document.querySelector('#close-modal')
        btn.onclick = function() {
            modal.style.display = "block"
        }
        close.onclick = function() {
            modal.style.display = "none"
        }
        window.onclick = function(e) {
            if (e.target == modal) {
                modal.style.display = "none"
            }
        }
    }
}
</script>

<style lang="scss">
@import './MenuModal.scss'
</style>


