import Vue from 'vue'
import axios from 'axios';

import ProjectForm from './core/ProjectForm'

import Example from './components/Example';

new Vue({
    el: "#root",

    components: {
        Example
    },

    data: {
        skills: [],

        project: new ProjectForm(),

        buttonClass : "34"

    },

    methods: {
        onSubmit() {

            this.$data.buttonClass = "is-loading";
            this.$data.project.submit( 'post','/projects')
                .then( (data) => {
                    console.log(data);
                    this.$data.buttonClass = "";
                }  )
                .catch((data) => {
                    console.log(data);
                    this.$data.buttonClass  = "";
                });


        },

    },
    mounted() {

        axios.get('/skills').then(
            response => this.skills = response.data
        );
    }

});
