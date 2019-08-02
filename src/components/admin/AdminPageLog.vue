<template>
    <div class="admin-content-wrapper">
        <div class="admin-fullbox">
            <div class="admin-box-header">
                <div class="admin-header-title">
                    페이지 접속 기록
                </div>
                <div class="admin-header-option">
                    <span>표시 갯수</span>
                    <select type="number" @change="changeLimits" class="admin-header-input">
                        <option value="40">40</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="400">400</option>
                        <option value="1000">1000</option>
                    </select> 
                </div>
            </div>
            <div class="admin-box-content">
                <div v-for="i in logs.length > limits ? limits : logs.length" :key="i" class="admin-pagelog-li">
                    <span style="flex: 1 1 20px;">{{ i-1 }}</span>
                    <span style="flex: 1 1 80px;">{{ logs[i-1].page }}</span>
                    <span style="flex: 1 1 20px;">{{ logs[i-1].userid }}</span>
                    <span style="flex: 1 1 400px;">{{ logs[i-1].time.toDate() }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FirebaseService from '@/services/FirebaseService'

export default {
    name: "AdminPageLog",
    data() {
        return {
            logs: [],
            limits: 40,
        }
    },
    mounted() {
        this.loadLimitsFromLocalStorage()
        this.getLogs()
    },
    methods: {
        loadLimitsFromLocalStorage() {
            if (localStorage.limits) {
                this.limits = parseInt(localStorage.limits)
                document.querySelector('.admin-header-input').value = this.limits
            } else {
                localStorage.setItem('limits', this.limits)
            }
        },
        async getLogs() {
            this.logs = await FirebaseService.getLogs()
            console.log(this.logs.length)
        },
        changeLimits(e) {
            localStorage.limits = parseInt(e.target.value)
            this.limits = parseInt(e.target.value)
        }
    },
}
</script>

<style lang="scss">
@import './AdminPageLog.scss';
</style>
