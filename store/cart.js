const state = () => ({
  cartData: []
});

const mutations = {
  REMOVE_FROM_CART(state, id) {
    let cart = state.cartData;
    cart = cart.filter(el => el.product._id != id);
    state.cartData = cart;
  },
  ADD_TO_CART_ACTION(state, payload) {
    state.cartData.push(payload);
  },
  SET_CART_STATE(state, payload) {
    state.cartData = payload;
  },
  CHANGE_NUMBER_IN_CART(state, payload) {
    const cart = state.cartData;
    if (payload.type === "plus") {
      cart.forEach(el => {
        if (el.product._id === payload.id) {
          el.numberInCart++;
        }
      });
    } else {
      cart.forEach(el => {
        if (el.product._id === payload.id) {
          el.numberInCart--;
        }
      });
    }
  }
};

const actions = {
  addToCartAction({ commit }, payload) {
    commit("ADD_TO_CART_ACTION", payload);
  }
};

const getters = {
  getcartData: state => state.cartData
};

export default { state, mutations, actions, getters };
