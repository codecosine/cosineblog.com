<template>
  <section class="article-wrap">
    <article class="article">
      <ArticleSideBar :articleTitle=title></ArticleSideBar>
      <ArticleContentBox :articleContentText=content class="article_content"></ArticleContentBox>
    </article>
  </section>
</template>
<script>
import ArticleContentBox from '../components/ArticleContentBox.vue';
import ArticleSideBar from '../components/ArticleSideBar.vue';
import api from '../api'
import conf from '../config'
import fm from 'front-matter'
/**
 * test 
import api from '../api/test'
*/
export default {
  components:{
    ArticleContentBox,
    ArticleSideBar,
  },
  data(){
    return {
      title : '',
      content : ``
    }
  },
  created(){
    this.loadPost()
  },
  methods: {
      loadPost () {
        api.getDetail(this.$route.params.hash)
          .then(text => {
            // Parse front-matter
            // https://github.com/jxson/front-matter#fmstring
            const content = fm(text)
            this.content = content.body
            this.title = content.attributes.title || '文章'
            this.date = content.attributes.date
            // Set window title
            window.document.title = `${this.title} - ${conf.blogTitle}`
          })
          .catch(err => {
            console.error(err)
            this.$router.replace('/')
          })
      },

      newTab () {
        Vue.nextTick(function () {
          // Load the external link into new tab
          const linksArray = [...document.querySelectorAll('a')]
          const currentHost = window.location.host
          linksArray.forEach(el => {
            if (el.href && el.host !== currentHost) {
              el.target = '_blank'
              // https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
              el.rel = 'noopener noreferrer'
            }
          })
        })
      }
    },

    watch: {
      'htmlFromMarkdown': 'newTab'
    }
}
</script>
<style lang="less" scoped>
.article-wrap{
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 15px;
}
.article{
  display: flex;
  flex-wrap: wrap;
}
</style>
