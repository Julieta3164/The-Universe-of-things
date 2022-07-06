<<<<<<< HEAD
<template>
<h1>ABOUT</h1>

</template>


=======
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
    <div
        v-for="character in favorite"
        :key="character._id"
        :id="'card-' + character._id"
        class="card col-6 card m-3"
        style="width: 18rem"
    >
        <button name="tarjetaTest" v-on:click="this.like(character)">
            like
        </button>
        <img :src="character.imageUrl" class="card-img-top" alt="..." />
        <div class="card-body">
            <h3 class="card-text">{{ character.name }}</h3>
        </div>
    </div>
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
</style>
>>>>>>> a412226740b21aeab12ff88980c4e9f8ad4fdb07
