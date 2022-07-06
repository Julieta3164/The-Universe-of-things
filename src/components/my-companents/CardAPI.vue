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
    methods:{
        like  (character) {
            let idDivSelected = "card-" + character._id;
            let itemSelected = document.querySelector("#" + idDivSelected);
            let btnFavorites = document.querySelector("#btnFavorite");
            const animationDuration = 1000;
            const distance = this.getDistance(itemSelected, btnFavorites);
            itemSelected.classList.add("card_favorited"); 

            btnFavorites.animate([{ transform: "translateZ(700px)", offset: 0.5 }], {
                duration: animationDuration,
                easing: "ease-in-out"
            });

            const animation = itemSelected.animate(
                [
                {
                    transform: `translate(${distance.x}px, ${distance.y}px) scale(0.2) rotate(-40deg)`
                }
                ],
                { duration: animationDuration / 2, easing: "ease-in" }
            );

            animation.onfinish = () => {
                itemSelected.classList.add("card_hidden");
                //TODO aqui agreagar a store
                console.log("final de la animacion");
            };
        },
        getDistance(elt1, elt2) {
            if (!(elt1 instanceof Element && elt2 instanceof Element))
                throw Error("Illegal use of the function");

            const elt1Bbox = elt1.getBoundingClientRect();
            const elt2Bbox = elt2.getBoundingClientRect();

            return { x: elt2Bbox.x - elt1Bbox.x, y: elt2Bbox.y - elt1Bbox.y };
            }
        }
}
</script>

<template>
             <div
                v-for="character in characters"
                :key="character._id"
                :id= "'card-' + character._id"
                class="card col-6 card m-3"
                style="width: 18rem">
                <div class="heart" name="tarjetaTest" v-on:click="this.like(character)"></div>
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


.heart:before,
.heart:after {
    background: #e74c3c;
    border-radius: 85px 60px 0 0;
    content: "";
    height: 29px;
    left: 17px;
    position: absolute;
    top: 6px;
    margin-left: 240px;
    width: 16px;
    -moz-border-radius: 50px 50px 0 0;
    border-radius: 85px 60px 0 0;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%;
}
.heart:after {
    left: 1px;
    -webkit-transform: rotate(45deg);
    border-radius: 45px 60px 0 0;
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
    }

</style>
