module.exports = Vue.component('site-nav', {
  template: /*html*/`
    <div class="site-navigation headroom">
      <h1>Main Navigation</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </nav>
    </div>
  `,
  data: function() {
    return {
      location: window.location,
      navList: [],
      pagesList: [],
      cartCount: '',
      isMobiNavOpen: false
    }
  },
  props: ['sitePages'],
  methods: {
    toggleMobiNav() {
      if (this.isMobiNavOpen) {
        this.isMobiNavOpen = false
        this.$root.htmlBody.classList.remove('no_scroll')
      } else {
        this.isMobiNavOpen = true
        this.$root.htmlBody.classList.add('no_scroll')
      }
    }
  },
  watch: {
    sitePages: function() {
      this.getNavList()
    }
  },
  mounted: function() {
    var el = document.querySelector('#site-header .site-navigation')
    headroom = new Headroom(el)
    headroom.init()
  }
})
