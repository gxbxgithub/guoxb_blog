export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.name != 'article-id.html' && to.path.charAt(to.path.length - 1) != '/') {
      return next(to.path + '/')
    }
    next()
  })
}