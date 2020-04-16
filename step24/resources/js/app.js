
let source = {
    user  :  {
        name: "John Doe one and only"
    }
};

new Vue({

    el: "#one",

    data: {
        user: source.user

    }
});


new Vue({

    el: "#two",

    data: {
        user: source.user

    }
});
