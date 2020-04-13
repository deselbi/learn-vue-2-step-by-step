
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

    has (field){
        return this.errors.hasOwnProperty(field);

    }

    any() {
        return Object.keys(this.errors).length > 0;
    }
};



class ProjectForm {

    constructor() {

        this.reset();

        this.errors = new Errors();

        this.onSuccess.bind(this);

        this.buttonClass = "";
    }

    reset(){
        this.name =  "";
        this.description ="";
    }

    submit(requestType, url) {


        let { name, description } = this;  // the fields you want
        let data = { name, description  };
        this.buttonClass = "is-loading";
            axios[requestType](url, data)
            .then(this.onSuccess)
            .catch(  error =>  {
                if(error.response.status == 422) {
                    this.errors.record( error.response.data.errors) ;
                } else {
                    alert(error.response.data.message);
                }

                this.buttonClass = "";

            });

    }

    onSuccess = (response) => {
        alert(response.data.message);
        console.log(response);
        this.reset();

        this.buttonClass = "";
    }

};

new Vue({
    el: "#root",

    data: {
        skills: [],

        project: new ProjectForm(),


    },

    methods: {
        onSubmit() {

            this.$data.project.submit( 'post','/projects');


        },


    },
    mounted() {

        axios.get('/skills').then(
            response => this.skills = response.data
        );
    }

});
