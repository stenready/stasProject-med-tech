export default ({ store, route, redirect, app, $axios }) => {
  const user = app.$cookies.get("user") || null;
  // redirectRoutesArray
  const redirectArrayRoute = ['login', 'register', 'restore']
  const isNotAuthRoutes = redirectArrayRoute.includes(route.name)
  if (user && isNotAuthRoutes) {
    return redirect("/");
  }
};
