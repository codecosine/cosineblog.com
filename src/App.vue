<template>
  <div id="app">
    <page-header></page-header>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import './style/main.less'

import PageHeader from './components/PageHeader'
export default {
  name: 'App',
  components:{
    PageHeader,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#main{
  margin-top: 4rem;
}
</style>
