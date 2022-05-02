<template>
  <view class="wrap">
    <view class="top">
      <text class="dot h3">绑定手机号</text>
      <text>为了你的账号安全，需要你绑定手机号</text>
    </view>
    <u-icon name="phone-fill" size="48" class="center"></u-icon>
    <u-button
        type="primary"
        shape="circle"
        :ripple="true"
        class="custom_button center"
        @click="getPhoneNumber"
    >微信授权手机号</u-button>
    <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取用户手机号</button>
  </view>
</template>

<script>
export default {
  name: "phone",
  data() {
    return {
      isShow: false,
      login_code : '',
      APPID: 'wx317d2052a4c52cd4',
      SECRET: 'e13f62c1902fb723beffff748ebac4b7',
      WX_AUTH_URL:'https://api.weixin.qq.com/sns/jscode2session'
    }
  },
  onLoad: function() {
    let that = this;
    uni.login({
      success: function (res) {
        // 获取code
        console.log(JSON.stringify(res));
        //{"errMsg":"login:ok","code":"071JIp1t1pv马赛克t1Ran1t1JIp1l"}
        that.login_code = res.code;
      }
    });
  },
  methods: {
    getPhoneNumber: function(e) {
      console.log(e);
      if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
        console.log('用户拒绝提供手机号');
      } else {
        console.log('用户同意提供手机号');

        console.log('e.detail.encryptedData',JSON.stringify(e.detail.encryptedData));
        console.log('e.detail.iv', JSON.stringify(e.detail.iv));

        let encryptedData = e.detail.encryptedData;
        let iv = e.detail.iv;

        ////////////////////////////////////////////////////////////////////////////////
        //定义在根目录下的main.js里
        //Vue.prototype.APPID                           = 'wxb1a马赛克2bfc90a';
        //Vue.prototype.SECRET                          = 'b3ae36758马赛克dbe146d9acd81d';
        //Vue.prototype.WX_AUTH_URL                     = 'https://api.weixin.qq.com/sns/jscode2session';

        let JSCODE = this.login_code;
        let APPID = this.APPID;
        let SECRET = this.SECRET;
        let wx_author_url = this.WX_AUTH_URL + '?appid=' + APPID + '&secret=' + SECRET + '&js_code=' + JSCODE + '&grant_type=authorization_code';

        console.log('wx_author_url', wx_author_url)
        uni.request({
          url : wx_author_url,
          success(re){
            console.log( 'session_key:' + re.data.session_key );

            let appId = APPID;
            let sessionKey = re.data.session_key;

            let pc = new WXBizDataCrypt(appId, sessionKey);
            let data = pc.decryptData(encryptedData, iv);

            console.log('------------------->');
            console.log('解密后 data: ', data);
            // console.log('解密后 data: ', JSON.stringify(data));
            /*
                {
                    "phoneNumber": "139马赛克9490",
                    "purePhoneNumber": "139马赛克9490",
                    "countryCode": "86",
                    "watermark": {
                        "timestamp": 1560577589,
                        "appid": "wxb1a马赛克12bfc90a"
                    }
                }
            */
            console.log('------------------->');

          }
        });
        ////////////////////////////////////////////////////////////////////////////////

      }
    },
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #f4f5f9;
}
</style>