<template>
  <div id="app">
    <page-header></page-header>
    <div id="main">
      <router-view/>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import './style/main.less'

import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
export default {
  name: 'App',
  components:{
    PageHeader,
    PageFooter,
  },
  mounted(){
      // 显示加载动画
      // 1.加载tags=>tagslist=>形成首页
      this.$store.dispatch('getTopicsList').then(list => {
        this.$store.dispatch('updateCacheList', list)
        this.$store.dispatch('updateHomeList', list)
        // 首页加载动画结束
      })
    }
}
</script>
