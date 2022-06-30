<template>
  <view class="index_wrapper">
    <article-list />
    <!--
    <tabBar/>
    -->
  </view>
</template>

<script>
import tabBar from "../../components/tabBar.vue"
import navBar from "../../components/navBar";
import articleList from "../article/articleList";

export default {
  components: {
    navBar,
    tabBar,
    articleList
  },
  data() {
    return {}
  },
  onInit() {},
  onLoad() {},
  // 只有在page中的方法才会被触发
  onReachBottom() {
    console.log('====onReachBottom')
  },
  onPullDownRefresh() {
    console.log('====onPullDownRefresh')
  },
  methods: {}
}
</script>

<style>

</style>
