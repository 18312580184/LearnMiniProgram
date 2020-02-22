Page({
    data: {
        // toLocaleString 可以转成本地时间，字符串形式
        nowTime: new Date().toLocaleString(),
        isActive: false
    },
    onLoad() {
        setInterval(() => {
            this.setData({
                nowTime: new Date().toLocaleString()
            })
        }, 1000)
    },
    switchColor() {
        this.setData({
            isActive: !this.data.isActive
        })
    }

})