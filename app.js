const TOKEN = 'token'

App({
    // 把数据放到对象里，小程序关闭，内存就会回收掉token，所以还要本地存储
    globalData: {
        token: ''
    },
    // 小程序加载完就触发
    onLaunch: function() {
        // 1.先从缓存中取出token
        const token = wx.getStorageSync(TOKEN)

        // 2.判断token是否有值
        if (token && token.length !== 0) {
            this.check_token(token) // 验证token是否过期
        } else {
            // 没有token，进行登录操作
            this.login()
        }
    },
    login() {
        console.log('执行了登录操作......')
        // 登录操作
        wx.login({
            success: (res) => {
                // 获取code
                const code = res.code;

                wx.request({
                    url: 'http://123.207.32.32:3000/login',
                    method: 'post',
                    data: {
                        code
                    },
                    // 请求到数据
                    success: (res) => {
                        // 1.取出token
                        const token = res.data.token;

                        // 2.将token保存在globalData中
                        this.globalData.token = token

                        // 3.本地存储(Sync同步，一步一步执行，可以到Storage查看)
                        wx.setStorageSync(TOKEN, token)
                    }
                })
            }
        })
    },
    check_token(token) {
        console.log('执行了验证token操作.......')
        wx.request({
            url: 'http://123.207.32.32:3000/auth',
            method: 'post',
            header: {
                token
            },
            success: (res) => {
                if (!res.data.errCode) {
                    console.log('token有效...')
                    this.globalData.token = token
                } else {
                    this.login()
                }
            },
            fail: (err) => {
                console.log(err)
            }
        })
    }
})