<template>
    <main class="article-content">
      <vue-markdown :source="articleContentText"></vue-markdown>
    </main>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import Prism from 'prismjs'
import 'prismjs/themes/prism.css';

export default {
  components: {
    VueMarkdown,
  },
  props:{
    articleContentText: String
  },
  updated() {
			Prism.highlightAll();
	},


}

</script>
<style lang="less" scoped>

.article-content {

    @media (min-width: 768px){
      flex: 0 0 75%;
      max-width: 75%;
      padding-left: 3rem!important;
    }
}
</style>
