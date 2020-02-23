// pages/bind/bind.js
Page({

    data: {
        shop: ['衣服', '裤子', '鞋子']
    },
    touchstart(e) {
        console.log('开始', e)
    },
    touchmove(e) {
        console.log('移动', e)
    },
    touchend(e) {
        console.log('结束', e)
    },
    tap(e) {
        console.log('轻点', e)
    },
    longpress(e) {
        console.log('长按', e)
    },
    bindtapClick(e) {
        console.log(e)
        const setdata = e.currentTarget.dataset
        const item = setdata.item
        const index = setdata.index
        console.log(item, index)
    },
    bu1() {
        console.log('bu1-外')
    },
    bu2() {
        console.log('bu1-中')
    },
    bu3() {
        console.log('bu1-里')
    },
    mao1() {
        console.log('mao1-外')
    },
    mao2() {
        console.log('mao2-中')
    },
    mao3() {
        console.log('mao3-里')
    }


})