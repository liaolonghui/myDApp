<template>
  <div class="farms">
    <header>
      <h1>Farms</h1>
      <p>Stake Liquidity Pool (LP) tokens to earn.</p>
    </header>
    <article>
      <nav>
        <!-- 展示方式 -->
        <span class="showType">
          <i class="el-icon-menu" :style="{color: showType=='menu'?'blue':'black'}" @click="showType='menu'"></i>
          <i class="el-icon-document" :style="{color: showType=='list'?'blue':'black'}" @click="showType='list'"></i>
        </span>
        <!-- stakedOnly -->
        <span class="stakedOnly">
          <p>Staked only</p>
          <el-switch
            v-model="stakedOnly"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </span>
        <!-- SORT BY -->
        <span class="sortBy">
          <p>SORT BY</p>
          <el-select v-model="sortType" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </span>
        <!-- SEARCH -->
        <span class="search">
          <p>SEARCH</p>
          <el-input v-model="searchFarms" placeholder="Search Farms" style="width: auto;"></el-input>
        </span>
      </nav>
      <div class="farms-item">
        <el-card class="box-card">
          <img src="../assets/images/lowb.svg" alt="lowb" width="64" height="64" style="float: left;">
          <h3>LOWB_USDT</h3>
          <span class="core">Core</span>
          <span class="x">1000X</span>
          <p>APR: 192.92%</p>
          <p>Earn: LOWB</p>
          <p>LOWB EARNED</p>
          <el-button type="primary" round  @click="$emit('showDialog')">Unlock Wallet</el-button>
        </el-card>
        <el-card class="box-card">
          <img src="../assets/images/lowb.svg" alt="lowb" width="64" height="64" style="float: left;">
          <h3>LOWB_USDT</h3>
          <span class="core">Core</span>
          <span class="x">1000X</span>
          <p>APR: 192.92%</p>
          <p>Earn: LOWB</p>
          <p>LOWB EARNED</p>
          <el-button type="primary" round  @click="$emit('showDialog')">Unlock Wallet</el-button>
        </el-card>
        <el-card class="box-card">
          <img src="../assets/images/lowb.svg" alt="lowb" width="64" height="64" style="float: left;">
          <h3>LOWB_USDT</h3>
          <span class="core">Core</span>
          <span class="x">1000X</span>
          <p>APR: 192.92%</p>
          <p>Earn: LOWB</p>
          <p>LOWB EARNED</p>
          <el-button type="primary" round  @click="$emit('showDialog')">Unlock Wallet</el-button>
        </el-card>
        <el-card class="box-card">
          <img src="../assets/images/lowb.svg" alt="lowb" width="64" height="64" style="float: left;">
          <h3>LOWB_USDT</h3>
          <span class="core">Core</span>
          <span class="x">1000X</span>
          <p>APR: 192.92%</p>
          <p>Earn: LOWB</p>
          <p>LOWB EARNED</p>
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
      stakedOnly: false,
      options: [{
        value: '1',
        label: 'HOT'
      }, {
        value: '2',
        label: 'APR'
      }, {
        value: '3',
        label: 'Multiplier'
      }, {
        value: '4',
        label: 'Earned'
      }, {
        value: '5',
        label: 'Liquidity'
      }],
      sortType: '1',
      // searchFarms
      searchFarms: '',
      // showType展示方式
      showType: 'menu'
    }
  },
}
</script>

<style>
  .farms {
    width: 100%;
  }
  .farms header {
    height: 185px;
    padding: 30px 20px;
    background: linear-gradient(139.73deg, rgb(229, 253, 255) 0%, rgb(243, 239, 255) 100%);
  }
  .farms h1 {
    padding: 10px 0;
    font-size: 60px;
    color: #7645d9;
  }
  .farms p {
    font-weight: 800;
    color: #280d5f;
  }
  /* article */
  .farms article {
    width: 100%;
    padding: 70px 0 0 50px;
    background-color: #fafafa;
  }
  .farms article>nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1000px;
  }
  .farms article>nav span {
    margin-right: 50px;
  }
  .farms article>nav span>p {
    display: inline-block;
    font-weight: normal;
    font-size: 15px;
  }
  /* article card */
  .farms-item .box-card {
    display: inline-block;
    width: 25%;
    margin: 30px 30px 0 30px;
    text-align: right;
  }
  .farms .showType>i {
    cursor: pointer;
    margin-left: 5px;
  }
  .farms-item h3 {
    margin-bottom: 20px;
  }
  .farms p {
    margin: 5px;
    font-size: 15px;
    color: black;
  }
  .farms-item .core {
    padding: 5px;
    font-size: 15px;
    color: #7645d9;
    border-radius: 25px;
    border: 2px solid #7645d9;
  }
  .farms-item .x {
    padding: 5px;
    font-size: 15px;
    color: #fff;
    border-radius: 25px;
    border: 2px solid #7645d9;
    background-color: #7645d9;
  }
</style>
