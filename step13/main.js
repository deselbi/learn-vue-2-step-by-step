
var event = new Vue();


Vue.component('coupon', {

  template: `
  <div> coupon 
  
  <input type="text" @blur="onCouponApplied" v-model="input">
  </div>
  
  
  `,
  data() {
    return {input: ""}
  },
  created() {
    event.$on('applied', (coupon) => {alert( 'coupon detected coupon applied '.concat(coupon) );  } );

  },

  methods: {
    onCouponApplied() {
      event.$emit('applied', this.input);
    }
  }

});


new Vue({
  el: "#root",
  methods: {
    onCouponApplied(coupon) {
      this.coupon = coupon;
      this.couponApplied = true;
    }
  },

  created() {
    event.$on('applied', (coupon) => {alert( 'vue detected coupon applied '.concat(coupon) ); this.coupon = coupon; this.couponApplied = true; } );

  },
  data: {
    coupon: null,
    couponApplied: false
  }
});
