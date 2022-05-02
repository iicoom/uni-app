<template>
  <view class="mine_wrapper">
    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1950897221,3940311257&fm=26&gp=0.jpg" alt="">
    <div class="avatar"></div>
  </view>
</template>

<script>
export default {
  name: "mine"
}
</script>

<style scoped>
.mine_wrapper {
  perspective: 1000px;
  perspective-origin: 0 0;
}
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  color: #fff;
  box-shadow: 0 0 0 1000px, 0 0 0 2px purple inset;
  animation: rotate 3s infinite alternate;
  transform: rotate3D(0, 1, 0.1 -30deg);
  margin: 0 auto;
}
img {
  width: 100%;
  position: absolute;
  transform: translateZ(-500px);
  animation: move 5s infinite;
}
@keyframes rotate {
  to {
    transform: rotate3d(0, 1, 0.1, 30deg);
  }
}
@keyframes move {
  40% {
    transform: translateZ(-100px);
  }
}
</style>