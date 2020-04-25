import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import 'bulma/css/bulma.css'

import router from './routes';

window.Vue = Vue;

Vue.use(VueRouter);
window.axios = axios;

window.axios.defaults.headers.common = {
    "a" : "b",
    "Accept-Language": "..."
};

let source = {
    data: 'loading'
};

new Vue({

    el: "#app",

    router,

    data: {
        source: source

    },

    mounted() {
        let res = axios.get("http://dummy.restapiexample.com/api/v1/employees").then( result => {
            console.log(result.data);
            source.data = result.data;
        });

        console.log(res);
    }
});

