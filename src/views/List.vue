<template>
  <section class="list-view">
    <div class="loading" v-if="loading">loading..</div>
    <div class="no-content" v-else-if="filteredList.length === 0">nothing..</div>
    <ol v-else class="list">
      <li v-for="{ title, sha, date } in filteredList" :key="sha" class="list-item">
        <router-link :to="'/post/' + sha" class="item-title">
          {{ title }}
        </router-link>
        <br>
        <time pubdate="pubdate" :datetime="date | formatDate" :title="date | formatDate" class="item-date">{{ date | timeago }}</time>
      </li>
    </ol>
  </section>
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
