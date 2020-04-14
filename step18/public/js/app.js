
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


    }

    reset(){
        this.name =  "";
        this.description ="";
    }

    submit(requestType, url) {

        return new Promise((resolve, reject ) => {

            let { name, description } = this;  // the fields you want
            let data = { name, description  };

            axios[requestType](url, data)
                .then( response => {
                    this.onSuccess(response);
                    resolve(response.data);
                })
                .catch(  error =>  {

                    if(error.response.status == 422) {
                        this.errors.record( error.response.data.errors) ;
                    } else {
                        alert(error.response.data.message);
                    }

                    reject(error.response.data);
                    this.buttonClass = "";

                });


        });


    }

    onSuccess = (response) => {

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
