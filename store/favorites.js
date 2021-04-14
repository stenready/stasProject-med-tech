import API from "@/api/PublicAPI.js";

const state = () => ({
  favorites: []
});

const mutations = {
  SET_FAVORITES_STATE(state, payload) {
    state.favorites = payload
  },
  ADD_TO_FAVORITES(state, product) {
    state.favorites.push(product);
  },
  REMOVE_TO_FAVORITES(state, product) {
    state.favorites = state.favorites.filter(el => el._id !== product._id);
  }
};
const actions = {};
const getters = {};

export default { state, mutations, actions, getters };
