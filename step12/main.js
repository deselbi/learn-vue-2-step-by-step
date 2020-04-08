


Vue.component('coupon', {

  template: `
  <div> coupon 
  
  <input type="text" @blur="onCouponApplied" v-model="input">
  </div>
  
  
  `,
  data() {
    return {input: ""}
  },
  methods: {
    onCouponApplied() {
      this.$emit('applied', this.input);
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
  data: {
    coupon: null,
    couponApplied: false
  }
});
