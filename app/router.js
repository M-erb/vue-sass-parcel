const home = {
  template: /*html*/ `
  <div>
    <h1>Home Page</h1>
  </div>
  `
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
    { path: '/', component: home },
    { path: '/about', component: about },
  ],
  mode: "history"
})