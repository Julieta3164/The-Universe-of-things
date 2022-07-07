<script>
import { mapWritableState } from 'pinia'
import { userFavoriteStore } from '../stores/add-favorite'
export default {
    computed: {
        ...mapWritableState(userFavoriteStore, ['favorite']),
    },
}
</script>
<template>
<main class="fondo">
    <div
        v-for="character in favorite"
        :key="character._id"
        :id="'card-' + character._id"
        class="card col-6 card m-3 central"
        style="width: 18rem">
        <div class="icons">
            <i class="bi bi-pencil"></i>
            <i class="bi bi-trash"></i>

        </div>
        <div class="img-card">
            <img :src="character.imageUrl" class="card-img-top" alt="..." />
        </div>
           
        <div class="card-body">
            <h3 class="card-text">{{ character.name }}</h3>
        </div>

        <div class="stars">HOLA</div> 
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

.icons{
    display: flex;
    justify-content: space-between;
    margin: 5%;
}
    .central{
    text-align: center;
        width: 100%;
        .img-card{
            img{
                width: 50%;
                height: 100%;
            }
            margin: 5%;
            width: 100%;
            height: 60%;
        }
        .card-body{
            background: #006e99;
            color: white;
            width: 100%;
            height: 20%;
        }
        .stars{
            background: #e74c3c;
            width: 100%;
            height: 20%;
        }
   }

.name {
    background-color: #006e99;
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
