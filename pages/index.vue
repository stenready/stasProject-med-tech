<template>
  <div class="super">
    <!-- главный слайдер -->
    <TheMainBanner
      :options="swiperOption"
      refLink="mySwiper"
      :swiperBanners="response.slider"
    />
    <!-- главный слайдер конец -->

    <!-- секция со слайдерами товаров -->
    <div class="slider-section">
      <div class="container">
        <h2 class="select_category">Обрати по категорії</h2>
        <tabs>
          <tab title="Рекомендовані">
            <swiper
              v-show="
                response.products.recommended &&
                response.products.recommended.length > 0
              "
              :options="swiperReccomends"
              ref="swiperReccomends"
              class="super-container"
            >
              <swiper-slide
                class="reccomended"
                v-for="element of response.products.recommended"
                :key="element._id"
              >
                <ProductPreview :elementData="element" />
              </swiper-slide>

              <button
                @click="prevOrNextClickHandler(`swiperReccomends`, 'prev')"
                class="swiper-button-prev custon-btn-class swiper-control-button"
                slot="button-prev"
              >
                <span>prev</span>
              </button>

              <button
                @click="prevOrNextClickHandler(`swiperReccomends`, 'next')"
                class="swiper-button-next custon-btn-class swiper-control-button"
                slot="button-next"
              >
                <span class="sw-next-btn">next</span>
              </button>
            </swiper>
            <div
              class="not-content"
              style="text-align: center"
              v-show="
                response.products.recommended &&
                response.products.recommended.length === 0
              "
            >
              У цій категорії ще немає товарів
            </div>
          </tab>
          <tab title="Найпопулярніші">
            <swiper
              v-show="
                response.products.popular &&
                response.products.popular.length > 0
              "
              :options="swiperReccomends"
              ref="swiperReccomends"
              class="super-container"
            >
              <swiper-slide
                class="reccomended"
                v-for="element of response.products.popular"
                :key="element._id"
              >
                <ProductPreview :elementData="element" />
              </swiper-slide>

              <button
                @click="prevOrNextClickHandler(`swiperReccomends`, 'prev')"
                class="swiper-button-prev custon-btn-class swiper-control-button"
                slot="button-prev"
              >
                <span>prev</span>
              </button>

              <button
                @click="prevOrNextClickHandler(`swiperReccomends`, 'next')"
                class="swiper-button-next custon-btn-class swiper-control-button"
                slot="button-next"
              >
                <span class="sw-next-btn">next</span>
              </button>
            </swiper>
            <div
              class="not-content"
              style="text-align: center"
              v-show="
                response.products.popular &&
                response.products.popular.length === 0
              "
            >
              У цій категорії ще немає товарів
            </div>
          </tab>
          <tab title="Найвища оцінка">
            <swiper
              v-show="
                response.products.highestRated &&
                response.products.highestRated.length > 0
              "
              :options="swiperReccomends"
              ref="swiperReccomends"
              class="super-container"
            >
              <swiper-slide
                class="reccomended"
                v-for="element of response.products.highestRated"
                :key="element._id"
              >
                <ProductPreview :elementData="element" />
              </swiper-slide>

              <button
                @click="prevOrNextClickHandler(`swiperReccomends`, 'prev')"
                class="swiper-button-prev custon-btn-class swiper-control-button"
                slot="button-prev"
              >
                <span>prev</span>
              </button>

              <button
                @click="prevOrNextClickHandler(`swiperReccomends`, 'next')"
                class="swiper-button-next custon-btn-class swiper-control-button"
                slot="button-next"
              >
                <span class="sw-next-btn">next</span>
              </button>
            </swiper>
            <div
              class="not-content"
              style="text-align: center"
              v-show="
                response.products.highestRated &&
                response.products.highestRated.length === 0
              "
            >
              У цій категорії ще немає товарів
            </div>
          </tab>
        </tabs>
      </div>
    </div>

    <section class="adventages">
      <div class="container">
        <h2 class="select_category">Переваги</h2>
        <div class="adventages_wrap">
          <AdvantagesCard
            v-for="(card, idx) of adventagesSectionText"
            :key="idx"
            :data="card"
          />
        </div>
      </div>
    </section>

    <section class="last-products">
      <div class="container">
        <nuxt-link
          style="display: block"
          to="/catalog"
          class="select_category"
          title="Останні товари"
        >
          Останні товари
        </nuxt-link>
        <div class="slider-section">
          <swiper
            :options="swiperReccomends"
            :ref="`swiperReccomendslastProduct`"
            class="super-container"
          >
            <swiper-slide
              class="reccomended"
              v-for="element of response.products.latest"
              :key="element._id"
            >
              <ProductPreview :elementData="element" />
            </swiper-slide>

            <button
              @click="
                prevOrNextClickHandler(`swiperReccomendslastProduct`, 'prev')
              "
              class="swiper-button-prev custon-btn-class swiper-control-button"
              slot="button-prev"
            >
              <span>prev</span>
            </button>

            <button
              @click="
                prevOrNextClickHandler(`swiperReccomendslastProduct`, 'next')
              "
              class="swiper-button-next custon-btn-class swiper-control-button"
              slot="button-next"
            >
              <span class="sw-next-btn">next</span>
            </button>
          </swiper>
        </div>
      </div>
    </section>

    <section class="news">
      <div class="container">
        <nuxt-link
          style="display: block"
          to="/catalog"
          class="select_category"
          title="Останні товари"
        >
          Новини
        </nuxt-link>
        <div class="news-wrap" style="margin-top: 30px">
          <NewsItem
            class="col-md-4"
            v-for="(el, newsIndex) of response.posts"
            :data="el"
            :key="newsIndex"
          />
        </div>
      </div>
    </section>

    <section class="call-me">
      <div class="container">
        <h2 class="select_category">Зв'яжіться з нами</h2>
        <div class="row d-flex f-center">
          <div class="col-md-6">
            <SendMeForm class="form mt-1" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SendMeForm from "@/components/home/SendMeForm";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

