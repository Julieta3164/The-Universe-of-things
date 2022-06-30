<script>
import axios from 'axios'

export default {
    data() {
        return {
            characters: [],
        }
    },
    async created() {
        let response = await fetch('https://api.disneyapi.dev/characters/')
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
        // this.getAPI();
    },
    methods: {
        // getAPI(){
        //     console.log("Código de GetToDo")
        //     axios
        //         .get('https://api.disneyapi.dev/characters/')
        //             .then(response => {
        //                 console.log(response))
        //                 let characters = response.data.data
        //                 console.log(characters)
        //                 return characters
        //             })
        //             .catch( e => console.log("hola " + e))
        //         }
        // }
    },
}
</script>

<template>
    <div class="col col-lg-11 bg-info px-5">
        <div class="row justify-content-evenly">
            <div
                v-for="character in characters"
                :key="character.id"
                class="col-6 card text-bg-primary m-3"
                style="width: 18rem"
            >
                <img :src="character.imageUrl" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h3 class="card-text">{{ character.name }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.name {
    background-color: 006e99;
}
</style>
