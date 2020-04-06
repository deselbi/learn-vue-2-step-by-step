Vue.component("tasks", {
  template:
    '<ul>  <task v-for="task in tasks"> {{ task.description }}</task></li>',

  data() {
    return {
      tasks: [
        { description: "take one" },

        { description: "take two" },

        { description: "take tree" }
      ]
    };
  }
});

Vue.component("task", {
  template: "<li> foobar <slot></slot> </li>"
});

new Vue({
  el: "#root",
  data: {}
});
