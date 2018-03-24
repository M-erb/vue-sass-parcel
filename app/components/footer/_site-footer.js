module.exports = Vue.component('site-footer', {
  template: /*html*/`
    <div class="footer-inner">
      <h1>Footer</h1>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  `,
  data: function() {
    return {
      location: window.location,
      navList: [],
      pagesList: [],
    }
  },
  props: ['sitePages'],
  methods: {

  },
  mounted: function() {

  }
})
