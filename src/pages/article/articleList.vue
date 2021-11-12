<template>
  <view class="container">
    <u-empty v-if="articleList.length===0" text="所谓伊人，在水一方" mode="list"></u-empty>
    <u-card v-for="(item,index) in articleList" :key="index" :title="item.title" :sub-title="subTitle"
            thumb="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg">
      <view class="" slot="body">
        <view class="u-body-item-title u-line-2">{{ item.abstract }}</view>
      </view>
    </u-card>
    <u-loadmore :status="status" :icon-type="iconType" :load-text="loadText" />
  </view>
</template>

<script>
import handleData from "../../mixins/handleData";
import {getArticleList} from "../../utils/http";

export default {
  name: "articleList",
  mixins: [handleData],
  data() {
    return {
      params: {
        page: 1,
        limit: 10,
      },
      title: 'la',
      subTitle: 'lll'
    }
  },
  mounted() {
    this.fetchData()
  },
  onReachBottom() {
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
    Object.assign(this.params, {page: 1, limit: 10});
    this.fetchData();
    this.$nextTick(() => {
      uni.stopPullDownRefresh();
    })
  },
  methods: {
    async fetchData() {
      let res = await getArticleList(this.params);
      this.handleDataList(res);
    },
  }
}
</script>

<style scoped>
.container {
  height: 95vh;
}
</style>
