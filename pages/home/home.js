// pages/home/home.js
Page({
    handleShowToast() {
        wx.showToast({
            title: 'loading...',
            duration: 3000,
            icon: 'loading',
            mask: true
        })
    },
    handleShowModal() {
        wx.showModal({
            title: 'title',
            content: 'content',
            showCancel: false, // 去掉取消按钮
            success(res) {
                console.log(res)
                if (res.cancel) {
                    console.log('用户点击了取消按钮')
                }
                if (res.confirm) {
                    console.log('用户点击了成功按钮')
                }
            }
        })
    },
    handleShowLoading() {
        wx.showLoading({
            title: 'Loading',
            mask: true //过程不能点击其他地方
        })
        setTimeout(() => {
            wx.hideLoading()
        }, 1000)
    },
    handleShowAction() {
        wx.showActionSheet({
            itemList: ['相册', '拍照'],
            itemColor: 'red',
            success(res) {
                // 获取到点击的是哪一个
                console.log(res)
            }
        })
    },
    onShareAppMessage() {
        return {
            title: 'title',
            path: '/pages/about/about',
            imageUrl: ''
        }
    }
})