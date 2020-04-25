
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="message" v-for="employee in source.employees.data">
                    <div class="message-header">
                    {{employee.employee_name}}
                    </div>

                    <div class="message-body">
                        {{employee.employee_salary}}
                    </div>
                </div>


                <div class="panel panel-default">
                    <div class="panel-heading">The employees Page</div>

                    <div class="panel-body">
                        <pre v-text="source.employees"></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['source'],
        created() {
            // axios call here.
        }
    }
</script>
