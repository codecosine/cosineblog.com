<template>
  <footer class="footer">
    Copyright © {{ thisYear }} | cosine
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        thisYear: new Date().getFullYear()
      }
    }
  }
</script>
<style lang="less" scoped>
.footer {
    margin:15px auto;
    text-align:center;
    color: #586069 !important;
    a {
        color: #586069 !important;
        text-decoration:underline
    }
}

</style>

