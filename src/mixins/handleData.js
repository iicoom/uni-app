/**
 * Created by Leo
 * Date: 2021-11-11 22:41
 * Email: asdfpeng@qq.com
 */
const handleData = {
    data() {
        return {
            articleList: [],
        }
    },
    methods: {
        handleDataList(res, type) {
            if (this.params.hasOwnProperty('page') && this.params.page == 1) {
                this.articleList = [];
            }
            if (res && res[type] && res[type].length) {
                this.articleList = this.articleList.concat(res[type]);
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