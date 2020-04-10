

Vue.component('progresss', {

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
