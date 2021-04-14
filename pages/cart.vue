<template>
  <div class="cart_page">
    <div class="container"></div>
    <HeaderImage img="/home/swiper-banners/banner.png" title="Товари">
      <Brudcrumbs :brudcrumbsData="brudcrumns" />
    </HeaderImage>
    <div class="container" v-show="cart.length > 0">
      <div class="table-wrap">
        <div class="header_table_wrap">
          <div class="item_cart" style="flex: 2.5">Товар</div>
          <div class="item_cart">Ціна</div>
          <div class="item_cart">Кількість</div>
          <div class="item_cart">Загальна сума</div>
          <div class="item_cart">Видалити</div>
        </div>
        <div class="table_content">
          <div class="item_content" v-for="(el, i) of cart" :key="i">
            <nuxt-link
              class="img_item item"
              style="flex: 2.5"
              :to="el.product.link"
              :title="el.product.name_ua"
            >
              <img
                :src="el.product.gallery[0]"
                :alt="el.product.name_ua"
                :title="el.product.name_ua"
              />
              <span class="title"> {{ el.product.name_ua }} </span>
            </nuxt-link>
            <div class="item_cart item_price">{{ el.product.price }}₴</div>
            <div class="item_cart switcher-quality">
              <!-- {{ el.quantity }} -->
              <button
                class="button_cart quality minus"
                @click="minusProductTocart(el, i)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                  />
                </svg>
              </button>
              <input
                type="text"
                readonly
                class="input_cart_quality"
                :value="el.numberInCart"
              />
              <button
                class="button_cart quality plus"
                @click="plusProductTocart(el, i)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                  />
                </svg>
              </button>
            </div>
            <div class="item_cart item_total">
              {{ el.numberInCart * el.product.price }}₴
            </div>
            <div class="item_cart remove">
              <svg viewBox="0 0 352 512" @click="removeProductHandler(el)">
                <path
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="total_sum" v-show="cart.length > 0">
        <div class="sum item_price">{{ getTotalSum }}₴</div>
        <button class="button_cart" @click="$router.push('/order')">
          Купити
        </button>
      </div>
    </div>
    <div v-show="cart.length === 0" class="empty-cart">
      Кошик порожній <nuxt-link to="/catalog">Купити зараз</nuxt-link>
    </div>
  </div>
</template>

<script>
import API from "@/api/PublicAPI.js";
import HeaderImage from "@/components/Header/HeaderImage";
import Brudcrumbs from "@/components/Brudcrumbs";
import { mapState } from "vuex";
export default {
  name: "cart",
  data() {
    return {
      totalSum: 0,
      brudcrumns: [
        {
          text: "Головна",
          to: "/",
        },
        {
          text: "Кошик",
          to: "/cart",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      cart: (state) => state["cart"].cartData,
    }),
    getTotalSum() {
      let sum = 0;
      this.cart.forEach((el) => {
        sum += el.product.price * el.numberInCart;
      });
      return sum;
    },
  },
  methods: {
    removeProductHandler(prod) {
      let cart = this.cart.filter((el) => el.product._id !== prod.product._id);
      this.$store.commit("cart/SET_CART_STATE", cart);
    },
    plusProductTocart(prod) {
      this.$store.commit("cart/CHANGE_NUMBER_IN_CART", {
        id: prod.product._id,
        type: "plus",
      });
    },
    minusProductTocart(prod, idx) {
      if (this.cart[idx].numberInCart == 1) return false;
      this.$store.commit("cart/CHANGE_NUMBER_IN_CART", {
        id: prod.product._id,
        type: "minus",
      });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/mixins.scss";
.empty-cart {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  a {
    margin-left: 5px;
    color: #019682;
    &:hover {
      text-decoration: underline;
    }
  }
}
.button_cart {
  @include buttonCreate(#2bbd86, white);
  padding: 13px 24px;
  font-size: 20px;
  border-radius: 5px;
  text-transform: uppercase;
  &.quality {
    color: grey;
    padding: 13px 20px;
    background: #ebebeb;
    border-radius: 0;
    &:hover {
      background: lighten($color: #019682, $amount: 3%);
      svg {
        fill: white !important;
      }
    }
    svg {
      fill: grey !important;
      cursor: pointer;
      width: 0.8rem !important;
      font-weight: lighter !important;
    }
  }
}
.cart_page {
  .input_cart_quality {
    text-align: center;
    width: 60px;
    height: 49px;
    background: #f0f0f0;
    outline: none;
    border: navajowhite;
    font-size: 20px;
    color: #333;
    font-weight: 300;
  }
  .total_sum {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
    .sum {
      font-size: 35px;
      color: #019682;
      font-weight: 700;
    }
  }
  .item_price,
  .item_total {
    font-size: 25px;
    color: #2bbd86;
  }
  .img_item {
    display: flex;
    &:hover {
      .title {
        color: #019682;
      }
    }
    .title {
      display: flex;
      align-items: center;
      margin-left: 1rem;
      font-family: nunito, sans-serif;
      font-size: 20px;
      margin-bottom: 7px;
      color: #000;
    }
  }
  .item_content {
    padding: 25px 0;
    position: relative;
    border: 1px solid #eee;
    display: flex;

    img {
      width: 200px;
      height: 200px;
    }
    @media (max-width: 768px) {
      justify-content: space-around;
      .switcher-quality {
        order: 3;
      }
      a {
        flex: auto !important;
        order: 1;
        span {
          margin-left: 5px !important;
        }
        .title {
          display: flex;
          font-size: 18px;
        }
      }
      .item_total {
        order: 2;
      }
      flex-wrap: wrap;
      position: relative;
      img {
        width: 150px;
        height: 150px;
      }
      .item_price {
        display: none;
      }
      .item_cart {
        flex: auto;
      }
      .remove {
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
  }
  .table-wrap {
    margin-top: 1.5rem;
    .header_table_wrap {
      padding: 15px 0;
      background: #019682;
      align-items: center;
      justify-content: space-between;
      display: flex;
      .item_cart {
        flex: 1 1;
        color: #fff;
        font-weight: 300;
        text-align: center;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  .table {
    img {
      width: 200px;
      height: 200px;
    }
    margin-top: 1rem;
    table-layout: fixed;
    border-bottom: 1px solid #dee2e6;
    border-collapse: collapse;
    td {
      text-align: center;
    }
    .thead-dark th {
      background: #019682;
      color: #fff;
      font-weight: 300;
      text-align: center;
      font-size: 1rem;
    }
  }
  .item_cart {
    svg {
      width: 1.5rem;
      // vertical-align: -0.125em;
      fill: #404040;
      cursor: pointer;
      &:hover {
        fill: rgb(1, 150, 130);
      }
    }
    flex: 1 1;
    align-items: center;
    justify-content: center;
    display: flex;
  }
}
</style>