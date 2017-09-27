<template>
  <div id='app'>
    <header class="header">
      <router-link to="/">{{ headerTitle }}</router-link>
      <div class="des">
        <p class="description">{{ description }}</p>
      </div>
      <navMenu :menu="menuConf" ></navMenu>
    </header>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import api from './api/index.js'
  import './style/style.less'
  import conf from './config'
  import navMenu from './components/navMenu.vue'
  import footerBar from './components/footerBar.vue'

  export default {
    name: 'app',

    data () {
      return {
        headerTitle: conf.headerTitle,
        description: conf.description,
      }
    },
    components: {
      navMenu,
      footerBar,
    },
    computed: {
      menuConf(){
        return this.$store.getters.topics.map(({name, sha}) => ({ 
          label: conf.menu[name] || name,
          name,
          sha,
        }))
      }
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
