/**
 * Created by Leo
 * Date: 2021-11-11 22:41
 * Email: asdfpeng@qq.com
 */
const handleData = {
    data() {
        return {
            status: 'loadmore',
            iconType: 'flower',
            loadText: {
                loadmore: '轻轻上拉',
                loading: '努力加载中',
                nomore: '实在没有了'
            },
            articleList: [],
        }
    },
    methods: {
        handleDataList(res, type) {
            if (res && res.list.length > 0) {
                this.articleList = this.articleList.concat(res.list);
                if (res.total <= this.articleList.length) {
                    this.status = 'nomore';
                } else {
                    this.status = 'loadmore';
                }
            } else {
                if (this.articleList.length) {
                    this.status = 'nomore';
                } else {
                    this.handleEmpty();
                }
            }
        },
        handleEmpty() {
            this.articleList = [];
            this.myEmpty = true;
            this.loadMoreShow = false;
        },
        handleSearchInit() {
            this.articleList = [];
            this.myEmpty = false;
            this.loadMoreShow = false;
        },
        showLoadMore() {
            this.loadMoreShow = true;
        },
        HideLoadMore() {
            this.loadMoreShow = false;
        },
        stopPullDown() {
            uni.stopPullDownRefresh();
        },
    }
}
export default handleData
