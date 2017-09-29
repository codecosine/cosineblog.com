<template>
<div class="layout">
  <section class="list-view">
    <div class="loading" v-if="loading">
      <div class="loader-inner ball-grid-pulse">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <ol class="list">
      <li v-for="{ title, sha, date } in filteredList" :key="sha" class="list-item">
        <router-link :to="'/post/' + sha" class="item-title">{{ title }}</router-link>
        <br>
        <time pubdate="pubdate" :datetime="date | formatDate" :title="date | formatDate" class="item-date">{{ date | timeago }}</time>
      </li>
    </ol>
  </section>
  <section class="list-tree">

  </section>
</div>
  
</template>

<script>
  import api from '../api'
  import conf from '../config'

  export default {
    name: 'listView',
    computed:{
      filteredList(){
        return this.$store.getters.list
      },
      loading(){
        return this.$store.getters.list.length == 0
      }
    },
  }
</script>