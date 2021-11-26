<template>
  <view>
    <u-navbar
        back-icon-color="#fff"
        back-icon-size="40"
        back-text=""
        :back-text-style="backStyle"
        title=""
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
        backgroundColor: '#0a1117'
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
