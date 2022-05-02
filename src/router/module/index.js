/**
 * Created by Leo
 * Date: 2022-05-02 08:04
 * Email: asdfpeng@qq.com
 */
const files = require.context('.', false, /\.js$/)
const modules = []

files.keys().forEach(key => {
    if (key === './index.js') return
    const item = files(key).default
    modules.push(...item)
})

export default modules