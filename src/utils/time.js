/**
 * Created by Leo
 * Date: 2022-05-02 09:25
 * Email: asdfpeng@qq.com
 */

/**
 * 格式化时间戳
 * @param s 时间戳
 * @param f 格式
 * @constructor
 */
export function FormatTimeStamp(time_stamp, f) {
    if (time_stamp === 0 || time_stamp === undefined) {
        return '时间错误';
    } else {

        let date = new Date(time_stamp * 1000); // 处理毫秒级

        let Y = date.getFullYear();
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
        let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        if (f === 'd') {
            return `${Y}/${M}/${D}`;
        } else if (f === 'y') {
            return '👌🏻'
        }
        return `${Y}/${M}/${D} ${h}:${m}:${s}`;
    }
}

export function friendlyDate(timestamp) {
    let formats = {
        'year': '%n% 年前',
        'month': '%n% 月前',
        'day': '%n% 天前',
        'hour': '%n% 小时前',
        'minute': '%n% 分钟前',
        'second': '%n% 秒前',
    };
    let now = Date.now();
    let seconds = Math.floor((now - parseInt(timestamp)) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30);
    let years = Math.floor(months / 12);

    let diffType = '';
    let diffValue = 0;
    if (years > 0) {
        diffType = 'year';
        diffValue = years;
    } else {
        if (months > 0) {
            diffType = 'month';
            diffValue = months;
        } else {
            if (days > 0) {
                diffType = 'day';
                diffValue = days;
            } else {
                if (hours > 0) {
                    diffType = 'hour';
                    diffValue = hours;
                } else {
                    if (minutes > 0) {
                        diffType = 'minute';
                        diffValue = minutes;
                    } else {
                        diffType = 'second';
                        diffValue = seconds === 0 ? (seconds = 1) : seconds;
                    }
                }
            }
        }
    }
    return formats[diffType].replace('%n%', diffValue);
}