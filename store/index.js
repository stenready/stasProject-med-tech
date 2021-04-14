import API from "@/api/PublicAPI.js";
// import Vue from 'vue';

const state = () => ({
  catalogPage: null,
  user: []
});

const mutations = {
  SET_CATALOG_PAGE(state, page) {
    state.catalogPage = page;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_AUTH_DATA(state, data) {
    state.user = data;
    this.$cookies.set("user", data);
    this.$router.push("/profile");
  }
};

const actions = {
  async sendContactForm({ commit }, payload) {
    const response = await API.sendForm(payload);
    
  },
  async registerAction({ commit }, userData) {
    let user;
    try {
      user = await API.registerUser(userData);
      commit("SET_AUTH_DATA", user);
    } catch (e) {
      throw e;
    }
  },
  async loginAction({ commit }, data) {
    try {
      let user = await API.loginUser(data);
      commit("SET_AUTH_DATA", user);
    } catch (e) {
      throw e;
    }
  },
  logout({ commit }) {
    this.$swal({
      title: "Ви дійсно хочете вийти зі свого акаунту?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Так",
      cancelButtonText: "Ні"
    }).then(res => {
      if (res.isConfirmed) {
        commit("SET_AUTH_DATA", null);
        this.$router.push("/");
      }
    });
  },
  async changeUserData({ commit }, data) {
    let user;
    try {
      // commit("SET_AUTH_DATA", user);
    } catch (e) {
      throw e;
    }
  },
  async changeUserAvatar({ commit, state }, avatar) {
    try {
      const response = await this.$axios.$post(
        `${process.env.API_HOST}/user/avatar`,
        avatar,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${state.user.token}`
          }
        }
      );
    } catch (e) {}
  }
};

const getters = {};

export default { state, mutations, actions, getters };
