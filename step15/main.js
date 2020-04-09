

Vue.component('progress-view', {

  data() {
    return {
      completionRate: 123
    }
  }
});

new Vue({
  el: "#root",

  data: {
    completionRate: null
  }
});
