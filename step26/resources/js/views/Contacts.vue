<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p> {{ status.user.name}} </p>
                        <p> {{ status.updated_at | ago}} </p>
                    </div>

                    <div class="message-body">
                        {{ status.body }}
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import moment from 'moment';


    export default {

        data() {
            return {
                statuses: []
            }
        },

        filters: {
            ago(date) {
                return moment(date).fromNow();
            }
        },

        methods: {

            moment(input) {
                return moment(input);
            }
        },

        created() {
            axios.get('/statuses')
                .then( ({data}) => this.statuses = data);
        }
    }
</script>
