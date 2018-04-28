/* global Vue */

/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/index.vue');
/* eslint-disable no-new */
const that = new Vue(Vue.util.extend({ el: '#root', router }, App))
router.push('/')

console.log(3333)
console.log(that.$router.currentRoute.name)
var globalEvent = weex.requireModule('globalEvent');
globalEvent.addEventListener('androidback', function(e) {
    // 这里就可以做返回事件操作了，如返回上一页或退出应用
    if (that.$router.currentRoute.name == 'Home') {
        weex.requireModule('close').closeApp()
    } else {
        that.$router.go(-1);
    }
})