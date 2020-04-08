

Vue.component('tabs', {

  template: `
    <div>
      <div class="tabs">
          <ul>

             <li
              v-for="tab in tabs" 
              :class="{'is-active': tab.isActive}"
             > 
                  <a :href="tab.href"  @click="selectTab(tab)" > {{ tab.name }} </a> 
             </li>
          </ul>
      
       </div>  
      
       <div class="tabs-details">
            <slot></slot>
       </div>
      
      
    </div>
  
  `,

  methods: {

    selectTab(selectedTab) {

      this.tabs.forEach( tab => {tab.isActive = (tab== selectedTab)})
    }
  },
  data()  {
    return {
      tabs: []
    };
  },

  created () {

    this.tabs = this.$children;
  }

});

Vue.component('tab', {
  props: {
    "name": { required: true},
    "selected": {
      default: false
    }
  },
  template: `
    <div v-show="isActive" > <slot></slot>  </div>
  `,
  data() {
    return {
       isActive: false
    }
  },

  mounted() {
    this.isActive = this.selected
  },

  computed: {
    href() {
      return "#".concat(this.name.toLowerCase().replace(/ /g, "-"));
    }
  }

});

new Vue({
  el: "#root",
  data: {}
});
