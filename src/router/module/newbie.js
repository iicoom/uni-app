/**
 * Created by Leo
 * Date: 2022-05-02 08:06
 * Email: asdfpeng@qq.com
 */
const newbie = [
    {
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
        path: '/pages/newbie/phone',
        aliasPath:'/',              //对于h5端你必须在首页加上aliasPath并设置为/
        name: 'phone',
        meta: {
            title: '手机号',
        },
    },
    {
        path: '/pages/newbie/gender',
        name: 'gender',
        meta: {
            title: '性别',
        },
    },
    {
        path: '/pages/newbie/birth',
        name: 'birth',
        meta: {
            title: '生日',
        },
    },
    {
        path: '/pages/newbie/location',
        name: 'location',
        meta: {
            title: '居住城市',
        },
    },
]
export default newbie