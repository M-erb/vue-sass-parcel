// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// install parcel globally and run "parcel index.js"
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Vue set up and extra stuff
window.Vue = require("./node_modules/vue/dist/vue.js")
window.axios = require("axios")
Vue.prototype.$axios = window.axios
window.Headroom = require("./plug-ins/headroom.min.js")
require("./directives/viewport-scroll")
// https://github.com/freearhey/vue2-filters
require("./filters/vue2-filters.min.js")

// components
require("./components/home/_home-page")

// vue.js root of app
require("./app")

// SCSS
import "./scss/styles.scss"