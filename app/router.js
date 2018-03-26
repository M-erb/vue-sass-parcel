const home = {
  template: "<home-page></home-page>"
}

const about = {
  template: /*html*/ `
  <div>
    <h1>About Page</h1>
  </div>
  `
}
const error = {
  template: /*html*/ `
  <div>
    <h1>Page not found</h1>
    <p>404 error</p>
  </div>
  `
}

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: home,
      meta: {
        title: "home page",
        metaTags: [{
          name: "description",
          content: "This is the best sigle page app out there!"
        }, {
          name: "keywords",
          content: "best, the bset, cool, wow"
        }]
      }
    },
    {
      path: '/about',
      component: about,
      meta: {
        title: "about page",
        metaTags: [{
          name: "description",
          content: "This is the About us page where you can learn all about us and how we can help you!"
        }, {
          name: "keywords",
          content: "about, about us, really cool people"
        }]
      }
    },
    {
      path: '*',
      component: error,
      meta: {
        title: "404 error",
        metaTags: []
      }
    },
  ],
  mode: "history"
})

router.beforeEach(function(to, from, next) {
  // console.log("beforeEach", to, from)
  if (to.meta) {
    if (to.meta.title) {
      document.title = to.meta.title
    }
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
  if (!to.meta.metaTags) return next()
  to.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    });
    tag.setAttribute('data-vue-router-controlled', '')
    return tag
  }).forEach(tag => document.head.appendChild(tag))

  next()
})

module.exports.router = router