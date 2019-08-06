<template>
    <div style="height: 100%; width: 100%;">
        <div class="main-bg"/>
        <div class="main-wrapper">
            <SideNav/>
            <div class="body-wrapper">
                <div class="menu-flex">
                    <div class="filter-wrapper">
                        <ul class="country">
                            <li value="1">한식</li>
                            <li value="2">일식</li>
                            <li value="3">중식</li>
                            <li value="4">양식</li>
                            <li value="5">기타</li>
                        </ul>
                        <ul class="style">
                            <li>볶음</li>
                            <li>면</li>
                            <li>국</li>
                            <li>밥</li>
                            <li>고기</li>
                            <li>야채</li>
                            <li>과일</li>
                            <li>기타</li>
                        </ul>
                    </div>
                    <MenuList/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideNav from '@/components/mainview/SideNav'
import MenuList from '@/components/menu/MenuList'

export default {
    name: 'MenuPage',
    components: {
        SideNav,
        MenuList,
    },
    methods: {
        countrySelect(a) {
            console.log('asdsad')
            console.log(a)
            // var museums = db.collectionGroup('landmarks').where('type', '==', 'museum');
            // museums.get().then(function (querySnapshot) {
            // querySnapshot.forEach(function (doc) {
            //     console.log(doc.id, ' => ', doc.data());
            //     });
            // });

        }
    }
}
</script>

<style lang="scss">
@import './MenuPage.scss';
</style>
