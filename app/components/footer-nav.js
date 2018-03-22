Vue.component('footer-nav', {
  template: /*html*/`
  <ul class="footer_list left_list">
    <li v-for="item in navList" v-cloak><a :class="['page_item',{'active_nav': item.active}]" :href="item.url">{{item.name}}</a></li>
  </ul>
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
    getNavList: function() {
      this.pagesList = this.sitePages
      var vm = this
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
        switch(pageTitle) {
          case 'home':
            addToList(1)
            break;
          case 'shop':
            addToList(2)
            break;
          case 'contact us':
            addToList(3)
            break;
          case 'blog':
            addToList(4)
            break;
          case 'policies':
            addToList(5)
            break;
        }
      }
      this.navList.sort(function(a,b) {
        return a.id - b.id
      })
    },
  },
  watch: {
    sitePages: function() {
      this.getNavList()
    }
  },
  mounted: function() {

  }
})
