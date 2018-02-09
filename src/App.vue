<template>
  <div id="app">
    <page-header></page-header>
    <div id="page-content">

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
#page-content{
  margin: 0 auto;
  width: 100%;
  /* padding: 0 15px; */
}
</style>
