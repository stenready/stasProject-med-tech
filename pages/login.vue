<template>
  <div class="profile">
    <HeaderImage img="/home/swiper-banners/banner.png" title="Логін">
      <Brudcrumbs :brudcrumbsData="brudcrumns" />
    </HeaderImage>
    <div class="container">
      <div class="row">
        <div class="col-md-3 register_wrap">
          <form action="" @submit.prevent="submitFormHandler">
            <div class="register_form">
              <div class="form-group">
                <label for="email-form">Електронна пошта</label>
                <input
                  :class="{
                    error: $v.email.$error && $v.email.$dirty,
                    success: !$v.email.$error && $v.email.$dirty,
                  }"
                  type="text"
                  class="form-control form-control-input"
                  v-model.trim="$v.email.$model"
                  id="email-form"
                  placeholder="joe.doe.example@gmail.com"
                />
                <div class="form-valid-controls">
                  <div v-if="!$v.email.email && $v.email.$dirty" class="error">
                    Введіть коректний email
                  </div>
                  <div
                    v-if="!$v.email.required && $v.email.$dirty"
                    class="error"
                  >
                    Email - обов'язкове поле
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="password-form">Пароль</label>
                <input
                  :class="{
                    error: $v.password.$error && $v.password.$dirty,
                    success: !$v.password.$error && $v.password.$dirty,
                  }"
                  type="password"
                  class="form-control form-control-input"
                  v-model.trim="$v.password.$model"
                  id="password-form"
                  placeholder="Введіть пароль"
                />
                <div class="form-valid-controls">
                  <div
                    v-if="!$v.password.required && $v.password.$dirty"
                    class="error"
                  >
                    Пароль - обов'язкове поле
                  </div>
                  <div
                    v-if="!$v.password.minLength && $v.password.$dirty"
                    class="error"
                  >
                    Пароль не може бути менше 8 символів
                  </div>
                </div>
              </div>

              <div style="margin: 10px 0">
                <input
                  id="link_to_offer"
                  v-model="remenberMe"
                  type="checkbox"
                />
                <label for="link_to_offer" class="checkbox_label"
                  >Запам'ятати мене</label
                >
              </div>
              <div class="text-align">
                <nuxt-link to="/restore" class="link_to_offer"
                  >Відновити акаунт</nuxt-link
                >
              </div>
              <button type="submit" class="register_button_submit">
                Увійти
              </button>
              <div class="link_button_wrap">
                <nuxt-link to="/register">Зареєструватись</nuxt-link>
                <nuxt-link to="/catalog">
                  <svg
                    viewBox="0 0 448 512"
                    class="Register_faArrowLeft__3KOCB"
                  >
                    <path
                      d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                    ></path>
                  </svg>
                  Продовжити покупки
                </nuxt-link>
                <div class="login_social">
                  <a href="https://medtechnika.te.ua/api/v1/login/google">
                    <svg
                      viewBox="0 0 488 512"
                      class="Register_logicon__1OQig Register_gl__3LDv_"
                    >
                      <path
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                  </a>
                  <a href="https://medtechnika.te.ua/api/v1/login/fb">
                    <svg
                      viewBox="0 0 512 512"
                      class="Register_logicon__1OQig Register_fb__1790n"
                    >
                      <path
                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

import API from "@/api/PublicAPI.js";
import HeaderImage from "@/components/Header/HeaderImage";
import Brudcrumbs from "@/components/Brudcrumbs";
import redirectMiddlware from "@/middleware/redirectMiddlware.js";
export default {
  name: "Login",
  mixins: [validationMixin],
  middleware: [redirectMiddlware],
  components: {
    Brudcrumbs,
    HeaderImage,
  },
  data() {
    return {
      email: "",
      password: "",
      remenberMe: false,
      brudcrumns: [
        {
          text: "Головна",
          to: "/",
        },
        {
          text: "Логін",
          to: "/login",
        },
      ],
    };
  },
  methods: {
    async submitFormHandler() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const loginData = {
          email: this.email,
          password: this.password,
        };
        try {
          await this.$store.dispatch("loginAction", loginData);
        } catch (e) {
          this.$toast.open({
            message: "Виникла помилка",
            type: "error",
            duration: 2000,
            position: "top",
          });
        }
      }
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: { required, minLength: minLength(8) },
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/mixins.scss";
.register_wrap {
  .link_button_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    svg {
      fill: #acacac;
      height: 1em;
      vertical-align: -0.125em;
      margin-right: 2px;
    }
    a {
      font-size: 13px;
      margin-bottom: 10px;
      color: #acacac;
      &:hover {
        color: black;
      }
    }
    .login_social {
      svg {
        height: 2rem;
        width: 2rem;
        cursor: pointer;
        fill: black;
        &:hover {
          fill: #2bbd86;
        }
      }
    }
  }
  .checkbox_label {
    font-size: 14px;
  }
  .link_to_offer {
    font-size: 13px;
    margin-bottom: 10px;
    color: #acacac;
    &:hover {
      color: black;
    }
  }
  .register_button_submit {
    @include buttonCreate(#2bbd86, white);
    padding: 9px 15px;
    font-size: 17px;
    border-radius: 5px;
    margin-top: 1rem;
    width: 100%;
  }
  .form-valid-controls {
    margin-top: 0;
  }
  input {
    color: black !important;
  }
  margin: 0 auto;
  margin-top: 3rem;
  .form-group {
    margin-top: 7px;
  }
  .form-control-input {
    border-radius: 5px;
  }
}
</style>