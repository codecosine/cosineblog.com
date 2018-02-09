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
/**test */
import test from '../api/test'
export default {
  components:{
    ArticleContentBox,
    ArticleSideBar
  },
  data(){
    return {
      title : 'this is a title',
      content : `i am a ~~test~~ **test**.`
    }
  },
  mounted(){
    test.getArticleTest().then(res=>{
      console.log(res)
      this.content = res.data;
    })
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
  border:1px solid #666;
}
</style>
