export default async ({ store, route, redirect, app }) => {
  const isProfile = route.name && route.name.includes("profile");
  const user = app.$cookies.get("user") || null;

  if (isProfile && !user) {
    return redirect("/");
  }
  store.commit("SET_USER", user);
};
