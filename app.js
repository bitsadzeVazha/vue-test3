const app = Vue.createApp({
    data(){
        return {
            count: 0,
        }
    },
    watch: {
        count(value){
            const that = this;
            setTimeout(function(){
                    that.count = 0;
            }, 5000);
        }
    },
    computed: {
        result(){
            if(this.count === 0){
                return this.count
            } else if (this.count < 37){
                return this.count + " Not there yet";
            } else {
                return this.count + " Too much";
            }
        }
    },
     methods: {
        addFive(){
            this.count = this.count +5;
        },
        addOne(){
            this.count = this.count +1;
        }
    }


})

app.mount("#assignment");