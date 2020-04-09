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

Vue.component("modal", {
  props: ["title", "body"],
  template: `
      <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-content">
       
          <slot>
          </slot>
          </div>
          <button class="modal-close is-large" aria-label="close" @click="$emit('closeme')"> cls mod</button>
        </div>

    `,
  methods: {
    hideModal() {
      this.isVisible = false;
    }
  },

  data() {
    return {
      isVisible: false
    };
  }
});

new Vue({
  el: "#root",
  data: {}
});
