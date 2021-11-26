<template>
  <view class="home_wrapper">
    <div class='box'></div>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  onLoad() {

  },
  onReachBottom() {
    console.log('====----', this.page)
    if(this.page >= 3) return ;
    this.status = 'loading';
    this.page = ++ this.page;
    setTimeout(() => {
      this.list += 10;
      if(this.page >= 3) this.status = 'nomore';
      else this.status = 'loading';
    }, 2000)
  },
  onPullDownRefresh() {
    console.log('====', this.page)
    //监听用户下拉动作，一般用于下拉刷新
    // Object.assign(this.params, {page: 1, limit: 10});
    // this.fetchData();
    this.$nextTick(() => {
      uni.stopPullDownRefresh();
    })
  },
  methods: {

  }
}
</script>

<style>
.home_wrapper {
  background-color: #0a1218;
  height: 100vh;
}
.box {
  width: 200px;
  height: 200px;
  display: inline-block;
  background-color: orange;
  color: orange;
  border-radius: 50%;
  /* border: 10px solid transparent; */
  box-shadow: inset 0 0 0 10px rgba(255, 255, 255, 0.2), inset 0 0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 0 30px rgba(255, 255, 255, 0.4), inset 0 0 0 40px rgba(255, 255, 255, 0.5);
  -webkit-transform: rotate(4deg);
  transform: rotate(4deg);
  -webkit-transition: box-shadow 600ms ease, -webkit-transform 600ms ease;
  transition: box-shadow 600ms ease, -webkit-transform 600ms ease;
  transition: box-shadow 600ms ease, transform 600ms ease;
  transition: box-shadow 600ms ease, transform 600ms ease, -webkit-transform 600ms ease;
  cursor: pointer;
}
.box:nth-child(2n+1) {
  border-top-left-radius: 59%;
  background-color: red;
}
.box:nth-child(3n+2) {
  border-top-right-radius: 52%;
  background-color: green;
}
.box:nth-child(5n+3) {
  border-bottom-left-radius: 59%;
  background-color: purple;
}
.box:nth-child(7n+5) {
  border-bottom-right-radius: 56%;
  background-color: blue;
}
.box:nth-child(11n+7) {
  border-bottom-right-radius: 53%;
  background-color: pink;
}
</style>
