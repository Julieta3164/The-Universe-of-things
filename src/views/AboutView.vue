<script>
import { mapActions, mapWritableState } from 'pinia'
import { userFavoriteStore } from '../stores/add-favorite'
export default {
    // data() {
    //     return {
    //         editing: false,
    //     }
    // },
    computed: {
        ...mapWritableState(userFavoriteStore, ['favorite']),
    },
    methods: {
        ...mapActions(userFavoriteStore, ['addFavorite']),
        remove(index){
            this.favorite.splice(index,1)
        },
        edit(character){
            character.editing = false;
            
        },
        modify(character, user){
            character.name = user;
            character.editing = true;
            console.log(user)
            this.user = ' '
            
        },
        Cancel(character){
            character.editing = true;
        }
    },

}
</script>
<template>
<main class="fondo">
    <div
        v-for="(character, index) in favorite"
        :key="index"
        :id="'card-' + character._id"
        class="card col-6 card m-3"
        style="width: 18rem"
    >
        <button name="tarjetaTest" v-on:click="this.like(character)"></button>
        <button @click="remove(index)">delete</button>
        <button @click="edit(character)" v-if="character.editing">Editar</button>
        <button @click="Cancel(character)" v-else>Cancelar</button>

        <img :src="character.imageUrl" class="card-img-top" alt="..." />
        <div class="card-body">
            <h3 class="card-text" v-if="character.editing" >{{ character.name }}</h3>
            <input type="text" v-model="user" v-else @keyup.enter="modify(character, user)" autofocus/>
        </div>
    </div>
    </main>
</template>

<style lang="scss" scoped>
.fondo{
display: flex;
  flex-wrap:wrap ;
  margin-top: 1%;
  background: #87cefa;
  justify-content: center;
}
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

.card {

  &_favorited {
    transform-origin: 0.5em 0.5em;

    &::after {
      z-index: 1;
      opacity: 1;
    }
  }

  &_hidden {
    display: none;
  }
}

button{
    border: none;
}
</style>
