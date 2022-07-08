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
        remove(index) {
            this.favorite.splice(index, 1)
        },
        edit(character) {
            character.editing = false
        },
        modify(character, user) {
            character.name = user
            character.editing = true
            console.log(user)
            this.user = ' '
        },
        Cancel(character) {
            character.editing = true
        },
    },
}
</script>
<template>
    <main class="fondo">
        <div
            v-for="(character, index) in favorite"
            :key="index"
            :id="'card-' + character._id"
            class="card col-6 card m-3 central"
            style="width: 18rem"
        >
            <div class="icons">
                <i @click="remove(index)" class="bi bi-trash"></i>
                <!-- <button @click="remove(index)">delete</button> -->
                <i  @click="edit(character)" v-if="character.editing" class="bi bi-pencil"></i>
                <!-- <button @click="edit(character)" v-if="character.editing">
                    Editar
                </button> -->
                <button @click="Cancel(character)" v-else>Cancelar</button>
            </div>
            <!-- <img :src="character.imageUrl" class="card-img-top" alt="..." />
        class="card col-6 card m-3 central"
        style="width: 18rem"> -->

            
            

            <div class="img-card">
                <img :src="character.imageUrl" class="card-img-top" alt="..." />
            </div>
            <div class="stars">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
            </div>
            <div class="card-body">
                <h3 class="card-text" v-if="character.editing">
                    {{ character.name }}
                </h3>
                <input
                    type="text"
                    v-model="user"
                    v-else
                    @keyup.enter="modify(character, user)"
                    autofocus
                />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.fondo {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1%;
    background: #87cefa;
    justify-content: center;
}

.icons {
    display: flex;
    justify-content: space-between;
    margin: 5%;
}

.central {
    text-align: center;
    width: 100%;
.img-card {
        width: 90%;
        height: 60%;
        margin: 0 5% 20px 5%;
        text-align: center;
        overflow: hidden;
        img {
            display: inline-block;
            width: auto;
            height: 100%;
        }
    }
    .card-body {
        background: #006e99;
        color: white;
        width: 100%;
        height: 20%;
    }
    .stars {
        background: #e74c3c;
        width: 100%;
        height: 10%;
        font-size: 30px;
    }
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

button {
    border: none;
}
</style>
