<template>
  <div class="order_page">
    <HeaderImage img="/home/swiper-banners/banner.png" title="Замовлення">
      <Brudcrumbs :brudcrumbsData="brudcrumns" />
    </HeaderImage>
    <div class="container">
      <div class="order_wrap">
        <div class="row">
          <div class="col-md-6 order_items">
            <client-only>
              <div
                class="order-item"
                v-for="(element, idx) of order"
                :key="idx"
              >
                <nuxt-link
                  :to="element.product.link"
                  :title="element.product.name_ua"
                  class="order_link"
                >
                  <div class="left">
                    <img
                      :src="element.product.gallery[0]"
                      :alt="element.product.name_ua"
                    />
                    <div class="count_order_product">
                      {{ element.numberInCart }}
                    </div>
                    <div class="text-order">
                      {{
                        element.product.name_ua.split(" ").slice(0, 4).join(" ")
                      }}
                      <div class="desc">
                        {{ element.product.description_ua.slice(0, 40) }}...
                      </div>
                    </div>
                  </div>
                </nuxt-link>
                <div class="right">
                  {{ element.product.price * element.numberInCart }}₴
                </div>
              </div>
            </client-only>
            <div class="total_price_order">
              <div class="total_left">Ціна:</div>
              <div class="total_right">{{ getTotalPrice }}₴</div>
            </div>
          </div>
          <div class="col-md-6 from_order">
            <h2>Оформити замовлення</h2>
            <form action="" @submit.prevent="submitFormHandler">
              <div class="form_wrap">
                <div class="name_data">
                  <div class="form-group">
                    <label for="name-form">Ім'я</label>
                    <input
                      type="text"
                      :class="{
                        error: $v.name.$error && $v.name.$dirty,
                        success: !$v.name.$error && $v.name.$dirty,
                      }"
                      class="form-control"
                      id="name-form"
                      v-model.trim="$v.name.$model"
                      placeholder="Іван"
                    />
                    <div class="form-valid-controls">
                      <div class="form-valid-controls">
                        <div
                          v-if="!$v.name.required && $v.name.$dirty"
                          class="error"
                        >
                          Ім'я - обов'язкове поле
                        </div>
                        <div
                          v-if="!$v.name.minLength && $v.name.$dirty"
                          class="error"
                        >
                          Ім'я не може бути менше 4 символів
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="surname-form">Прізвище</label>
                    <input
                      type="text"
                      :class="{
                        error: $v.surname.$error && $v.surname.$dirty,
                        success: !$v.surname.$error && $v.surname.$dirty,
                      }"
                      class="form-control"
                      id="surname-form"
                      v-model.trim="$v.surname.$model"
                      placeholder="Іванов"
                    />
                    <div class="form-valid-controls">
                      <div class="form-valid-controls">
                        <div
                          v-if="!$v.surname.required && $v.surname.$dirty"
                          class="error"
                        >
                          Прізвище - обов'язкове поле
                        </div>
                        <div
                          v-if="!$v.surname.minLength && $v.surname.$dirty"
                          class="error"
                        >
                          Прізвище не може бути менше 4 символів
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="phone-form">Номер телефону</label>
                  <input
                    :class="{
                      error: $v.phone.$error && $v.phone.$dirty,
                      success: !$v.phone.$error && $v.phone.$dirty,
                    }"
                    type="phone"
                    v-model.trim="$v.phone.$model"
                    v-mask="mask"
                    class="form-control"
                    id="phone-form"
                    placeholder="098-76-18-744"
                  />
                  <div class="form-valid-controls">
                    <div
                      v-if="!$v.phone.minLength && $v.phone.$dirty"
                      class="error"
                    >
                      Введіть коректний номер телефону
                    </div>
                    <div
                      v-if="!$v.phone.required && $v.phone.$dirty"
                      class="error"
                    >
                      Номер телефону - обов'язкове поле
                    </div>
                  </div>
                </div>
                <span class="label">Тип доставки</span>
                <Dropdown
                  defaultClass="success"
                  :activIndex="activeIndexDelivery"
                  :propdownData="dropdownSelectDelivery"
                  @changeSelectDropdown="selectDropdownDeliveryMethod"
                />

                <div v-show="deliveryIsPoshta">
                  <span class="label">Тип оплати</span>
                  <Dropdown
                    defaultClass="success"
                    :activIndex="activeIndexCashType"
                    :propdownData="dropdownBuy"
                    @changeSelectDropdown="selectDropdownPayMethod"
                  />

                  <div>
                    <span class="label">Місто</span>
                    <Dropdown
                      :defaultClass="selectCity.length !== 0 ? 'success' : ''"
                      :propdownData="getCities"
                      @findString="getAsyncCitiesData"
                      :inputType="true"
                      placeholder="Оберіть місто"
                      @changeSelectDropdown="selectCityHandler"
                    />
                  </div>

                  <div v-if="showSelectCity">
                    <span class="label">Номер відділення</span>
                    <Dropdown
                      :defaultClass="
                        selectCityHouse.length !== 0 ? 'success' : ''
                      "
                      ref="city-house"
                      placeholder="Оберіть відділення"
                      :propdownData="getSortingDataHouse"
                      :inputType="true"
                      @changeSelectDropdown="selectCityHouseHandler"
                      @findString="filterBySearchString"
                    />
                  </div>
                </div>
                <div class="finish_order">
                  <div class="checkbox_block">
                    <input type="checkbox" id="new_profile" />
                    <label for="new_profile">Оновити мій профіль</label>
                  </div>
                  <div class="button_wrap">
                    <button class="button-delivery">
                      Підтвердити замовлення
                    </button>
                  </div>
                  <div class="return_back">
                    <nuxt-link to="/cart">
                      <svg
                        viewBox="0 0 448 512"
                        class="GoBackBtn_goBack__I9eNM"
                      >
                        <path
                          d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                        ></path>
                      </svg>
                      Повернутися
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/home/Dropdown";
import API from "@/api/PublicAPI.js";
import HeaderImage from "@/components/Header/HeaderImage";
import Brudcrumbs from "@/components/Brudcrumbs";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import localMoment from "@/utils/localMoment.js";
import { mapState } from "vuex";
export default {
  name: "OrderPage",
  mixins: [validationMixin],
  // async asyncData({
  //   isDev,
  //   route,
  //   store,
  //   env,
  //   params,
  //   query,
  //   redirect,
  //   error,
  //   app,
  // }) {
  //   // let cart = app.$cookies.get("cart") || [];
  //   // let cartArray = cart.map((element) => element.id);
  //   // cartArray = cartArray.join(",");
  //   // let response = await API.getCartItemsByArrayId(cartArray);
  //   // response.forEach((responseItem, idx) => {
  //   //   responseItem.quantity = cart[idx].numberInCart;
  //   // });
  //   // return { order: [] };
  // },
  components: {
    HeaderImage,
    Brudcrumbs,
    Dropdown,
  },
  data() {
    return {
      name: "",
      surname: "",
      disabledForm: true,
      searchString: "",
      showSelectCity: false,
      phone: "",
      getCities: [],
      selectCity: [],
      activeIndexDelivery: 1,
      activeIndexCashType: 1,
      getCityHouse: [],
      selectCityHouse: [],
      sortingByStringCityHouse: [],
      dropdownSelectDelivery: [
        { title: "Нова пошта", atr: "new_poshta" },
        { title: "Самовивіз", atr: "self" },
      ],
      dropdownBuy: [
        {
          title: "Накладений платіж",
          atr: "Cash_on_delivery",
        },
        {
          title: "Картою (LiqPay)",
          atr: "liqpay",
        },
      ],
      mask: "###-##-##-###",
      brudcrumns: [
        {
          text: "Головна",
          to: "/",
        },
        {
          text: "Замовлення",
          to: "/order",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      order: (state) => state["cart"].cartData,
    }),
    getTotalPrice() {
      let sum = 0;
      this.order.forEach((el) => {
        sum += el.product.price * el.numberInCart;
      });
      return sum;
    },
    deliveryIsPoshta() {
      return (
        this.dropdownSelectDelivery[this.activeIndexDelivery].atr ===
        "new_poshta"
      );
    },
    getSortingDataHouse() {
      if (this.searchString) {
        return this.sortingByStringCityHouse;
      } else {
        return this.getCityHouse;
      }
    },
  },
  methods: {
    async generateSecsessOrder(data) {
      let response;
      try {
        this.$v.$reset();
        this.name = this.phone = this.surname = "";
        this.$toast.open({
          message: "Дякуємо замовлення створено успішно!",
          type: "success",
          duration: 2000,
          position: "top",
        });

        setTimeout(() => {
          this.$router.push("/");
        }, 2000);
        this.$cookies.set("cart", []);
        this.$store.commit("cart/SET_CART_STATE", []);
        response = await API.orderCreate(data);
      } catch (e) {
        this.$toast.open({
          message: "виникла помилка",
          type: "error",
          duration: 2000,
          position: "top",
        });
      }
      return response;
    },
    async submitFormHandler() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        if (!this.deliveryIsPoshta) {
          let resData = {
            name: this.name,
            surname: this.surname,
            paymentType: "cash",
            phone: this.phone,
            products: this.$cookies.get("cart"),
            deliveryCity: "Самовывоз",
            sum: this.getTotalPrice,
            dateOrder: localMoment("DD.MM.YYYY.hh.mm.ss", new Date()),
          };
          await this.generateSecsessOrder(resData);
        } else {
          if (this.selectCity.length === 0) {
            this.$toast.open({
              message: "Оберіть місто доставки",
              type: "error",
              duration: 2000,
              position: "top",
            });
            return false;
          }

          if (this.selectCityHouse.length === 0) {
            this.$toast.open({
              message: "Оберіть відділення",
              type: "error",
              duration: 2000,
              position: "top",
            });
            return false;
          }

          if (this.activeIndexCashType === 1) {
            let resData = {
              name: this.name,
              surname: this.surname,
              paymentType: "cart",
              phone: this.phone,
              products: this.$cookies.get("cart"),
              deliveryCity: this.selectCity.Description,
              sum: this.getTotalPrice,
              dateOrder: localMoment("DD.MM.YYYY.hh.mm.ss", new Date()),
              deliveryWarehouse: this.selectCityHouse.Description,
              status: "waitForPayment",
            };
            await this.generateSecsessOrder(resData);
          } else {
            let resData = {
              name: this.name,
              surname: this.surname,
              paymentType: "наложенный платёж",
              phone: this.phone,
              products: this.$cookies.get("cart"),
              deliveryCity: this.selectCity.Description,
              sum: this.getTotalPrice,
              dateOrder: localMoment("DD.MM.YYYY.hh.mm.ss", new Date()),
              deliveryWarehouse: this.selectCityHouse.Description,
            };
            await this.generateSecsessOrder(resData);
            // console.log("наложенный платж просто отправляем форму");
          }
        }
      }
    },
    filterBySearchString(v) {
      if (!v) {
        this.selectCityHouse = [];
      }
      const res = this.getCityHouse.filter((el) => {
        if (el.Description.indexOf(v) !== -1) return el;
      });
      this.searchString = v;
      this.sortingByStringCityHouse = res;
    },
    selectCityHouseHandler(idx) {
      this.selectCityHouse = this.getCityHouse[idx];
    },
    async selectCityHandler(idx) {
      this.showSelectCity = true;
      this.selectCity = this.getCities[idx];
      // console.log(this.selectCity.Description);
      const { data } = await API.getWarehousesByCity(
        this.selectCity.Description
      );
      this.getCityHouse = data.data;
      if (this.$refs["city-house"]) {
        this.$refs["city-house"].findString = "";
        this.selectCityHouse = [];
      }
    },
    async getAsyncCitiesData(value) {
      if (!value) {
        this.showSelectCity = false;
        this.selectCity = [];
      }
      const { data } = await API.getCityes(value);
      const response = data.data;
      this.getCities = response;
    },
    selectDropdownPayMethod(idx) {
      this.activeIndexCashType = idx;
    },
    selectDropdownDeliveryMethod(idx) {
      this.activeIndexDelivery = idx;
    },
  },
  async mounted() {
    await this.getAsyncCitiesData("");
  },
  validations: {
    name: { required, minLength: minLength(4) },
    surname: { required, minLength: minLength(4) },
    phone: {
      required,
      minLength: minLength(13),
    },
  },
};
</script>

