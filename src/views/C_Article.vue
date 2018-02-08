<template>
  <section>
    <article class="article">
      <h2>{{ title }}</h2>
      <ArticleContentBox :content=content></ArticleContentBox>
    </article>

  </section>
</template>
<script>
import { Component, Prop, Vue } from 'vue-property-decorator';
import ArticleContentBox from '../components/ArticleContentBox.vue';
@Component({
  components:{
    ArticleContentBox,
  }
})
export default class ArticleView extends Vue {
  title = 'this is a title'
  content = `i am a ~~test~~ **test**.
     ## this is a head title
  `
}
</script>
<style lang="less" scoped>
.article{
  border:1px solid #666;
}
</style>
