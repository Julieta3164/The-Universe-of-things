<script>
export default {}
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
        
        </button>
        <img :src="character.imageUrl" class="card-img-top" alt="..." />
        <div class="card-body">
            <h3 class="card-text">{{ character.name }}</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
