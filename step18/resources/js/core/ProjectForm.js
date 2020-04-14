import Errors from './Errors'
import axios from 'axios';

class ProjectForm {

    constructor() {

        this.reset();

        this.errors = new Errors();

        this.onSuccess.bind(this);


    }

    reset(){
        this.name =  "name";
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

    onSuccess (response) {

        console.log(response);
        this.reset();
        this.buttonClass = "";

    }

};


export default ProjectForm;
