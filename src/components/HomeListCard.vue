<template>
  <div class="content-box">
      <div class="info-box">
          <ul class="content-info clearfix">
                <li><a>Javascript</a></li>
                <li><a>React.js</a></li>
            </ul>
            <div class="content-title">
                <a :href=link>{{title}}</a>
            </div>
            <div class="publish-time">
                <time pubdate="pubdate" datetime="2018/12/12" title="2018/12/12" class="item-date">9月后</time>            </div>
            <div class="content-img">
                <img src="" alt="">
            </div>
      </div>
     
  </div>
</template>
<script>
export default {
  props:{
      link:String,
      title:String,
  }
}
</script>
<style lang="less" scoped>
.content-box{
    display: flex;
    align-items: center;
    padding: 1.5rem 2rem;
    padding-top: 1.5rem;
    padding-right: 2rem;
    padding-bottom: 1.5rem;
    padding-left: 2rem;
}
.info-box{
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    min-width: 0;

}
.content-title{
    a{
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.2;
        color: inherit;
    }
}
.content-img{
    position: absolute;
}
.content-info{
    list-style: none;
    margin: 0;

    li{
        float: left;
        a{
            text-decoration: none;
            cursor: pointer;
            color: #909090;
            &:hover{
                    color: #007fff;
            }
        }
    }
}
</style>


