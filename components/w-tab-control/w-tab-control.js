Component({
    /**
     * 组件的属性列表
     */
    properties: {
        titles: {
            type: Array,
            value: []
        }
    },
    data: {
        currentIndex: 0
    },
    methods: {
        handleItemClick(e) {
            // 取出 index
            const index = e.currentTarget.dataset.index
            this.setData({
                // index 传给 currentIndex 
                currentIndex: index
            })
            // 通知页面内部点击事件
            this.triggerEvent('itemclick', {
                index,
                title: this.properties.titles[index]
            }, {})
        }
    }
})