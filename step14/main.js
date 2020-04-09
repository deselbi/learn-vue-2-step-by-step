


Vue.component('wmodal', {

    template: `
  
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"> <slot name="header"> </slot></p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <slot name="body"></slot>
        <br/>
        <slot> slot can have default content</slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
        </slot>
      </footer>
    </div>
  
  </div>
  `
  }
  );

new Vue({
  el: "#root",
  methods: {

  },

  created() {


  },
  data: {

  }
});
