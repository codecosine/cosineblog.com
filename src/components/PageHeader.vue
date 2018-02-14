<template>
  <header class="main-header header-style">
      <nav id="nav" class="clearfix">
        <div class="nav-brand">
          <router-link to="/">
            <img class="nav-brand-logo" src="../assets/cosi.png" alt="logo">
          </router-link>
        </div>
        <div class="clearfix">
          <ul class="nav-list nav-right">
            <paper-icon-button id="icon" icon="cr:search" role="button" tabindex="-1" aria-disabled="false" title="在设置中搜索" aria-hidden="true">
            </paper-icon-button>
            <div class="nav-list-item searchInputBox">
              <input id="searchInput"
              placeholder="Search..."
               class="searchInput" type="search" />
            </div>
            <li class="nav-list-item">
              <router-link to="/article">Article</router-link>
            </li>
            <li class="nav-list-item">
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </nav>
  </header>
</template>

<style lang="less" scoped>
#nav{
  a.router-link-exact-active {
    color: #42b983;
  }
  position: relative;
  padding-right: 50px;
  padding-left: 50px;
  margin-right: auto;
  margin-left: auto;
 ul{
   list-style: none;
 }
 .nav-brand{
   float: left;
   margin: 0.3rem 0;
   a{
     font-weight: bold;
     color: rgba(255,255,255,0.85);
   }
   .nav-brand-logo{
     height: 2.5em;
     vertical-align: middle;
   }
 }
 .nav-right{
    float: right!important;
  }
  .nav-list{
    .nav-list-item{
      display: inline-block;
      padding-right: 5px;
    }
    a {
      font-weight: bold;
      color: rgba(255,255,255,0.75);
      &:hover{
        color: rgba(255,255,255,1);
      }
    }
  }
  .searchInputBox{
    position: relative;
  }
  input[type="search"] {
      -webkit-appearance: searchfield;
      box-sizing: border-box;
  }
  .searchInput{
    -webkit-appearance: none;
    background: transparent;
    border: none;
    color: white;
    font: inherit;
    outline: none;
    padding: 0;
    position: relative;
    width: 100%;
  }
}

.main-header{
  position: sticky;
  z-index: 1001;
  top:0;
  left: 0;
  right: 0;
  height: 3.6rem;
}
.header-style{
  // background-color: rgba(255, 255, 255, 0.980392);
  // background-color: #24292e;
  // box-shadow: rgba(0, 0, 0, 0.0784314) 0px 1px 12px;
  background-color: #436b92;
  box-shadow: rgba(0, 0, 0, 0.77) 0px 1px 12px;
} 
</style>
