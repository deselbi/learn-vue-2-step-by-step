


let source = {
    user  :  {
        name: "John Doe one and only"
    },
    coupon: "X23SZXD"
};



Vue.component('coupon', {
    props: ['code'],

    template: `
    <input type="text"
     :value="code" 
     @input="updateCode($event.target.value, $event.target)" 
     ref="input"> 
    `,

    methods: {

        updateCode(code, target){
            code=code.toLowerCase();
            position= target.selectionStart;
            this.$refs.input.value = code;
            this.$refs.input.selectionStart = position;
            this.$refs.input.selectionEnd = position;
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


