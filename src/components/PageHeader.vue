<template>
  <header class="main-header header-style">
    <div id="nav">
      <router-link to="/">Cosine'Home</router-link> |
      <router-link to="/article">Article</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>
<style>
.main-header{
  position: sticky;
  z-index: 1001;
  top:0;
  left: 0;
  right: 0;
  height: 3.6rem;
}
.header-style{
  background-color: rgba(255, 255, 255, 0.980392);
  box-shadow: rgba(0, 0, 0, 0.0784314) 0px 1px 12px;
}
#nav{
  padding: 10px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
