# uni-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 问题记录
### Syntax Error: TypeError: this.getOptions is not a function
[解决方法](https://blog.csdn.net/qq_38157825/article/details/114318772)

### pages.json中设置启动页
```
// pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
```

### 在pages.json中配置了tabBar不显示，display: none。是因为当前展示的页面不在配置的tabBar list中。
```json
"tabBar": {
    "color": "#999999",
    "selectedColor": "#ED5511",
    "borderStyle": "white",
    "backgroundColor": "rgba(255,255,255,0.3)",
    "height": "60px",
    "blurEffect": "extralight",
    "list": [
        {
            "pagePath": "pages/index/index",
            "iconPath": "static/tab_bar/home.png",
            "selectedIconPath": "static/tab_bar/home_active.png",
            "text": "首页"
        },
        {
            "pagePath": "pages/user/user",
            "iconPath": "static/tab_bar/mine.png",
            "selectedIconPath": "static/tab_bar/mine_active.png",
            "text": "我的"
        }
    ],
    "midButton": {
        "iconPath": "static/tab_bar/center.jpeg",
        "width": "80px",
        "height": "50px",
        "text": "新增",
        "backgroundImage": "static/tab_bar/center.jpeg"
    }
}
```

### 自定义tabBar
需要在pages.json中移除tabBar配置，自己写tabBar组件[参考](https://www.jianshu.com/p/18d8c7ad7da4)

