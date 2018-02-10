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
