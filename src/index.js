import Vue from '../node_modules/vue/dist/vue.js'
import swal from 'sweetalert'

new Vue({
    el: '#app',
    data: {
        date: '2021年9月1日',
        color: '黑',
        circle: 'c++',
        game: 'Visual Studio',
        price: '2w人民币'
    }
})

if (document.cookie.replace(/(?:(?:^|.*;\s*)dialog\s*=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
    swal('未成年人防沉迷系统调整说明', '亲爱的开发者：\n' +
        '\n' +
        '为了积极响应中国政府印发的《关于进一步严格管理 切实防止未成年人沉迷网络游戏的通知》，守护未成年人的成长环境，引导未成年人享受健康游戏环境，ParentGenerator(后称PG)未成年人防沉迷系统将于 2021 年 8 月 31 日 0 点进行调整。\n' +
        '\n' +
        '根据相关通知的要求：\n' +
        '\n' +
        '调整后，PG项目仅会在周五、周六、周日和法定节假日的 20 时至 21 时，向未成年人提供 1 小时使用时间。\n' +
        '\n' +
        '此外，PG项目不会以任何形式向未实名注册和登录的用户提供服务。\n' +
        '\n' +
        '关于未成年人防沉迷系统进行相应调整后可能带来的体验变化，我们将尽快在后续提供处理说明，请大家关注官方公告。\n' +
        '\n' +
        '感谢各位用户的支持和理解。').then()
    document.cookie = "dialog=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"
}
