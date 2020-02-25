// pages/home/home.js

import request from '../../service/network.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        request({
            url: 'http://123.207.32.32:8000/api/hy/recommend'
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

        // 发送网络请求
        // wx.request({
        //     url: 'http://123.207.32.32:8000/api/hy/recommend',
        //     data: {
        //         type: 'sell',
        //         page: 1
        //     },
        //     success(res) {
        //         console.log(res)
        //     }
        // })
    }
})