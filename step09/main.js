Vue.component("jumbotron", {
  props: ["title", "body"],
  template: `
  <div class="jumbotron jumbotron-fluid"  v-show="isVisible">
  <div class="container">
    <h1 class="display-4"> 
     {{ title }} 
  
      <button class="close" @click="hideModal" >x</button>

    </h1>
    <p class="lead"> {{ body }}</p>
  </div>
</div>

    `,
  methods: {
    hideModal() {
      this.isVisible = false;
    }
  },

  data() {
    return {
      isVisible: true
    };
  }
});

new Vue({
  el: "#root",
  data: {}
});
