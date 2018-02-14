<template>
<main class="main-container">
    <div class="list-view">
        <HomeListCard v-for="(item,index) in listData" :key="index"
                    :title="item.title"
                    :link="item.link"
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
  data(){
      return {
          listData:[{
              title:'一次记住js的6个正则方法',
              time: '2018-2-14',
              link: 'https://juejin.im/entry/5a8121335188257a766328b9'
           },{
              title:'一次记住js的6个正则方法',
              time: '2018-2-14',
              link: 'https://juejin.im/entry/5a8121335188257a766328b9'
           },{
              title:'一次记住js的6个正则方法',
              time: '2018-2-14',
              link: 'https://juejin.im/entry/5a8121335188257a766328b9'
           },{
              title:'一次记住js的6个正则方法',
              time: '2018-2-14',
              link: 'https://juejin.im/entry/5a8121335188257a766328b9'
           },{
              title:'一次记住js的6个正则方法',
              time: '2018-2-14',
              link: 'https://juejin.im/entry/5a8121335188257a766328b9'
           },{
              title:'一次记住js的6个正则方法',
              time: '2018-2-14',
              link: 'https://juejin.im/entry/5a8121335188257a766328b9'
           }]
      }
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
