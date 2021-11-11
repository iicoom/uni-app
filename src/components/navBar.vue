<template>
  <view>
    <u-navbar
        back-icon-color="#fff"
        back-icon-size="28"
        back-text="返回"
        :back-text-style="backStyle"
        title="剑未配妥，出门已是江湖"
        title-color="#fff"
        :background="background"
    ></u-navbar>
  </view>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      background: {
        // backgroundColor: '#001f3f',

        // 导航栏背景图
        // background: 'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat',
        // 还可以设置背景图size属性
        // backgroundSize: 'cover',

        // 渐变色
        backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
      },
      backStyle: {
        color: '#fff'
      }
    }
  }
}
</script>

<style scoped>

</style>
