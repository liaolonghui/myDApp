<template>
  <div class="index">
    <nav id="nav">
      <div>
        <img src="../assets/logo.png" alt="logo" width="60">
        <ul>
          <router-link to="/">Home</router-link>
          <router-link to="/shop">Shop</router-link>
          <router-link to="/forums">Forums</router-link>
          <router-link to="/markets">Markets</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/buyNow">BuyNow</router-link>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style>
#nav {
  height: 80px;
  line-height: 80px;
  background-color: rgba(100, 100, 100, 0.3);
}
#nav div {
  width: 70%;
  margin: 0 auto;
}
#nav img {
  margin: 10px;
}
#nav div ul {
  float: right;
}
#nav a {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 0 5px;
  text-align: center;
  font-size: 15px;
  color: #aaa;
}
#nav a:hover {
  color: #fafafa;
  border-bottom: 3px solid #fafafa;
}
#nav a.router-link-exact-active {
  color: #fafafa;
  border-bottom: 3px solid #fafafa;
}
</style>
