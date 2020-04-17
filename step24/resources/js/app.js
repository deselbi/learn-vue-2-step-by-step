


let source = {
    user  :  {
        name: "John Doe one and only"
    },
    coupon: "X23SZXD"
};



Vue.component('coupon', {
    props: ['code'],

    template: `
    <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input"> 
    `,

    methods: {

        updateCode(code){
            code=code.toLowerCase();
            this.$refs.input.value = code;
            this.$emit('input', code);
        }
    }

});



new Vue({

    el: "#root",

    data: {
        source: source

    }
});

