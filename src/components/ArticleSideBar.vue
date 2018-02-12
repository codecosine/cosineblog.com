<template>
  <aside class="article-sidebar sticky box">
    <h3>{{ articleTitle }}</h3>
    <nav class="collapse" id="articleToc">
    </nav>
  </aside>
</template>
<script>
export default {
  props:{
    articleTitle:String,
  }
}
</script>
<style lang="less" scoped>
.sticky{
  position: sticky;
  top: 3.6rem;
  z-index: 1000;
  height: calc(~"100vh - 3.6rem");
}
.article-sidebar{
  flex: 0 0 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 100%;
  @media (min-width: 768px){
    flex: 0 0 25%;
    max-width: 25%;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  @media (min-width: 1200px){
    flex: 0 1 320px;
    border-right: 1px solid rgba(0,0,0,.1);

  }
}
</style>

