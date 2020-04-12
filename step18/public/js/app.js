
class Errors {

    constructor(){
        this.errors = [];
    }

    get(field){
        if(this.errors[field]){
            return this.errors[field][0];
        }
    }


    record(errors) {
        this.errors = errors;
    }


    clear(field) {
        delete this.errors[field]
    }


};

new Vue({
    el: "#root",

    data: {
        skills: [],

        project: {
            name: "",
            description: ""
        },
        errors: new Errors()

    },

    methods: {
        onSubmit() {
            axios.post('/projects', this.$data.project)
                .then(this.onSuccess)
                .catch(  error =>  {
                    this.errors.record( error.response.data.errors) ;
                    alert( error.response.data.message )
                });

        },

        onSuccess(response) {
            alert(response.data.message);

        }
    },
    mounted() {

        axios.get('/skills').then(
            response => this.skills = response.data
        );
    }

});
