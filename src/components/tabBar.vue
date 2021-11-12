<template>
  <view class="tab-bar">
    <view v-for="(item,index) in list" :key="index" class="tab-bar-item" @click="switchTab(item, index)">
      <image v-if="active === index" class="tab_img_s" :src="item.selectedIconPath"></image>
      <image v-else class="tab_img" :src="item.iconPath"></image>
      <view class="tab_text" :style="{color: selected === index ? selectedColor : color}">{{item.text}}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "tabBar",
  props: {
    selected: { // 当前选中的tab index
      type: Number,
      default: 0
    },
    userIdentity: { // 当前角色
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      color: "#333333",
      selectedColor: "#333333",
      list: [{
        pagePath: "/pages/patientHome/patientHome",
        iconPath: "/static/tab_bar/home1.png",
        selectedIconPath: "/static/tab_bar/shouye.gif",
        text: "首页"
      }, {
        pagePath: "/pages/article/articleList",
        iconPath: "/static/tab_bar/home1.png",
        selectedIconPath: "/static/tab_bar/home2.png",
        text: "新增"
      }, {
        pagePath: "/pages/mine/mine",
        iconPath: "/static/tab_bar/personal1.png",
        selectedIconPath: "/static/tab_bar/personal2.png",
        text: "我的"
      }],
      active: 1
    }
  },
  methods: {
    switchTab(item, index) {
      console.log("item", item.pagePath)
      this.active = index
      let url = item.pagePath;
      uni.switchTab({
        url
      })
    }
  }
}
</script>

<style lang="scss">
.tab-bar {
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  .tab-bar-item {
    text-align: center;
    height: auto;
    .tab_img {
      width: 45rpx;
      height: 45rpx;
    }
    .tab_text {
      font-size: 20rpx;
      padding-bottom: 10rpx;
    }
    .tab_img_s {
      width: 50rpx;
      height: 50rpx;
      border-radius: 50%;
      padding: 10rpx;
      box-sizing: border-box;
      transform: scale(1.3) translateY(-5rpx);
      background-color: yellow;
      transition: all 100ms cubic-bezier(.05,1.19,.45,1.04);
    }
  }
}
</style>
