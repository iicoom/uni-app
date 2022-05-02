<template>
  <view class="wrap">
    <view class="top">
      <text class="dot h3">选择你的居住城市</text>
      <text>优先为你推荐本地的{{target}}</text>
    </view>
    <u-icon name="map-fill" size="48" class="center"></u-icon>
    <u-button type="primary" shape="circle" :ripple="true" class="custom_button center" @click="getLocation">快速获取定位</u-button>
    <u-button type="primary" shape="circle" :ripple="true" class="custom_button center" @click="showPicker">选择城市</u-button>
    <u-picker v-model="show" mode="region"></u-picker>
    <u-button v-if="location" type="primary" shape="circle" :ripple="true" class="custom_button center" @click="GoNext">下一步</u-button>
  </view>
</template>

<script>
export default {
  name: "location",
  data() {
    return {
      gender: '',
      target: '',
      location: '',
      show: false
    }
  },
  onLoad() {
    this.gender = this.$Route.query.gender
    this.target = this.$Route.query.gender === '男生'?'女生':'男生'
  },
  methods: {
    getLocation() {
      // todo
      uni.getLocation({
        type: 'wgs84',
        success: function (res) {
          console.log('当前位置的经度：' + res.longitude);
          console.log('当前位置的纬度：' + res.latitude);
        }
      });
    },
    showPicker() {
      this.show = true
    },
    setLocation(val) {
      this.location = val
    },
    GoNext() {
      this.$Router.push({ path: '/pages/newbie/birth', query: { gender: this.value }})
    }
  }
}
</script>

<style scoped>
.wrap {
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.custom_button center {
  color: #2a2d33;
  width: 400rpx;
}
</style>