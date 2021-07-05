<template>
  <div class="home">
    <h1 align="center">XXXXSwap</h1>
    <p align="center">The #1 AMM and yield farm on Binance Smart Chain.</p>
    <el-card class="box-card">
      <h1>Farms & Staking</h1>
      <img src="../assets/images/lowb.svg" alt="logo" width="64" height="64" style="margin: 20px 0;">
      <p>LOWB to Harvest</p>
      <p class="val">Locked</p>
      <p>LOWB in Wallet</p>
      <p class="val">Locked</p>
      <el-button type="primary" round @click="$emit('showDialog')">Unlock Wallet</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
  .home {
    width: 100%;
    padding-top: 50px;
  }
  .home>h1 {
    font-size: 30px;
    color: #7645d9;
  }
  .home>p {
    font-size: 14px;
    color: #280d5f;
  }
  .home .box-card {
    margin: 50px;
  }
  .box-card h1 {
    font-size: 30px;
  }
  .box-card p {
    line-height: 25px;
    font-size: 13px;
    color: #7a61aa;
  }
  .box-card .val {
    line-height: 76px;
    color: #bdc2c4;
  }
  .box-card button {
    width: 100%;
  }
</style>
