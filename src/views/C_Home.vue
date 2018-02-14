<template>
<main class="main-container">
    <nav data-v-1add119e="" data-v-2440c1eb="" class="category-nav"><h5 data-v-1add119e="">热门文章</h5><div data-v-1add119e="" class="more">查看更多</div><ul data-v-1add119e="" class="nav-list"><li data-v-1add119e="" class="nav-item"><span data-v-1add119e="" class="title">推荐</span></li><li data-v-1add119e="" class="nav-item router-link-exact-active route-active"><span data-v-1add119e="" class="title">前端</span></li><li data-v-1add119e="" class="nav-item"><span data-v-1add119e="" class="title">Android</span></li><li data-v-1add119e="" class="nav-item"><span data-v-1add119e="" class="title">后端</span></li><li data-v-1add119e="" class="nav-item"><span data-v-1add119e="" class="title">人工智能</span></li><li data-v-1add119e="" class="nav-item"><span data-v-1add119e="" class="title">iOS</span></li><li data-v-1add119e="" class="nav-item"><span data-v-1add119e="" class="title">工具资源</span></li><li data-v-1add119e="" class="nav-item"><span data-v-1add119e="" class="title">阅读</span></li></ul></nav>
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
