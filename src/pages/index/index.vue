<template>
  <view class="index_wrapper">
    <article-list />
  </view>
</template>

<script>
// import tabBar from "../../components/tabBar.vue"
import navBar from "../../components/navBar";
import articleList from "../article/articleList";

export default {
  components: {
    navBar,
    // tabBar,
    articleList
  },
  data() {
    return {
    }
  },
  onLoad() {

  },
  onReachBottom() {
    console.log('====----', this.page)
    if(this.page >= 3) return ;
    this.status = 'loading';
    this.page = ++ this.page;
    setTimeout(() => {
      this.list += 10;
      if(this.page >= 3) this.status = 'nomore';
      else this.status = 'loading';
    }, 2000)
  },
  onPullDownRefresh() {
    console.log('====', this.page)
    //监听用户下拉动作，一般用于下拉刷新
    // Object.assign(this.params, {page: 1, limit: 10});
    // this.fetchData();
    this.$nextTick(() => {
      uni.stopPullDownRefresh();
    })
  },
  methods: {

  }
}
</script>

<style>
.index_wrapper {

}
</style>
