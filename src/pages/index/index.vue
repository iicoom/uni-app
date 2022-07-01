<template>
  <view style="padding: 20px; height: 200vh;">
    <u-notice-bar :text="text1"></u-notice-bar>
    <u-swiper
        :list="list1"
        indicator
    ></u-swiper>
    <u-gap height="10"></u-gap>
    <u-gap height="10"></u-gap>
    <u-skeleton
        rows="3"
        title
        loading
        avatar
    ></u-skeleton>
    <u-back-top :scroll-top="scrollTop" icon="arrow-up" text="返回"></u-back-top>
    <u-gap height="10"></u-gap>
    <u-subsection :list="list2" :current="current" @change="sectionChange"></u-subsection>
    <u-empty
        mode="car"
        icon="http://cdn.uviewui.com/uview/empty/car.png"
    >
    </u-empty>
    <u-tabbar
        :value="value1"
        @change="change1"
        fixed
        :placeholder="false"
        :safeAreaInsetBottom="false"
    >
      <u-tabbar-item text="首页" icon="home" @click="click1" ></u-tabbar-item>
      <u-tabbar-item text="放映厅" icon="photo" @click="click1" ></u-tabbar-item>
      <u-tabbar-item text="直播" icon="play-right" @click="click1" ></u-tabbar-item>
      <u-tabbar-item text="我的" icon="account" @click="click1" ></u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list1: [
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
      ],
      scrollTop: 0,
      list2: ['未付款', '待评价', '已付款'],
      // 或者如下，也可以配置keyName参数修改对象键名
      // list: [{name: '未付款'}, {name: '待评价'}, {name: '已付款'}],
      current: 1,
      text1: 'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用'
    }
  },
  onInit() {},
  onLoad() {
    this.$API.GetArticleList({page: 1,limit: 3})
  },
  // 只有在page中的方法才会被触发
  onReachBottom() {
    console.log('====onReachBottom')
  },
  onPullDownRefresh() {
    console.log('====onPullDownRefresh')
  },
  methods: {
    click1(e) {
      console.log('click1', e);
    },
    sectionChange(index) {
      console.log('change')
      this.current = index
    }
  }
}
</script>

<style>

</style>
