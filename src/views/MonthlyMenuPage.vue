<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <SideNav/>
            <div class="body-wrapper">
                <div class="body-flex">
                    <div class="MonthlyMenu-title">
                        <span id="showMonth"/>월 식단표
                    </div>
                    <div class="MonthlyMenu-content">
                        <table id="calendar">
                            <thead>
                                <tr>
                                    <th>일</th>
                                    <th>월</th>
                                    <th>화</th>
                                    <th>수</th>
                                    <th>목</th>
                                    <th>금</th>
                                    <th>토</th>
                                </tr>
                            </thead>
                            <tbody id="calendar-body" style="text-align: center;"/>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideNav from '@/components/mainview/SideNav'

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const today = new Date()
export default {
    name: 'MonthlyMenuPage',
    components: {
        SideNav,
    },
    mounted() {
        this.createCalendar(6, 2019)
    },
    methods: {
        daysInMonth(iMonth, iYear) {
            return 32 - new Date(iYear, iMonth, 32).getDate()
        },
        createCalendar(month, year) {
            let firstDay = (new Date(year, month)).getDay()
            let tbl = document.querySelector('#calendar-body')
            tbl.innerHTML = ""

            let showMonth = document.querySelector('#showMonth')
            showMonth.innerHTML = months[month]
            
            let date = 1;
            for (let i = 0; i < 6; i++) {
                let row = document.createElement("tr")
                for (let j = 0; j < 7; j++) {
                    if ((i === 0 && j < firstDay)) {
                        let cell = document.createElement("td")
                        let cellText = document.createTextNode("")
                        cell.appendChild(cellText)
                        row.appendChild(cell)
                    }
                    else if (date > this.daysInMonth(month, year)) {
                        break
                    }
                    else {
                        let cell = document.createElement("td")
                        let cellText = document.createTextNode(date)
                        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                            cell.classList.add("bg-info")
                        }
                        cell.appendChild(cellText)
                        row.appendChild(cell)
                        date++
                    }
                }
                tbl.appendChild(row)
            }
        },


    }
}
</script>

<style lang="scss">
@import './MonthlyMenuPage.scss';
</style>
