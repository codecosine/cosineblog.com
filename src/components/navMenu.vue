<template>
  <div id="navMenu">
      <li v-bind:class="{ current: currentIndex == index }"
         @click="changeMenu(index)"
         v-for="(item,index) in menu" :key="index">
          {{ item.label }}
      </li>
  </div>
</template>

<style lang="less">
#navMenu {
    // margin: 10px 0 -1px;
    // padding: 0;
    // position: absolute;
    // right: 0;
    // bottom: 0;
    li {
        display: inline-block;
        cursor: pointer;
        padding: 3px 20px 3px;
        line-height: 30px;
        color: #444;
        font-size: 13px;
        border: 1px solid transparent;
    }
    li.current {
        border-top-color: rgb(227, 98, 9);
        border-right-color: rgb(225, 228, 232);
        border-left-color: rgb(225, 228, 232);
        border-bottom-color: #fff;
        border-width: 2px 1px 1px 1px;
        border-radius: 2px 2px 0 0;

    }
}
</style>

<script>
  export default {
    props: ['menu'],
    data() {
      return {
          currentIndex: 0
      }
    },
    methods: {
        changeMenu(index){
            this.currentIndex = index
        }
    }
  }
</script>
