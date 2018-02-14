<template>
<main class="main-container">
    <div class="list-view">
        <HomeListCard v-for="{ title, sha, date } in filteredList" :key="sha"
                    :title="title"
                    :link="'/post/'+sha"
                    :date="date"
        ></HomeListCard>
    </div>
</main>
</template>
<script>
import HomeListCard from '../components/HomeListCard.vue'
export default {
  components:{
      HomeListCard,
  },
  computed:{
    filteredList(){
        return this.$store.getters.list
    },
  }
}
</script>

<style lang="less" scoped>
.main-container{
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
}
.list-view{
    padding: 20px 50px;
}
</style>
