<script>
import CardAPI from '@/components/my-companents/CardAPI.vue';
export default {
    components: { CardAPI }
}
</script>


<template>
  <main class="fondo">
    <CardAPI/>
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
</style>

