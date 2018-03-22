Vue.component('contact-us', {
  template: /*html*/`
  <div id="contact_us" class="sm_page_wrap">
    <header class="page_header">
      <h1 v-html="pageData.title.rendered"></h1>
    </header>
    <div class="custom_content" v-html="pageData.content.rendered"></div>
  </div>
  `,
  data: function() {
    return {
      pageData: {
        content: {
          rendered: ''
        },
        title: {
          rendered: ''
        }
      }
    }
  },
  props: {
    sitePages: Array,
  },
  watch: {
    sitePages(value) {
      var vm = this
      value.forEach(function(item) {
        if (item.title.rendered === 'Contact Us') {
          vm.pageData = item
        }
      })
    }
  }
})
