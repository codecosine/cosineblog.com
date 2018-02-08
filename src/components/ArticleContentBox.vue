<template>
  <section>
      <div>
        <h2>this is a content text</h2>
        <vue-markdown>{{ content }}</vue-markdown>
      </div>
  </section>
</template>

<script>
import { Component,Prop, Vue } from 'vue-property-decorator';
import VueMarkdown from 'vue-markdown';
@Component({
  components: {
    VueMarkdown,
  },
})
export default class ArticleContentBox extends Vue {
    @Prop({default: 'this is a article content'})
    content

}

</script>
