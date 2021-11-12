<template>
  <view>
    <u-empty text="所谓伊人，在水一方" mode="list"></u-empty>
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
      status: 'loadmore',
      iconType: 'flower',
      loadText: {
        loadmore: '轻轻上拉',
        loading: '努力加载中',
        nomore: '实在没有了'
      }
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
  methods: {
    async fetchData() {
      let res = await getArticleList();
      this.handleDataList(res, 'list');
    },
  }
}
</script>

<style scoped>

</style>