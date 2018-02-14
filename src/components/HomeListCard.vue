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
            <div class="content-time">
                <time pubdate="pubdate" :datetime="date | formatDate" :title="date | formatDate" class="item-date">{{ date | timeago }}</time>
            </div>
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
  },
  data(){
      return {
        date:'2018-02-15',
      }
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
.content-time{
    .item-date {
        display: inline-block;
        font-size: 12px;
        color: #888;
        padding-top: 12px;
    }
}
.content-info{
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
    
    li{
        float: left;
        padding: 0px 3px;
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


