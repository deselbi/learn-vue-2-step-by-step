<template>
<div>
  <h2> count is  {{ count }}</h2>

  <p>
    <button @click="count++"> Increment</button>
  </p>
</div>

</template>


<script>

  export default {

    data () {
      return {
        count: 0
      }
    }
  }
</script>

<style>


</style>
