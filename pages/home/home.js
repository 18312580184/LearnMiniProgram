Page({
    data: {
        counter: 0
    },
    handleIncrement(e) {
        console.log(e)
        this.setData({
            counter: this.data.counter + 1
        })
    },
    handletabClick(e) {
        console.log(e)
    },
    handleIncrementCpn() {
        const my_sel = this.selectComponent('.sel-class')
        my_sel.setData({
            counter: my_sel.data.counter + 20
        })
    }
})