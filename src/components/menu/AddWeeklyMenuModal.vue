<template>
    <div id="add-weekly-modal" class="modal-wrapper">
        <a href="#" class="modal-back"/>
        <div class="modal-box">
            <div class="modal-header">
                <span class="modal-title">주간 식단표 등록</span>
                <a href="#" class="modal-close">&times;</a>
            </div>
            <div class="modal-content">
                <div class="modal-info">
                    <!-- <input @change="test" id="file" ref="myfile" name="weekly-menu" type="file" class="filecontainer"/> -->
                    <input @change="getMenuData" id="menudata" type="file" class="filecontainer"/>
                    <button id="formButton" @click="postPortfolio(title,body,imgSrc)" class="form-button" disabled="" type="button">제출</button>
                </div>
            </div>
            <div class="modal-content2">
                <div class="modal-content2-title">
                    업로드된 식단표 미리보기
                </div>
                <div id="uploaded-menu">
                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <td>월</td>
                                <td>화</td>
                                <td>수</td>
                                <td>목</td>
                                <td>금</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="menu-date"/>
                            <tr id="menu-korean"/>
                            <tr id="menu-special"/>
                            <tr id="menu-star"/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// const testdata = require('./5thJul2019.json')
// console.log(testdata)
// var requestURL = '../../../data/5thJul2019.json'
// printdata(testdata)
// function printdata(jsonobj) {
//     let menutest = document.querySelector('#menu-test')
//     console.log('0', menutest)
//     let mytest = document.createElement('div')
//     console.log('1', mytest)
//     mytest.innerHTML = jsonobj
//     console.log('2', mytest.textContent)
//     console.log('03', menutest)
    // menutest.appendChild(mytest)
// }

export default {
    name: "AddWeeklyMenuModal",
    data() {
        return {
            menudata: [],
        }
    },
    mounted() {
        
    },
    methods: {
        getMenuData() {
            const selectedFile = document.querySelector('#menudata').files[0]
            
            var reader = new FileReader()
            reader.onload = (e) => {
                this.menudata = JSON.parse(e.target.result)
                this.showMenuData(this.menudata)
            }
            reader.readAsText(selectedFile)
        },
        showMenuData(data) {
            let menuDate = document.querySelector('#menu-date')
            for (let i = 0; i < 6; i++) {
                let cell = document.createElement('td')
                if (i == 0) {
                    let cellText = document.createTextNode("")
                } else {
                    let cellText = document.createTextNode("2")
                    // let cellText = document.createTextNode(data["menus"][i-1]["date"])
                }
                cell.appendChild(cellText)
                menuDate.appendChild(cell)
            }
            let menuKorean = document.querySelector('#menu-korean')
            let menuSpecial = document.querySelector('#menu-special')
            let menuStar = document.querySelector('#menu-star')
        },
    },
}
</script>

<style lang="scss">
@import './AddWeeklyMenuModal.scss';
</style>

