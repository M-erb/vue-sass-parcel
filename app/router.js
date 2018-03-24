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

module.exports = router = new VueRouter({
  routes: [
    {path: '/', component: home},
    {path: '/about', component: about},
  ],
  mode: "history"
})