<template>
  <div class="pools">
    <header>
      <h1>Syrup Pools</h1>
      <p>Simply stake tokens to earn.</p>
      <p>High APR, low risk.</p>
    </header>
    <article>
      <nav>
        <span>
          Staked only
          <el-switch
            v-model="stakedOnly"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </span>
      </nav>
      <div class="content">
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="height: 80px; background-color: #fafafa; padding: 10px;">
            <img src="../assets/images/lowb.svg" alt="" width="64" height="64" style="float: right;">
            <p>Earn LOWB</p>
            <p>Stake RBT</p>
          </div>
          <div class="APR" title="。。。略。。。">
            APR:
          </div>
          <p>START EARNING</p>
          <el-button type="primary" round  @click="$emit('showDialog')">Unlock Wallet</el-button>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="height: 80px; background-color: #fafafa; padding: 10px;">
            <img src="../assets/images/lowb.svg" alt="" width="64" height="64" style="float: right;">
            <p>Earn LOWB</p>
            <p>Stake RBT</p>
          </div>
          <div class="APR" title="。。。略。。。">
            APR:
          </div>
          <p>START EARNING</p>
          <el-button type="primary" round  @click="$emit('showDialog')">Unlock Wallet</el-button>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="height: 80px; background-color: #fafafa; padding: 10px;">
            <img src="../assets/images/lowb.svg" alt="" width="64" height="64" style="float: right;">
            <p>Earn LOWB</p>
            <p>Stake RBT</p>
          </div>
          <div class="APR" title="。。。略。。。">
            APR:
          </div>
          <p>START EARNING</p>
          <el-button type="primary" round @click="$emit('showDialog')">Unlock Wallet</el-button>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="height: 80px; background-color: #fafafa; padding: 10px;">
            <img src="../assets/images/lowb.svg" alt="" width="64" height="64" style="float: right;">
            <p>Earn LOWB</p>
            <p>Stake RBT</p>
          </div>
          <div class="APR" title="。。。略。。。">
            APR:
          </div>
          <p>START EARNING</p>
          <el-button type="primary" round  @click="$emit('showDialog')">Unlock Wallet</el-button>
        </el-card>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stakedOnly: false
    }
  },
}
</script>

<style>
  .pools {
    width: 100%;
  }
  .pools header {
    height: 185px;
    padding: 30px 20px;
    background: linear-gradient(139.73deg, rgb(229, 253, 255) 0%, rgb(243, 239, 255) 100%);
  }
  .pools h1 {
    padding: 10px 0;
    font-size: 60px;
    color: #7645d9;
  }
  .pools p {
    font-weight: 800;
    font-size: 15px;
    color: #280d5f;
  }
  .pools article {
    padding: 20px 30px;
  }
  .pools .box-card {
    display: inline-block;
    width: 30%;
    margin-top: 10px;
    margin-right: 10px;
  }
  .el-card__header {
    padding: 0 !important;
  }
  .pools .box-card .APR {
    height: 60px;
    line-height: 60px;
    text-decoration: black;
  }
</style>
