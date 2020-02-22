// pages/input/input.js
Page({
    bindinput(event) {
        console.log('用户输入内容触发',event)
    },
    bindfocusH(event) {
        console.log('用户获取焦点触发', event)
    },
    bindblurS(event) {
        console.log('用户失去焦点触发', event)
    }
})