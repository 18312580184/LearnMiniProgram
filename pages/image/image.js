// pages/image/image.js
Page({

    data: {
        imagePath: ''
    },
    handle() {
        // 选择图片
        wx.chooseImage({
            success: (res) => {
                // 把图片路径给path
                const path = res.tempFilePaths[0]

                // 设置路径
                this.setData({
                    imagePath: path
                })
            },
        })
    },
    handleImageLoad() {
        console.log('图片加载完成了')
    }
})