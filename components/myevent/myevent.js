Component({
    methods: {
        handleIncrement() {
            this.triggerEvent('increment', {
                name: 'Zard1996',
                age: 18
            }, {})
        }
    }
})