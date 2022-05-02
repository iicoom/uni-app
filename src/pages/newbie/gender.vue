<template>
  <view class="wrap">
    <view class="top">
      <text class="dot h3">选择你的性别</text>
      <text>为你推荐优质的异性嘉宾</text>
    </view>
    <view>
      <view class="center">
        <image src="../../static/male.png" class="gender_image"></image>
        <image src="../../static/female.png" class="gender_image"></image>
      </view>
      <u-gap height="30"></u-gap>
      <view class="center">
        <u-radio-group v-model="value" @change="radioGroupChange">
          <u-radio
              class="custom_radio"
              shape="circle"
              active-color="#1be9c9"
              @change="radioChange"
              v-for="(item, index) in list" :key="index"
              :name="item.name"
          >
            {{item.name}}
          </u-radio>
        </u-radio-group>
      </view>
    </view>
    <text>注意：注册成功后性别将不可修改</text>
    <u-button type="primary" shape="circle" :ripple="true" class="custom_button center" @click="GoNext">下一步</u-button>
  </view>
</template>

<script>
export default {
  name: "gender",
  data() {
    return {
      list: [{name: "男生"}, {name: "女生"}],
      value: '男生'
    }
  },
  onLoad(...options){
    //  自己打印来看看咯
    // console.log(options)
    // console.log(this.$Route)
  },
  methods: {
    radioGroupChange(val) {
      console.log(val)
    },
    radioChange() {

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
.center {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
}
.gender_image {
  width: 75px;
  height: 95px;
  border-radius: 5px;
}
.custom_radio {
  border: 1px solid #1be9c9;
  padding: 3px 8px;
  border-radius: 20px;
}
.custom_radio:first-child {
  margin-right: 45px;
}
</style>