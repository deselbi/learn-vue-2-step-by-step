<template>
<div class="box">


  <p>

    this is defined in parent as slot
    <slot></slot>
  </p>

  this link is defined as component property
  <a href="#"> {{color}}</a>

  and this link is defined as component state
  <a href="#"> {{msg}}</a>

</div>
</template>

<script>
  export default {
    props: {
        color: {
          default: "blue"
        }
    },
    data () {
      return {
        msg: "bla bla msg"
      }
    }
  }
</script>

<style>

  .box {
    background: yellow;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #001f3f;
  ;
  }

</style>
