<template>
  <view class="wrap">
    <view class="top">
      <text class="dot h3">选择你的生日</text>
      <text>为你推荐年龄适配的{{target}}</text>
    </view>
    <u-icon name="gift-fill" size="48" class="center"></u-icon>
    <text v-if="birth" class="lodash">{{ t }}</text>
    <u-button type="primary" shape="circle" plain :ripple="true" class="custom_button center" @click="showPicker">点击选择生日</u-button>
    <u-picker v-model="show" mode="time" confirm-color="#1be9c9" @confirm="setBirth"></u-picker>
    <u-button :disabled="!birth" type="primary" shape="circle" :ripple="true" class="custom_button center" @click="GoNext">下一步</u-button>
  </view>
</template>

<script>
import { FormatTimeStamp } from '../../utils/time'

export default {
  name: "birth",
  data() {
    return {
      gender: '',
      target: '',
      show: false,
      birth: ''
    }
  },
  computed: {
    t() {
      return FormatTimeStamp(this.birth, 'd')
    }
  },
  onLoad() {
    this.gender = this.$Route.query.gender
    this.target = this.$Route.query.gender === '男生'?'女生':'男生'
  },
  methods: {
    showPicker() {
      this.show = true
    },
    setBirth(val) {
      this.birth = val.timestamp
    },
    GoNext() {
      this.$Router.push({ path: '/pages/newbie/location', query: { gender: this.gender }})
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
.lodash {
  width: 50%;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  margin: 0 auto;
}
</style>