import ProductPreview from "@/components/ProductPreview";
import TheMainBanner from "@/components/TheMainBanner";
import Footer from "@/components/Footer";

import AdvantagesCard from "@/components/home/AdvantagesCard";
import NewsItem from "@/components/home/NewsItem";

import { Tabs, Tab } from "vue-slim-tabs";

import API from "@/api/PublicAPI.js";

export default {
  name: "Home",
  head() {
    return {
      title: `Магазин медтехніки Тернопіль`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Купити медтехніку в Тернополі або з доставкою по Україні. Кращі ціни та якість товару.`,
        },
      ],
    };
  },
  components: {
    Tabs,
    SendMeForm,
    Tab,
    Footer,
    Swiper,
    SwiperSlide,
    ProductPreview,
    TheMainBanner,
    AdvantagesCard,
    NewsItem,
  },
  async asyncData({ error }) {
    let response;
    try {
      response = await API.initData();
    } catch (e) {
      error("извините случилась ошибка сервера");
    }
    // const response = await API.getRecommendedProducts();
    // const highRatingProducts = await API.getHighRatingProducts();
    // const news = await API.getNews();
    return {
      response,
      news: [],
      recomended: [],
      popular: [],
      highRatingProducts: [],
    };
  },
  data() {
    return {
      adventagesSectionText: [
        {
          title: "Доставка по всій Україні",
          text:
            "Для доставки використано сервіс Нова Пошта з можливістю оформлення та відстеження замовлень",
          img: "/home/adventuges/deliveryIcon.png",
          bg: "rgb(1, 150, 130);",
        },
        {
          title: "Доставка по всій Україні",
          text:
            "Для доставки використано сервіс Нова Пошта з можливістю оформлення та відстеження замовлень",
          img: "/home/adventuges/deliveryIcon.png",
          bg: "rgb(43, 189, 134);",
        },
        {
          title: "Час роботи",
          text: "Працюємо з 9-ої до 6-ої з понеділка до п'ятниці",
          img: "/home/adventuges/scheduleIcon.png",
          bg: "rgb(43, 189, 134);",
        },
        {
          title: "Час роботи",
          text: "Працюємо з 9-ої до 6-ої з понеділка до п'ятниці",
          img: "/home/adventuges/scheduleIcon.png",
          bg: "rgb(1, 150, 130);",
        },
      ],
      swiperReccomends: {
        spaceBetween: 10,
        slidesPerView: 4,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      },
      swiperOption: {
        fadeEffect: { crossFade: true },
        effect: "fade",
        speed: 1,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperBanners: [
        {
          path: "home/swiper-banners/banner.png",
        },
        {
          path: "home/swiper-banners/banner2.jpg",
        },
        {
          path: "home/swiper-banners/banner3.png",
        },
        {
          path: "home/swiper-banners/banner4.png",
          positionBaner: true,
        },
      ],
    };
  },
  methods: {
    prevOrNextClickHandler(refMy, type) {
      const ref = this.$refs[refMy];
      if (type === "prev") {
        ref.$swiper.slidePrev();
        return false;
      }
      if (type === "next") {
        ref.$swiper.slideNext();
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "./assets/mixins.scss";
.adventages {
  .adventages_wrap {
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
  }
}
.news {
  .row:before {
    display: none !important;
  }
  .news-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }
}
.last-products {
  .slider-section {
    margin-top: 30px;
  }
}
.select_category {
  text-align: center;
  font-size: 2rem;
  background: hsla(0, 0%, 94.1%, 0.632);
  font-weight: 300;
  padding: 20px 0;
  margin-top: 70px;
  font-family: nunito, sans-serif;
}
.slider-section {
  .custon-btn-class {
    padding: 21px;
    background-color: #2bbd86 !important;
    border: none;
    outline: none;
    &:hover {
      background: darken(#2bbd86, 5%) !important;
    }
  }
  .swiper-button-prev {
    left: 0 !important;
    span {
      transform: translate(-50%, -50%) rotate(227deg);
      display: block;
      position: absolute;
      top: 50%;
      left: 55%;
      border-color: #fff;
      border-style: solid;
      border-width: 3px 3px 0 0;
      padding: 5px;
      transition: 0.3s;
      font-size: 0;
    }
  }
  .swiper-button-next {
    right: 0 !important;
    span {
      transform: translate(-75%, -50%) rotate(45deg);
      display: block;
      position: absolute;
      top: 50%;
      left: 55%;
      border-color: #fff;
      border-style: solid;
      border-width: 3px 3px 0 0;
      padding: 5px;
      transition: 0.3s;
      font-size: 0;
    }
  }
  .tabs-container {
    .swiper-container {
      max-height: 500px;
      height: 100%;
    }
    .tabs {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 25px;
      margin-bottom: 50px;
      .tab {
        margin-left: 25px;
        &.active {
          span {
            font-family: nunito, sans-serif;
            padding: 8px 25px;
            font-weight: lighter;
            border-radius: 5px;
            background: #2bbd86;
            color: #fff !important;
          }
        }
        cursor: pointer;
        span {
          &:hover {
            color: #2bbd86;
          }
          font-size: 1rem;
        }
      }
    }
  }
}
.super {
  .vue-tablist {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 20px;
    flex-wrap: wrap;
    li {
      list-style: none;
      padding: 8px 25px;
      font-weight: lighter;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        color: #2bbd86;
      }
    }
    li[aria-selected="true"] {
      background: #2bbd86 !important;
      color: #fff;
    }
  }
  .swiper-button-next {
    right: 6%;
  }
  .swiper-button-prev {
    left: 6%;
  }
  .swiper-control-button {
    transition: fill 0.1s ease-in;
    &:hover {
      svg {
        fill: #2bbd86;
      }
    }
    &:after {
      visibility: hidden;
    }
    svg {
      margin: 0 3px;
      width: 1rem;
      position: absolute;
      display: flex;
      z-index: 5;
      justify-content: center;
      cursor: pointer;
      outline: none;
      align-self: center;
    }
    z-index: 20;
  }
  .sw {
    // .swiper-container {
    //   overflow: hidden;
    //   position: relative;
    //   &:after {
    //     content: "";
    //     top: 0;
    //     position: absolute;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     background: rgba(0, 0, 0, 0.28);
    //     z-index: 10;
    //     width: 100%;
    //     height: 100%;
    //   }
    // }
  }
  .swiper-container {
    overflow: hidden;
    position: relative;
  }
  .banner-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
@media (max-width: 576px) {
  .select_category {
    margin-top: 1rem !important;
  }
  .adventuges_card {
    width: 100% !important;
  }
}
</style>
