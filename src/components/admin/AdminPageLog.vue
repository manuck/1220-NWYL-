<template>
    <div id="admin-pagelog" class="admin-content-wrapper">
        <div class="admin-fullbox">
            <div class="admin-box-header">
                <div class="admin-header-title">
                    페이지 접속 기록
                </div>
                <div class="admin-header-select">
                    <span>표시 갯수</span>
                    <div class="custom-select">
                        <select id="admin-pagelog-input" type="number">
                            <option value="40">40</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="400">400</option>
                            <option value="1000">1000</option>
                        </select> 
                    </div>
                </div>
            </div>
            <div class="admin-pagelog-content">
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
        this.changeSelectView()
    },
    methods: {
        loadLimitsFromLocalStorage() {
            if (localStorage.limits) {
                this.limits = parseInt(localStorage.limits)
                document.querySelector('#admin-pagelog-input').value = this.limits
            } else {
                localStorage.setItem('limits', this.limits)
            }
        },
        async getLogs() {
            this.logs = await FirebaseService.getLogs()
        },
        changeLimit(e) {
            localStorage.limits = parseInt(e.target.textContent)
            this.limits = parseInt(e.target.textContent)
        },
        changeSelectView() {
            var select = document.querySelector(".custom-select")
            var selectElement = select.querySelector("select")

            var selectedItem = document.createElement("div")
            selectedItem.setAttribute("class", "custom-select-selected")
            selectedItem.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML
            select.appendChild(selectedItem)
            
            var selectItemlist = document.createElement("div")
            selectItemlist.setAttribute("class", "custom-select-items custom-select-hide")
            for (var i = 0; i < selectElement.length; i++) {
                var selectItem = document.createElement("div")
                selectItem.innerHTML = selectElement.options[i].innerHTML
                var self = this
                selectItem.addEventListener("click", function(e) {
                    document.querySelector('#admin-pagelog-input').value = e.target.textContent
                    // 아래 함수 쓰려면 this의 scope를 정확히 알아야 한다.
                    self.changeLimit(e)
                    var parentOfSelected = this.parentNode.parentNode.querySelector("select")
                    var selectedNode = this.parentNode.previousSibling
                    for (var j = 0; j < parentOfSelected.length; j++) {
                        if (parentOfSelected.options[j].innerHTML == this.innerHTML) {
                            parentOfSelected.selectedIndex = j
                            selectedNode.innerHTML = this.innerHTML
                            var previousSelected = this.parentNode.getElementsByClassName("same-as-selected")
                            for (var k = 0; k < previousSelected.length; k++) {
                                previousSelected[k].removeAttribute("class")
                            }
                            this.setAttribute("class", "same-as-selected")
                            break
                        }
                    }
                    selectedNode.click()
                })
                selectItemlist.appendChild(selectItem)
            }
            select.appendChild(selectItemlist)
            selectedItem.addEventListener("click", function(e) {
                e.stopPropagation()
                closeAllSelect(this)
                this.nextSibling.classList.toggle("custom-select-hide")
                this.classList.toggle("custom-select-arrow-active")
            })

            function closeAllSelect(element) {
                var arrNo = []
                var selectItemList = document.getElementsByClassName("custom-select-items")
                var selectedItem = document.getElementsByClassName("custom-select-selected")
                for (var i = 0; i < selectedItem.length; i++) {
                    if (element == selectedItem[i]) {
                        arrNo.push(i)
                    } else {
                        selectedItem[i].classList.remove("custom-select-arrow-active")
                    }
                }
                for (var i = 0; i < selectItemList.length; i++) {
                    if (arrNo.indexOf(i)) {
                        selectItemList[i].classList.add("custom-select-hide")
                    }
                }
            }
            document.addEventListener("click", this.closeAllSelect)
        }
    },
}
</script>

<style lang="scss">
@import './AdminPageLog.scss';
</style>
