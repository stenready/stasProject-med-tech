<template>
  <div class="nav-container">
    <nav style="margin: 30px 0" class="navigation" :class="{ sticky: sticky }">
      <div class="mobile-nav-bar">
        <div
          class="overlay"
          @click="hideBurgerMenu"
          :class="{ 'active-class': showBurgerMenu }"
        ></div>
        <div class="sidebar_menu" :class="{ 'active-class': showBurgerMenu }">
          <div class="wrap_sidebar" :class="{ 'active-class': showBurgerMenu }">
            <nuxt-link to="/" title="Медтехніка" @click="hideBurgerMenu">
              <img src="/home/logo.png" alt="Медтехніка" title="Медтехніка" />
            </nuxt-link>
            <ul class="mobile_menu_wrap">
              <li class="mobile_menu_item" @click="hideBurgerMenu">
                <nuxt-link to="/">
                  <svg viewBox="0 0 576 512" class="Header_header_icon__30r6o">
                    <path
                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    ></path>
                  </svg>
                  Головна
                </nuxt-link>
              </li>
              <li class="mobile_menu_item" @click="hideBurgerMenu">
                <nuxt-link to="/catalog">
                  <svg viewBox="0 0 512 512" class="Header_header_icon__30r6o">
                    <path
                      d="M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"
                    ></path>
                  </svg>
                  Каталог
                </nuxt-link>
              </li>
              <li class="mobile_menu_item" @click="hideBurgerMenu">
                <nuxt-link to="/wishlist">
                  <svg viewBox="0 0 512 512" class="Header_header_icon__30r6o">
                    <path
                      d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                    ></path>
                  </svg>
                  Улюблені
                </nuxt-link>
              </li>
              <li class="mobile_menu_item" @click="hideBurgerMenu">
                <nuxt-link to="/cart">
                  <svg viewBox="0 0 576 512" class="Header_header_icon__30r6o">
                    <path
                      d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                    ></path>
                  </svg>
                  Кошик
                </nuxt-link>
              </li>
              <li class="mobile_menu_item" @click="hideBurgerMenu">
                <nuxt-link to="/news">
                  <svg viewBox="0 0 576 512" class="Header_header_icon__30r6o">
                    <path
                      d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"
                    ></path>
                  </svg>
                  Новини
                </nuxt-link>
              </li>
              <li class="mobile_menu_item" v-if="!user" @click="hideBurgerMenu">
                <nuxt-link to="/login">
                  <svg viewBox="0 0 512 512" class="Header_header_icon__30r6o">
                    <path
                      d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
                    ></path>
                  </svg>
                  Увійти
                </nuxt-link>
              </li>
              <li class="mobile_menu_item" v-else @click="hideBurgerMenu">
                <nuxt-link to="/profile">
                  <svg viewBox="0 0 448 512" class="Header_header_icon__30r6o">
                    <path
                      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                    ></path>
                  </svg>
                  Мій профіль
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="main_nav">
        <div class="one_section">
          <ul class="navigation_items">
            <li class="navigation_item">
              <nuxt-link class="navigation_item_link" to="/" title="Головна">
                <svg
                  class="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                  />
                </svg>
                <span>Головна</span>
              </nuxt-link>
            </li>
            <li class="navigation_item">
              <nuxt-link
                class="navigation_item_link catalog-link"
                exact
                to="/catalog?page=1"
                title="Каталог"
              >
                <svg
                  class="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"
                  />
                </svg>
                <span>Каталог</span>
              </nuxt-link>
            </li>
            <li class="navigation_item">
              <nuxt-link
                class="navigation_item_link"
                to="/wishlist"
                title="Улюблені"
              >
                <svg
                  class="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  />
                </svg>
                <span>Улюблені</span>
              </nuxt-link>
            </li>
            <li class="navigation_item">
              <nuxt-link class="navigation_item_link" to="/news" title="Новини">
                <svg
                  class="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"
                  />
                </svg>
                <span>Новини</span>
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="burger-menu" @click="showBurgerMenu = !showBurgerMenu">
          <div
            class="hamburger hamburger--spin"
            :class="{ 'is-active': showBurgerMenu }"
          >
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </div>

        <div class="second_section">
          <div class="input_container" v-click-outside="hide">
            <input
              spellcheck="false"
              type="text"
              placeholder="Введіть пошуковий запит"
              class="input_search"
              v-model="search"
            />
            <button class="button_nav" @click="goToSearchPage">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                />
              </svg>
            </button>
            <div class="hidden_search_panel" v-show="search">
              <ul class="search_wrap">
                <li
                  class="search_item"
                  v-for="(el, idx) of searchData"
                  :key="idx"
                >
                  <ProductPreview :key="searchData.length" :elementData="el" />
                </li>
              </ul>
              <span
                class="empty"
                v-show="searchData.length === 0 && loadingDone"
              >
                <div class="empty_text">Товар не знайдено</div>
              </span>
            </div>
          </div>
        </div>
        <div class="mobile-card-icon">
          <!-- stas -->
          <span
            class="size-cards-navigation_items mobile-size-card"
            v-show="cartData.length > 0"
          >
            {{ cartData.length }}
          </span>
          <nuxt-link to="/cart">
            <svg viewBox="0 0 448 512" class="Header_cart__icon__3rYIS">
              <path
                d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"
              ></path>
            </svg>
          </nuxt-link>
        </div>
        <div class="third_section">
          <ul class="navigation_items">
            <li class="navigation_item">
              <nuxt-link
                class="navigation_item_link"
                style="display: flex"
                to="/cart"
                title="Кошик"
              >
                <!-- <client-only> -->
                <svg
                  class="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                  />
                </svg>
                <span style="margin-left: 8px"> Кошик </span>
                <!-- </client-only> -->
                <span
                  class="size-cards-navigation_items"
                  v-show="cartData.length > 0"
                >
                  {{ cartData.length }}
                </span>
              </nuxt-link>
            </li>

            <li class="navigation_item" style="margin-right: 0" v-if="!user">
              <nuxt-link
                class="navigation_item_link"
                to="/login"
                title="Увійти"
              >
                <svg
                  class="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
                  />
                </svg>
                <span>Увійти</span>
              </nuxt-link>
            </li>

            <li class="navigation_item" style="margin-right: 0" v-else>
              <nuxt-link
                class="navigation_item_link"
                to="/profile"
                title="Мій профіль"
              >
                <svg viewBox="0 0 448 512" class="svg-icon">
                  <path
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                  ></path>
                </svg>
                <span>Мій профіль</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="navigation-fake"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import API from "@/api/PublicAPI.js";
