
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">The employees Page</div>

                    <div class="panel-body">
                        <pre v-text="source.data"></pre>
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
