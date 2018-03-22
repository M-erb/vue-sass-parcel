var headroom

Vue.component('site-nav', {
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
    },
    getNavList: function() {
      this.pagesList = this.sitePages
      var vm = this
      // this.pagesList = JSON.parse(this.sitePages)
      for(var i = 0; i < vm.pagesList.length; i++) {
        var navItem = {
          name: '',
          url: '',
          id: null,
          active: false
        }
        function activePage() {
          if (vm.pagesList[i].link === window.location.href) {
            return true
          } else {
            return false
          }
        }
        function addToList(id) {
          navItem.name = vm.pagesList[i].title.rendered
          navItem.url = vm.pagesList[i].link
          navItem.id = id
          navItem.active = activePage()
          vm.navList.push(navItem)
        }
        var pageTitle = vm.pagesList[i].title.rendered.toLowerCase()
        if (pageTitle === 'home') {
          addToList(1)
        } else if (pageTitle === 'shop') {
          addToList(2)
        } else if (pageTitle === 'contact us') {
          addToList(3)
        } else if (pageTitle === 'blog') {
          addToList(4)
        }
      }
      this.navList.sort(function(a,b) {
        return a.id - b.id
      })
    },
    displayMiniCartCount: function() {
      // var test = document.querySelector('.cart-contents')
      // console.log(test)
    }
  },
  watch: {
    sitePages: function() {
      this.getNavList()
    }
  },
  mounted: function() {
    var el = document.querySelector('#masthead .headroom')
    headroom = new Headroom(el)
    headroom.init()
  }
})
