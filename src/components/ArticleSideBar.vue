<template>
  <aside class="article-sidebar">
    <h2>{{ articleTitle }}</h2>
    <nav class="collapse">
      <div class="toc-item">
        <a href="/#123" class="toc-link">Getting started</a>
      </div>
      <div class="toc-item">
        <a href="/#123" class="toc-link">Layout</a>
      </div>
      <div class="toc-item">
        <a href="/#123" class="toc-link">code</a>
      </div>

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
.article-sidebar{
  flex: 0 0 100%;
  max-width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 768px){
    flex: 0 0 25%;
    max-width: 25%;
    border-right: 1px solid rgba(0,0,0,.1);
  }
}
.toc-item{
  .toc-link{
    display: block;
    text-decoration: none;
    padding: .25rem 1.5rem;
    font-weight: 500;
    color: rgba(0,0,0,.65);
  }
}
</style>