<style lang="scss">
@import "./assets/mixins.scss";
.finish_order {
  .return_back {
    align-items: center;
    color: grey;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    a {
      font-size: 13px;
      color: grey;
      &:hover {
        color: black;
      }
    }
    svg {
      margin-right: 2px;
      fill: grey;
      width: 0.8rem;
      vertical-align: -0.125em;
    }
  }
  .button_wrap {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
  padding-top: 1rem;
  label {
    font-weight: 300 !important;
    cursor: pointer;
    color: #404040;
    display: inline-block;
    margin-left: 5px;
  }
}
.button-delivery {
  @include buttonCreate(#2bbd86, white);
  padding: 9px 15px;
  font-size: 17px;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 100%;
    display: block;
    padding: 13px 15px;
  }
}
input,
textarea {
  padding: 10px 15px;
  outline: none;
  border: 1px solid rgba(126, 133, 128, 0.22);
  &:focus {
    border-color: #80bdff !important;
  }
  &.error {
    border-color: red !important;
  }
  &.success {
    border-color: green !important;
  }
}
.order_wrap {
  .label {
    margin-top: 1rem;
    color: #7b7b7b;
    font-weight: 300;
    margin-bottom: 5px;
    display: block;
  }
  input {
    padding: 10px 15px;
    background: none;
    border-radius: 10px;
    border: 1px solid #ccc;
    color: #404040;
  }
  .from_order {
    .name_data {
      align-items: stretch;
      justify-content: space-between;
      display: flex;
      .form-group {
        width: 47%;
      }
      input {
        background: none;
        flex-grow: 0;
        border-radius: 10px;
        border: 1px solid #ccc;
        color: #404040;
      }
    }
    background-color: hsla(0, 0%, 94.1%, 0.632);
    padding: 50px;
    h2 {
      text-align: center;
      font-size: 24px;
      font-weight: 500;
    }
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
  .total_left {
    font-size: 20px;
    font-weight: 500;
    font-family: "Nunito";
  }
  .total_right {
    font-size: 25px;
  }
  .total_price_order {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-top: 2px solid #f0f0f0;
    color: #404040;
  }
  .count_order_product {
    min-width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #2bbd86;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 88px;
    top: -10px;
    color: white;
  }
  .order_link {
    &:hover {
      .text-order {
        color: #2bbd86;
      }
    }
  }
  .desc {
    color: #ccc;
    font-size: 14px;
  }
  margin-top: 2rem;
  .order-item {
    flex-wrap: wrap;
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: space-between;
  }
  .right {
    font-size: 25px;
    color: #404040;
  }
  .left {
    position: relative;
    display: flex;
    align-items: center;
    .text-order {
      font-size: 18px;
      color: #000;
      font-weight: 500;
    }
    img {
      width: 100px;
      position: relative;
      height: 100px;
      border: 1px solid hsla(0, 0%, 94.1%, 0.9);
      border-radius: 10px;
      padding: 0;
      margin-right: 30px;
    }
  }
}
</style>