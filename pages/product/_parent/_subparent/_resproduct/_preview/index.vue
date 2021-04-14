<template>
  <div class="single_product">
    <div class="container">
      <div class="content_page_info">
        <div class="left page_ingo_item">
          <Brudcrumbs :brudcrumbsData="brudcrumns" />
          <swiper
            :options="{}"
            :ref="`swiperReccomendslastProduct`"
            class="super-container"
            @slideChangeTransitionStart="changeSlideTouchHandler"
          >
            <swiper-slide
              class="reccomended"
              v-for="(element, idx) of product.gallery"
              :key="element._id"
            >
              <img
                class="image-product"
                :src="element"
                :alt="product.name_ua + idx"
                :title="product.name_ua"
              />
            </swiper-slide>
            <div
              class="swiper-pagination"
              slot="pagination"
              v-show="product.gallery.length > 1"
            >
              <ul class="paginate-wrap">
                <li
                  v-for="(paginate, i) of product.gallery"
                  ref="paginate-item"
                  :class="[i === 0 ? 'active' : '', `pagination_item-${i}`]"
                  @click="changeSlide(i)"
                  :key="i + 'st'"
                  class="pagination_item"
                >
                  <span></span>
                </li>
              </ul>
            </div>
          </swiper>
        </div>
        <div class="right page_ingo_item">
          <h1>
            {{ product.name_ua }}
          </h1>
          <div class="price_block">
            <div class="price">{{ product.price }}₴</div>
            <button
              @click="addToBasket"
              :class="product.qty > 0 ? 'active' : 'disabled-button'"
              style="padding: 9px 15px; font-size: 17px"
              class="button"
            >
              {{ productIsInCard ? "В кошику" : " Додати в кошик" }}
            </button>
          </div>
          <div class="desc">
            {{ product.description_ua.slice(0, 300) }}
            <span class="show_more" @click="showDescription"> Більше </span>
          </div>

          <div class="attr">
            <div class="attrs_colors" v-if="product.isHaveColor">
              <span style="padding-bottom: 1rem">Колір:</span>
              <tabs>
                <tab
                  class="tabActive"
                  v-for="(el, idx) of product.resultAttributes"
                  :key="idx"
                  :title="el.color"
                >
                  <span v-if="el.data.length > 0" style="padding-bottom: 1rem"
                    >Розмір:</span
                  >
                  <ul
                    class="select_top_filter"
                    @click="changeAttributeHandler($event)"
                  >
                    <li
                      ref="top_filter_item"
                      :data-type="`${size}`"
                      class="top_filter_item"
                      v-for="(size, i) of el.data"
                      :key="i + 'sth'"
                    >
                      {{ size }}
                    </li>
                  </ul>
                </tab>
              </tabs>
            </div>
            <div v-else class="attrs_colors">
              <span v-if="product.isHaveSize" style="padding-bottom: 1rem"
                >Розмір:</span
              >
              <ul
                class="select_top_filter"
                @click="changeAttributeHandler($event)"
              >
                <li
                  ref="top_filter_item"
                  v-for="(size, i) of product.resultAttributes[0].data"
                  :data-type="`${size['Розмір']}`"
                  :class="
                    productIsInCard['size'] === size['Розмір'] ? 'active' : ''
                  "
                  class="top_filter_item"
                  :key="i + 'sth'"
                >
                  {{ size["Розмір"] }}
                </li>
              </ul>
            </div>
            <div class="wrap" v-if="product.vendorID">
              <span>Країна Виробника:</span>
              <span class="vendor">
                {{ product.vendorID && product.vendorID.title }}
              </span>
            </div>
            <div class="wrap">
              <span>Категорія:</span>
              <span class="vendor">
                {{ product.categoryList[product.categoryList.length - 1] }}
              </span>
            </div>
            <div class="wrap">
              <span>Кількість:</span>
              <span class="vendor" :class="product.qty > 0 ? 'green' : 'red'">
                {{ product.qty > 0 ? "В наявності" : "Немає в наявності" }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="tabs_container">
        <tabs ref="my-tab">
          <tab title="Опис товару">
            {{ product.description_ua }}
          </tab>
          <tab title="Відгуки" style="text-align: center">
            Для цього товару ще немає відгуків
          </tab>
          <tab title="Доставка">
            Замовлення товарів: Для Вашої зручності інтернет-магазин
            "Медтехніка" передбачив два способи замовлення товарів: на САЙТІ –
            24 години на добу, 7 днів на тиждень знайдіть виріб, який Вас
            цікавить, додайте його в кошик своїх покупок і пройдіть за
            посиланням Кошик для оформлення замовлення; за ТЕЛЕФОНОМ, 7 днів на
            тиждень із 8.00 до 20.00 знайдіть виріб, який Вас цікавить, і
            обов'язково зв'яжіться з нами за номерам: +380 (96) 915 61 45 для
            оформлення замовлення. Оплата замовлення Для Вашої зручності
            інтернет-магазин "Рідні Медтехніка" передбачив кілька способів
            оплати виробу, який Ви вибрали: У нашому магазині "Медтехніка" - У
            Тернополі (вулиця Гуго Коллонтая 2) Банківським переказом (за фактом
            оформлення замовлення) під час оформлення замовлення з будь-якого
            міста України Ви можете оплатити товар, який Ви замовили, через
            LiqPay або банківським переказом. Квитанцію з нашими реквізитами
            можна роздрукувати після оформлення замовлення на сайті.
          </tab>
        </tabs>
      </div>

      <div itemtype="http://schema.org/Product" itemscope v-if="false">
        <meta itemprop="name" :content="product.name_ua" />
        <link
          itemprop="image"
          :href="`${productOriginLink}/img/${product.gallery[0]}`"
        />
        <meta
          itemprop="description"
          :content="`${this.product.name_ua} ${$t('descTmpl')}`"
        />
        <div itemprop="offers" itemtype="http://schema.org/Offer" itemscope>
          <link itemprop="url" :href="productOriginLink" />
          <meta
            v-if="product.qty > 0"
            itemprop="availability"
            inStock
            content="https://schema.org/InStock"
          />
          <meta
            v-else
            itemprop="availability"
            outOfStock
            content="https://schema.org/OutOfStock"
          />
          <meta itemprop="priceCurrency" content="UAH" />
          <meta itemprop="url" :content="productOriginLink" />
          <meta
            itemprop="itemCondition"
            content="https://schema.org/NewCondition"
          />
          <meta itemprop="price" :content="product.price" />
          <div
            itemprop="seller"
            itemtype="http://schema.org/Organization"
            itemscope
          >
            <meta itemprop="name" content="Медтехніка" />
          </div>
        </div>
        <div itemprop="brand" itemtype="http://schema.org/Brand" itemscope>
          <meta itemprop="name" content="Медтехніка" />
        </div>
      </div>
    </div>
    <ToTopButton />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import { Tabs, Tab } from "vue-slim-tabs";

import API from "@/api/PublicAPI.js";
import Brudcrumbs from "@/components/Brudcrumbs";
import ToTopButton from "@/components/App/ToTopButton";
import { mapState } from "vuex";
export default {
  name: "SingleProduct",
  components: {
    SwiperSlide,
    Swiper,
    Tabs,
    Tab,
    ToTopButton,
  },
  head() {
    return {
      title: `${this.product.meta.title_ua} ціни в Україні, доставка`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.product.meta.description_ua}`,
        },
      ],
    };
  },
  async asyncData({ route, error, params, query }) {
    let response = await API.getProductNewApi(params.parent, params.preview);
    response = response.products[0];

    const isHaveColor = response.attr.includes("Колір");
    const isHaveSize = response.attr.includes("Розмір");

    const colorObj = {};
    const resArray = [];
    if (isHaveColor) {
      response.attrOptions.forEach((el) => {
        colorObj[el["Колір"]] = response.attrOptions.map((sub) => {
          if (el["Колір"] === sub["Колір"]) return sub["Розмір"];
        });
      });
      for (const key in colorObj) {
        resArray.push({
          color: key,
          data: [...colorObj[key]],
        });
      }
    } else {
      resArray.push({
        color: false,
        data: response.attrOptions,
      });
    }
    response.resultAttributes = resArray;
    response.isHaveColor = isHaveColor;
    response.isHaveSize = isHaveSize;
    response.childCategory.unshift(response.parentCategory);
    response.link = route.path

    const brudcrumns = [
      {
        text: "Головна",
        to: "/",
      },
      {
        text: "Каталог",
        to: "/catalog",
      },
      {
        text: response.categoryList[0],
        to: `/catalog/${response.childCategory[0]}`,
      },
      {
        text: response.categoryList[1],
        to: `/catalog/${response.childCategory[0]}/${response.childCategory[1]}`
      },
      {
        text:response.categoryList[2],
        to: `/catalog/${response.childCategory[0]}/${response.childCategory[1]}/${response.childCategory[2]}`
      },
      {
        text:  response.name_ua,
        to: route.path
      }
    ];

    return { product: response, brudcrumns };
  },
  data() {
    return {
      sizeAttribute: "",
      color: "",
    };
  },
  computed: {
    ...mapState({
      cartData: (state) => state["cart"].cartData,
    }),
    productOriginLink() {
      return document.location.origin;
    },
    productIsInCard() {
      const find =
        this.cartData && this.cartData.find((el) => el.product._id === this.product._id);
      return find ? find : false;
    },
  },
  mounted() {
    console.log(this.product, "stas");
    this.color = this.product.isHaveColor
      ? this.product.resultAttributes[0].color
      : "";
  },
  methods: {
    addToBasket() {
      if (this.productIsInCard) {
        this.$store.commit("cart/REMOVE_FROM_CART", this.product._id);
        return false;
      }
      if (this.product.qty <= 0) return false;

      if (this.product.isHaveSize && !this.sizeAttribute) {
        this.$toast.open({
          message: "Перед додаванням в кошик виберіть розмір",
          type: "error",
          duration: 2000,
          position: "top",
        });
        return false;
      } else if (this.product.isHaveColor && !this.color) {
        this.$toast.open({
          message: "Перед добавлденіем в кошик виберіть колір",
          type: "error",
          duration: 2000,
          position: "top",
        });
        return false;
      } else {
        const resObj = {
          ...(this.product.isHaveColor && this.color && { color: this.color }),
          ...(this.product.isHaveSize &&
            this.sizeAttribute && { size: this.sizeAttribute }),
          product: this.product,
          numberInCart: 1,
          s_id: this.sizeAttribute + this.product._id,
        };
        this.$store.dispatch("cart/addToCartAction", resObj);
        this.$toast.open({
          message: `${this.product.name_ua} Додано до кошика`,
          type: "success",
          duration: 2000,
          position: "top",
        });
      }
    },
    showDescription() {
      const panel = this.$refs["my-tab"].$el;
      const y = panel.getBoundingClientRect().top + window.pageYOffset + -10;
      window.scrollTo({ top: y, behavior: "smooth" });
      this.$refs["my-tab"].selectedIndex = 0;
    },
    changeAttributeHandler(e) {
      const selectAttr = e.target.closest(".top_filter_item");
      if (selectAttr) {
        this.$refs["top_filter_item"].forEach((el) =>
          el.classList.remove("active")
        );
        selectAttr.classList.add("active");
        this.sizeAttribute = selectAttr.dataset.type;
      }
    },
    changeSlideTouchHandler(s) {
      this.changeSlide(s.activeIndex);
    },
    changeSlide(i) {
      this.$refs["paginate-item"].forEach((el) =>
        el.classList.remove("active")
      );
      const activeEl = document.querySelector(`.pagination_item-${i}`);
      if (activeEl) {
        activeEl.classList.add("active");
      }
      this.$refs["swiperReccomendslastProduct"].$swiper.slideTo(i, 500, false);
    },
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
.single_product {
  .breadcrumbs {
    margin-bottom: 1rem;
    @media (max-width: 992px) {
      justify-content: left;
      a {
        font-size: 14px;
      }
      svg {
        display: none !important;
      }
    }
  }
}
.v-toast__text {
  color: white !important;
}
.disabled-button {
  background: lighten($color: #2bbd86, $amount: 25%) !important;
  cursor: auto !important;
}
.tabs_container {
  padding-top: 50px;
  .vue-tabpanel {
    padding-top: 20px;
    font-weight: 200;
    color: #888;
    letter-spacing: 1.5px;
    line-height: 25px;
  }
  .vue-tablist {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid hsla(0, 0%, 80%, 0.646);
    .vue-tab {
      width: 200px;
      text-align: center;
      padding: 15px 0;
      cursor: pointer;
      font-size: 1rem;
      font-family: nunito, sans-serif;
      border-bottom-width: 2px;
      transition: all 0.2s ease-in-out;
      border-bottom: 2px solid transparent;
      &[aria-selected="true"] {
        // border-bottom-width: 2px;
        border-color: #2bbd86;
      }
    }
  }
}
.attr {
  .vendor {
    color: #8e8e8e;
    font-weight: lighter;
    padding: 7px 12px;
    &.green {
      color: #2bbd86;
    }
    &.red {
      color: red;
    }
  }
}
.content_page_info {
  .attr {
    span {
      display: block;
      margin-top: 1rem;
    }
    .vue-tab {
      padding: 7px 12px;
      display: inline-block;
      color: #8e8e8e;
      font-weight: lighter;
      cursor: pointer;
      &[aria-selected="true"] {
        outline: 2px solid #2bbd86 !important;
      }
      // outline: 2px solid #2bbd86 !important;
    }
    .select_top_filter {
      // margin: 0 -12px;
      flex-wrap: wrap;
      display: flex;
      .top_filter_item {
        margin-right: 10px;
        padding: 7px 12px;
        display: inline-block;
        color: #8e8e8e;
        font-weight: lighter;
        cursor: pointer;
        &.active {
          outline: 2px solid #2bbd86 !important;
        }
      }
    }
  }
  .desc {
    padding-top: 20px;
    font-weight: 200;
    color: #888;
    letter-spacing: 1.5px;
    line-height: 25px;
    .show_more {
      font-family: Arial;
      cursor: pointer;
      color: black;
      font-size: 13px;
      padding-left: 10px;
    }
  }
  .swiper-pagination {
    width: 100%;
    min-height: 20px;
    position: relative !important;
    justify-content: center;
    display: flex;
    .paginate-wrap {
      justify-content: center;
      text-align: center;
      display: flex;
      width: 100%;
      .pagination_item {
        padding: 10px;
        justify-content: center;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
          span {
            opacity: 1;
          }
        }
        span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          padding: 0;
          border: none;
          background: #000;
          opacity: 0.5;
        }
        &.active {
          span {
            opacity: 1;
            background: #2bbd86;
          }
        }
      }
    }
  }
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  .image-product {
    object-fit: cover;
    height: 450px;
    max-width: 605px;
    width: 100%;
    cursor: pointer;
  }
  .left {
    width: 45%;
  }
  .right {
    width: 40%;
    h1 {
      font-size: 40px;
      font-weight: 200;
      color: #404040;
    }
    .price_block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      padding: 10px 0 30px;
      .price {
        font-weight: 700;
        color: #2bbd86;
        font-size: 25px;
        padding: 0;
        .button {
          @include buttonCreate(#2bbd86, white);
          &.disabled {
            background: red;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding-top: 0;
    flex-direction: column;
    .page_ingo_item {
      .button {
        @include buttonCreate(#2bbd86, white);
        border-radius: 5px;
      }
      width: 100%;
      h1 {
        font-size: 25px;
      }
    }
  }
}
</style>