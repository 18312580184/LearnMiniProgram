// const app = getApp()
// const name = app.globalData.name;
// const age = app.globalData.age;

Page({
    data: {
        name: "Zard1996",
        age: 18,
        students: [{
                id: 100,
                name: 'Jams',
                age: 18
            },
            {
                id: 101,
                name: 'Zard',
                age: 18
            },
            {
                id: 102,
                name: 'Boke',
                age: 18
            }
        ],
        count: 0,
        list:[]
    },
    // 双向数据绑定
    countjia() {
        this.setData({
            count: this.data.count += 1
        })
    },
    // 双向数据绑定
    countjian() {
        this.setData({
            count: this.data.count -= 1
        })
    },
    // 获取用户信息
    handleGetUserInfo(event) {
        console.log(event)
    },
    // 生命周期函数
    onLoad() {
        // 请求数据
        wx.request({
            url: 'http://123.207.32.32:8000/api/hy/recommend',
            success: (res) => {
                const data = res.data.data.list
                this.setData({
                    list:data
                })
            }
        })
    },
    onReady() {
        console.log('onReady')
    },
    onShow() {
        console.log('onShow')
    },
    onHide() {
        console.log('onHide')
    },
    onUnload() {
        console.log('onUnload')
    },
    onPageScroll(obj){
        console.log(obj)
    }
})