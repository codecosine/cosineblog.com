<template>
  <aside class="article-sidebar box">
    <h3>{{ articleTitle }}</h3>
    <nav class="collapse">
      <div class="toc-item active">
        <a href="/#123" class="toc-link">Getting started</a>
      </div>
      <div class="toc-item">
        <a href="/#123" class="toc-link">Layout</a>
      </div>
      <div class="toc-item">
        <a href="/#123" class="toc-link">code</a>
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
  height: calc(100vh - 4rem);
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
.article-sidebar .nav>li>a:hover {
    color: rgba(0,0,0,.85);
    text-decoration: none;
    background-color: transparent;
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
.toc-item .active{
  .toc-link {
    color: rgba(0,0,0,.85);
  }
}
</style>

