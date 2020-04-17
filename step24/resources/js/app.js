
let source = {
    user  :  {
        name: "John Doe one and only"
    },
    coupon: "coupon value"
};

new Vue({

    el: "#one",

    data: {
        source: source

    }
});


new Vue({

    el: "#two",

    data: {
        source: source

    }
});
