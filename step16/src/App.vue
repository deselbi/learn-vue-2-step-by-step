<template>
  <div id="app">

    <MessageComponent color="green"> Hello there</MessageComponent>

    <MessageComponent :color="color"> Hello there again</MessageComponent>

    <MessageComponent> Hello there again and again</MessageComponent>
  </div>
</template>

<script>

import MessageComponent from "./components/message";

export default {
  name: 'app',
  components: { MessageComponent },
  data () {
    return {
      color: "black"
    }
  }
}
</script>

<style>


</style>
