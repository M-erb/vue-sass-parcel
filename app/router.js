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

module.exports = router = new VueRouter({
  routes: [
    {path: '/', component: home},
    {path: '/about', component: about},
    {path: '*', component: error},
  ],
  mode: "history"
})