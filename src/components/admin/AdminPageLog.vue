<template>
    <div class="admin-content-wrapper">
        <div class="admin-fullbox">
            <div class="admin-box-header">
                <div class="admin-header-title">
                    페이지 접속 기록
                </div>
                <div class="admin-header-option">
                    <input type="number" name="limits" class="admin-header-input"/>
                </div>
            </div>
            <div class="admin-box-content">
                <div v-for="i in logs.length > limits ? limits : logs.length" :key="i" class="admin-pagelog-li">
                    <span style="flex: 1 1 100px;">{{logs[i-1].page}}</span>
                    <span style="flex: 1 1 20px;">{{logs[i-1].userid}}</span>
                    <span style="flex: 1 1 400px;">{{logs[i-1].time.toDate()}}</span>
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
            limits: 200,
        }
    },
    mounted() {
        this.getLogs()
    },
    methods: {
        async getLogs() {
            this.logs = await FirebaseService.getLogs()
		},
    }
}
</script>

<style lang="scss">
@import './AdminPageLog.scss';
</style>
