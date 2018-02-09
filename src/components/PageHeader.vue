<template>
  <header>
    <div id="nav">
      <router-link to="/">Cosine'Home</router-link> |
      <router-link to="/article">Article</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>
<style>
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
