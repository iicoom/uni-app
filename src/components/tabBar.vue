<template>
  <view class="tab-bar">
    <view v-for="(item,index) in list" :key="index" class="tab-bar-item" @click="switchTab(item, index)">
      <image v-if="selected === index" class="tab_img_s" :src="item.selectedIconPath"></image>
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
        selectedIconPath: "/static/images/home2.png",
        text: "首页"
      }, {
        pagePath: "/pages/mine/mine",
        iconPath: "/static/tab_bar/home1.png",
        selectedIconPath: "/static/tab_bar/home2.png",
        text: "新增"
      }, {
        pagePath: "/pages/mine/mine",
        iconPath: "/static/tab_bar/personal1.png",
        selectedIconPath: "/static/tab_bar/personal2.png",
        text: "我的"
      }]
    }
  },
  methods: {
    switchTab(item, index) {
      console.log("item", item)
      console.log("index", index)
      this.selected = index
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
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  background-color: #de7272;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom);
  .tab-bar-item {
    flex: 1;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    .tab_img {
      width: 37rpx;
      height: 41rpx;
    }
    .tab_text {
      font-size: 20rpx;
      margin-top: 9rpx;
    }
    .tab_img_s {
      width: 37rpx;
      height: 41rpx;
      border-radius: 50%;
      padding: 6rpx 8rpx;
      transform: scale(1.2) translateY(-10rpx);
      background-color: #de7272;
    }
  }
}
</style>
