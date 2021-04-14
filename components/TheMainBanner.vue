<template>
  <section class="sw" style="position: relative">
    <swiper class="swiper" :options="options" :ref="refLink">
      <swiper-slide v-for="(el, idx) of swiperBanners" :key="idx">
        <div class="content">
          <h1> {{el.title}} </h1>
          <button class="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
                d="M320 384H128V224H64v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V224h-64v160zm314.6-241.8l-85.3-128c-6-8.9-16-14.2-26.7-14.2H117.4c-10.7 0-20.7 5.3-26.6 14.2l-85.3 128c-14.2 21.3 1 49.8 26.6 49.8H608c25.5 0 40.7-28.5 26.6-49.8zM512 496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h-64v272z"
              />
            </svg>
            <nuxt-link to="/catalog" style="color: white">
              Перейти до покупок
            </nuxt-link>
          </button>
        </div>
        <div class="overlay"></div>
        <img
          class="banner-image"
          :src="el.photo"
          :alt="el.title"
        />
      </swiper-slide>
      <div
        @click="prevSlideHandler"
        class="swiper-button-prev swiper-control-button"
        slot="button-prev"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
          />
        </svg>
      </div>
      <div
        @click="nextSlideHandler"
        class="swiper-button-next swiper-control-button"
        slot="button-next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          />
        </svg>
      </div>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "SLiderMain",
  components: { Swiper, SwiperSlide },
  props: {
    options: {
      required: true,
      type: Object,
      default: {},
    },
    refLink: {
      type: String,
      required: true,
    },
    swiperBanners: {
      required: true,
      type: Array,
      default: [],
    },
  },
  methods: {
    prevSlideHandler() {
      this.$refs[this.refLink].$swiper.slidePrev();
    },
    nextSlideHandler() {
      this.$refs[[this.refLink]].$swiper.slideNext();
    },
  },
};
</script>
<style lang="scss">
@import "./assets/mixins.scss";
.sw {
  .overlay {
    content: "";
    top: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.28);
    z-index: 10;
    width: 100%;
    height: 100%;
  }
  .content {
    color: white;
    width: 34px;
    z-index: 100;
    position: absolute;
    min-width: 340px;
    left: 20%;
    top: 50%;
    transform: translateY(-50%);
    h1 {
      font-weight: 500;
      color: #ffff;
      font-family: nunito, sans-serif;
      margin-bottom: 20px;
    }
    .button {
      @include buttonCreate(#2bbd86, white);
      font-size: 20px;
      padding: 15px 30px;
      border-radius: 5px;
      svg {
        margin-right: 5px;
        width: 1.2rem;
        fill: #fff;
      }
    }
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 75% !important;
      min-width: auto;
      left: 13% !important;
      top: 50% !important;
      h1 {
        font-size: 1.1rem !important;
      }
      button {
        padding: 15px 15px !important;
        font-size: 16px !important;
      }
    }
  }
  .swiper-slide {
    img {
      transition: 1s ease-in;
      opacity: 0.5;
    }
  }
  .swiper-slide-active {
    img {
      transition: opacity 0.7s ease-in;
      opacity: 1;
    }
  }
  .swiper-control-button {
    svg {
      width: 2rem !important;
    }
  }
  @media (max-width: 992px) {
    .swiper-control-button {
      bottom: 20%;
      top: 50%;
      svg {
        width: 1.2rem !important;
      }
    }
    .content {
      left: 11%;
      top: 30%;
      h1 {
        font-size: 1.3rem;
      }
      button {
        // margin-top: 64px;
      }
    }
  }
}
</style>