const router = require("./router")

new Vue({
  el: '#app',
  router: router,
  data: {
    apiOrigin: location.origin + '/wp-json/wp/v2/',
    htmlBody: document.querySelector('body')
  },
  methods: {

    // Helper methods
    round(value, exp) {
      if (typeof exp === 'undefined' || +exp === 0)
        return Math.round(value);
      value = +value;
      exp = +exp;
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
        return NaN;
      // Shift
      value = value.toString().split('e');
      value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
      // Shift back
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
    },
    getParamByName(name, url) {
      if (!url) url = location.href
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]")
      var regexS = "[\\?&]" + name + "=([^&#]*)"
      var regex = new RegExp(regexS)
      var results = regex.exec(url)
      return results == null ? null : decodeURIComponent(results[1])
    },
  },
  mounted: function () {

  }
})