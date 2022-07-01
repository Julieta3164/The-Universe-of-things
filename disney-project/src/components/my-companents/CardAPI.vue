<script>

export default {
    data() {
        return {
            characters: [],
        }
    },
    async created() {
        let parameters = this.$route.query;
        let myPage = parameters.page;
        let response = await fetch('https://api.disneyapi.dev/characters?page='+myPage)
        if (response.ok) {
            const datas = await response.json()
            this.characters = datas.data
            console.log(datas)
        } else {
            console.log('error HTTP', response.status)
        }
        console.log('Hola created')
    },
    mounted() {
        console.log('Hola Mounted')
    },
}
</script>

<template>
             <div
                v-for="character in characters"
                :key="character.id"
                class="col-6 card m-3"
                style="width: 18rem">
                <img :src="character.imageUrl" class="card-img-top" alt="..." />
                <div class="card-body">
                    
                    <h3 class="card-text">{{ character.name }}</h3>
                </div>
            </div>
            <a href="?page=11" >11 - </a>
            <a href="?page=12" >12 - </a>
            <a href="?page=13" >13 - </a>
            <a href="?page=14" >14 - </a>
</template>

<style lang="scss" scoped>

.card-body{
    h3{
        font-size: 25px;
        text-align: center;
        color: white;
    }
    background-color: #006E99;
}

img{
    width: 70%;
    height: 70%;
    margin-top: 10%;
    margin-left: 15%;
}
.name {
    background-color: 006e99;
}
</style>
