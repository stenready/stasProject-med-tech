import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  createPersistedState({
    key: "mertech",
    paths: ["favorites.favorites", "cart.cartData"],
  })(store);
};
