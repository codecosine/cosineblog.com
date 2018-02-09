<template>
  <header class="main-header">
    <div id="nav">
      <router-link to="/">Cosine'Home</router-link> |
      <router-link to="/article">Article</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>
<style>
.main-header{
  position: fixed;
  height: 4rem;
  top:0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
