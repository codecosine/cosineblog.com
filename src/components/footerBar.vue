<template>
  <footer class="footer">
    Copyright © {{ thisYear }} | codecosine
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