export default {
  name: "MainNav",
  data() {
    return {
      showBurgerMenu: false,
      search: "",
      searchData: [],
      sticky: false,
      loadingDone: false,
    };
  },
  computed: {
    ...mapState({
      cartData: (state) => state["cart"].cartData,
      user: (state) => state.user,
    }),
  },
  methods: {
    hideBurgerMenu() {
      this.showBurgerMenu = false;
    },
    stickyMenuHandler(e) {
      this.sticky = window.scrollY > 0 ? true : false;
    },
    goToSearchPage() {
      if (!this.search) return false;
      this.$router.push(`/search?query=${this.search}`);
    },
    hide() {
      this.search = "";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.stickyMenuHandler);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.stickyMenuHandler);
  },
  watch: {
    async search(value) {
      try {
        const searchArray = await API.searchNewApi(value);
        this.searchData = searchArray;
        this.loadingDone = true;
      } catch (e) {
        this.searchData = [];
        this.loadingDone = true;
      }
    },
    $route(r) {
      this.search = "";
    },
  },
};
</script>

<style lang="scss">
@import "./assets/mixins.scss";
.navigation {
  .mobile-card-icon {
    position: relative !important;
  }
  .mobile-size-card {
    font-size: 15px;
    width: 17px !important;
    height: 17px !important;
    position: absolute !important;
    left: -15px;
    bottom: -2px;
  }
  .wrap_sidebar {
    // transition: transform 0.1s ease-out;
    transform: translateY(200%);
    &.active-class {
      transform: translateY(0);
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  }
  .sidebar_menu {
    .mobile_menu_wrap {
      .mobile_menu_item {
        color: grey;
        font-family: roboto, sans-serif;
        font-weight: 200;
        padding: 15px 25px;
        border: none;
        border-bottom: 1px solid #ccc;
        a {
          font-size: 14px;
          display: flex;
          align-items: center;
          &.nuxt-link-exact-active {
            color: #2bbd86;
            svg {
              fill: #2bbd86;
            }
          }
        }
        svg {
          width: 1rem;
          margin-right: 10px;
        }
      }
    }
    width: 75%;
    background: white;
    position: fixed;
    top: 58px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1 !important;
    transition: all 0.2s ease-in;
    transform: translateX(-100%);
    &.active-class {
      z-index: 1002 !important;
      transform: translateX(0);
      transition: transform 0.3s;
    }
    img {
      padding: 15px 25px;
      width: 100%;
    }
  }
  .overlay {
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 58px;
    left: 0;
    right: 0;
    z-index: 1000;
    bottom: 0;
    display: none;
    &.active-class {
      display: block;
    }
  }
  @media (max-width: 992px) {
    &.sticky {
      position: fixed;
      top: 0;
      z-index: 1000;
      justify-content: space-between;
      padding: 10px 15px;
      left: 0;
      right: 0;
      display: flex;
      background: white;
      margin-top: 0 !important;
      .main_nav {
        width: 100%;
      }
    }
  }
}
.navigation-fake {
  display: none;
  height: 38px;
  @media (max-width: 992px) {
    // display: block;
  }
}
.hamburger {
  padding: 0;
}
.navigation {
  .mobile-card-icon,
  .burger-menu {
    display: none;
    @media (max-width: 992px) {
      display: block;
    }
  }
  .empty {
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    .empty_text {
      font-size: 1.3rem;
      font-weight: 100;
    }
  }
  .hidden_search_panel {
    z-index: 3000;
    .product_preview {
      svg {
        right: auto;
        top: auto;
        bottom: 16px;
      }
    }
  }
  .product_preview {
    padding-bottom: 1rem;
    &:hover {
      transform: none;
      h4 {
        color: #2bbd86;
      }
    }
  }
  h4 {
    margin: 0 !important;
    text-align: left !important;
  }
  .bottom_panel {
    padding: 0 !important;
    .button {
      margin-top: 1rem;
      display: block;
      margin-left: auto !important;
      margin-right: 0 !important;
      padding: 9px 15px;
      font-size: 17px;
    }
    .price_wrap {
      .price {
        text-align: left;
      }
      display: block;
      margin-top: 0 !important;
    }
    background: transparent !important;
  }
  .mobile-card-icon {
    svg {
      font-size: 24px;
      fill: #575757;
      width: 1.5rem;
      vertical-align: -0.125em;
    }
  }
}
.hidden_search_panel {
  .image_block {
    display: none;
  }
  .search_item {
    // padding: 13px;
    padding: 13px 25px;
  }
  top: 45px;
  position: absolute;
  overflow: auto;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 300px;
  background: #fff;
  z-index: 100;
}
.navigation {
  .main_nav {
    align-items: center !important;
    .size-cards-navigation_items {
      margin-left: 4px;
      color: white;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #2bbd86;
      transition: 0.2s;
      display: flex;
    }
    display: flex;
    .one_section,
    .third_section {
      align-items: center;
      display: flex;
      .navigation_items {
        display: flex;
      }
      .navigation_item {
        font-size: 18px;
        margin-right: 1.875rem;
        .navigation_item_link {
          color: #404040;
          transition: all 0.2 ease-in;
          &:hover {
            color: #2bbd86;
            svg {
              fill: #2bbd86;
              transition: fill 0.2s ease;
            }
          }
          &.nuxt-link-exact-active {
            color: #2bbd86;
            svg {
              fill: #2bbd86;
            }
          }
        }
      }
    }
    .second_section {
      height: 38px;
      .button_nav {
        @include buttonCreate(#2bbd86, white);
        border-radius: 5px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        padding: 0 13px 0 13px;
        display: flex;
        align-items: center;
        svg {
          fill: #fff;
          vertical-align: -0.125em;
          height: 1rem;
        }
      }
      display: flex;
      flex-grow: 1;
      .input_container {
        position: relative;
        margin: 0 30px;
        display: flex;
        flex-grow: 1;
        .button_nav {
          margin-top: 0;
        }
        @media (max-width: 992px) {
          margin: 0 16px;
        }
      }
      .input_search {
        border: 1px solid rgba(126, 133, 128, 0.22);
        padding: 10px 15px;
        flex-grow: 1;
        &:focus {
          outline: none;
        }
      }
    }
    .svg-icon {
      width: 1rem;
      transform: translateY(1px);
      margin-right: 4px;
      fill: #404040;
    }
  }
  @media (max-width: 1200px) {
    .navigation_item {
      font-size: 14px !important;
      margin-right: 8px !important;
    }
  }
  @media (max-width: 992px) {
    .container {
      max-width: auto !important;
      width: 100%;
    }
  }
  @media (max-width: 992px) {
    .navigation_items {
      display: none !important;
    }
    margin: 10px 0 !important;
  }
}
</style>