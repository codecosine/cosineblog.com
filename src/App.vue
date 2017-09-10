<template>
  <div id='app'>
    <header class="header">
      <router-link to="/">{{ headerTitle }}</router-link>
      <search-bar class="searchBar" v-if="isPageList"></search-bar>
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
  import './style/style.less'
  import conf from './config'
  import navMenu from './components/navMenu.vue'
  import footerBar from './components/footerBar.vue'
  import searchBar from './components/searchBar.vue'

  export default {
    name: 'app',

    data () {
      return {
        headerTitle: conf.headerTitle,
        description: conf.description,
        menuConf: (function () {
          return Object.keys(conf.menu).map(key => {
            return {
              label: conf.menu[key],
              link: '/' + key
            }
          })
        })()
      }
    },
    computed: {
      isPageList () {
        return this.$route.name === 'list'
      }
    },
    components: {
      navMenu,
      footerBar,
      searchBar
    },
    mounted(){
      window.document.title = conf.headerTitle
    }
  }
</script>
