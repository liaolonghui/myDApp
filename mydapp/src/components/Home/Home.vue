<template>
  <div class="home">
    <div class="prep">
      <h1>XX币</h1>
      <p>How to Buy XX币</p>
    </div>
    <main class="main">
      <div class="container">
        <!-- card1 -->
        <div class="card1">
          <div class="left">
            <h2>How to Buy Safemoon</h2>
            <p>A step by step guide on how to buy Safemoon from Pancakeswap.</p>
          </div>
          <div class="right">
            <router-link tag="button" to="/markets" class="btn-red">Markets</router-link>
            <router-link tag="button" to="/" class="btn-blue">Buy on Pancake</router-link>
          </div>
          <div class="warn">
            <i class="iconfont icon-warn"></i>
            <p>Looking for an easier way to buy and sell safemoon?</p>
            <router-link to="/markets">
              See alternative markets!
              <i class="iconfont icon-fenxiang"></i>
            </router-link>
          </div>
        </div>
        <!-- card2 -->
        <div class="card2">
          <h3>Video Guide</h3>
          <p>Click here if you would prefer a video guide instead!</p>
        </div>
        <!-- steps -->
        <div class="steps12">
          <div class="steps-container">
            <!-- step1 -->
            <div class="step">
              <p class="text-warn">Recommended to read on PC, and follow along on your Phone to make it easier. This will take approximately 15-30 minutes if you're new.</p>
              <h2 class="step-title">Step 1: Create a Wallet</h2>
              <p>
                Download
                <a href="https://trustwallet.com/" target="_blank" class="text-green">Trust Wallet</a>
                and create a wallet. Keep your phrase a secret! Never share it with anyone and store it properly!
                <span class="text-warn">Make sure to copy the contract address below!</span>
              </p>
            </div>
            <!-- step2 -->
            <div class="step">
              <h2 class="step-title">Step 2: Add Safemoon to the Wallet</h2>
              <p>Tap the icon in the top-right and search for "Safemoon". If it's not there, tap "Add Custom Token".</p>
              <p>At the top, tap "Ethereum" next to Network, and change it to "Smart Chain". Copy the contract address on this page and put it in the Contract Address box.</p>
              <p>Next, put "Safemoon" as the name, and the symbol as SFM. Decimals will be 9.</p>
              <p>Click "Done" at the top and you should now have Safemoon added to your wallet!</p>
            </div>
          </div>
          <div class="img-box">
            <img src="../../assets/images/step1.jpg" alt="" width="290" height="425">
          </div>
        </div>
        <div class="steps34">
          <!-- step3 -->
          <div class="step">
            <h2 class="step-title">Step 3: Buy "Binance Smart Chain" (BSC)</h2>
            <p>Tap on "Smart Chain" on the main screen of trust wallet, then tap "Buy" in the top right. This step may require KYC verification, so have documents ready to prove your identity.</p>
            <p class="text-warn">If the transaction won't go through, you may need to contact your bank to allow international transactions.</p>
            <p>After purchasing, there may be a delay while your transaction is processed. Be patient, this is normal!</p>
          </div>
          <!-- step4 -->
          <div class="step">
            <h2 class="step-title">Step 4: Swap BSC for Safemoon!</h2>
            <p>
              Once your transaction has been cleared, and you have BSC on your Trust Wallet,
              Go to DApps (or "Browser" for iPhones) at the bottom of the main screen. If
              the Browser button is not visible at the bottom for iPhone, open Safari and in the URL type
              <code style="color: pink;">trust://browser_enable</code>
              , then return to trust wallet.
            </p>
            <p>
              <img src="../../assets/images/step3.jpg" alt="" width="290" height="auto" style="float: right">
              Open the DApps, or Browser, section and find PancakeSwap and open it. Connect your
              Trust Wallet in the top-right. Scroll down a little to the "Exchange" box
            </p>
            <p>
              Click the <i></i>
              icon and set the slippage to 12%. If you want to give it the best possible change to clear,
              increase the deadline. By default it should be set to 20 minutes, which is fine.
            </p>
            <img src="../../assets/images/step2.jpg" alt="" width="300" height="290">
            <p>
              Once the slippage is set, and you have the BNB amount set that you wish to swap for safemoon as shown,
              just click Swap and wait patiently for the transaction to clear. This process may not be instant and can
              take anywhere from a few minutes up to an hour sometimes, depending on traffic.
            </p>
            <p>Once the transaction has been cleared, you should have Safemoon in your Trust Wallet!</p>
            <p>Now all that's left is to <span class="text-green">HODL!</span></p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.home .prep {
  height: 300px;
  width: 70%;
  padding-top: 100px;
  margin: 0 auto;
}
.home .main {
  width: 100%;
  background-color: #222;
}
.home main .container {
  width: 70%;
  min-height: 500px;
  margin: 0 auto;
  padding-top: 20px;
}
/* card1 */
.home .card1 {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  color: #ddd;
  background-color: #444;
}
.home .card1 .left {
  flex: 1;
}
.home .card1 .right {
  width: 200px;
}
.home .card1 button {
  width: 150px;
  padding: 10px;
  color: #fff;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
}
.home .card1 button:hover {
  color: #ddd;
  margin-top: -3px;
  margin-bottom: 3px;
}
.btn-red {
  background: linear-gradient(87deg,#f5365c,#f56036)!important;
}
.btn-blue {
  background: linear-gradient(87deg,#11cdef,#1171ef)!important;
}
.home .card1 .warn {
  width: 100%;
  margin-top: 30px;
  padding-top: 5px;
}
.home .card1 .warn a {
  color: red;
}
.home .card1 .warn>i {
  float: left;
  color: red;
  font-size: 50px;
}
.card1 .warn>p {
  padding: 10px 0 0 70px;
}
.card1 .warn>a {
  padding-left: 20px;
}
/* card2 */
.card2 {
  width: 100%;
  padding: 30px;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 5px;
  color: #ddd;
  background-color: #444;
}
.card2>p {
  cursor: pointer;
}
/* steps (包含steps12和steps34) */
.steps12 {
  display: flex;
}
.step {
  padding-bottom: 30px;
  border-bottom: 3px solid #aaa;
}
.step>p {
  line-height: 25px;
  margin-bottom: 15px;
}
.steps12>.steps-container {
  flex: 1;
  padding-right: 30px;
}
.text-warn {
  color: #fd7e14;
}
.text-green {
  color: #198754;
}
.step-title {
  margin-top: 20px;
  margin-bottom: 10px;
  color: #198754;
}
.img-box {
  width: 300px;
}
</style>
