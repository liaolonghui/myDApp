<template>
  <div id="app">
    <header class="top-header">
      <div class="container">
        <span>这是我们的首页</span>
        <ul>
          <a href="https://github.com/liaolonghui/myDApp" target="_blank">
            <i class="iconfont icon-GitHub"></i>
          </a>
        </ul>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  min-height: 100%;
  background-color: #555;
  background: url(./assets/images/star.gif) no-repeat;
  background-size: cover;
}
.top-header {
  width: 100%;
  height: 45px;
  line-height: 45px;
  font-size: 15px;
  color: #bbb;
  background-color: #000;
}
.top-header .container {
  width: 70%;
  margin: 0 auto;
}
.top-header ul {
  float: right;
}
.top-header ul i {
  font-size: 20px;
  color: #008a81;
}
</style>
