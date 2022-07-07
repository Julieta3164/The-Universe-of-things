<script>
    export default {
        data(){
            return {
                pagesTest: [],
                myPageTest:1
            }
        },
        async created(){
            this.clickPageTest()
            console.log('Hola created PAGINATE')
        },
        methods:{
            async clickPageTest(){
                console.log('Hola clickPageTest')
                this.pagesTest = [];
                this.pagesTest.push({"id":3, "number":3,"text":"3test", "class":""})
                this.pagesTest.push({"id":4, "number":4,"text":"4test", "class":""})
            }
        }
    }
</script>


<template>
                <br />
                <div v-for="pageTest in pagesTest"
            :key="pageTest.id">
                <button v-on:click="this.clickPageTest()" :class="pageTest.class">{{pageTest.text}}</button>
            </div>
                            <br />
</template>

<style lang="scss" scoped>

</style>