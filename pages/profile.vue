<template>
  <div class="profile">
    <HeaderImage img="/home/swiper-banners/banner.png" title="Мій профіль">
      <Brudcrumbs :brudcrumbsData="brudcrumns" />
    </HeaderImage>
    <div class="container">
      <div class="profile wrap">
        <Tabs>
          <Tab title="Ваші дані">
            <div class="row">
              <div class="col-md-6 inner-container">
                <TopAvatarHeader title="Персональні дані" />
                <DataForm />
              </div>
            </div>
          </Tab>
          <Tab title="Ваша адреса">
            <div class="row">
              <div class="col-md-6 inner-container">
                <TopAvatarHeader title="Ваша адреса" />
                <AddressForm />
              </div>
            </div>
          </Tab>
          <Tab title="Історія Замовлень">
            <div class="row">
              <div class="col-md-6 inner-container">
                <TopAvatarHeader title="Історія Замовлень" />
                <div class="table_history" v-if="false">
                  <div class="table_headers">
                    <p>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="calendar-alt"
                        class="Profile_icon__3ovCn"
                        role="img"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                        ></path>
                      </svg>
                      Дата
                    </p>
                    <p>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="money-bill-wave"
                        class="Profile_icon__3ovCn"
                        role="img"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z"
                        ></path></svg
                      >Оплата
                    </p>
                    <p>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="truck"
                        class="Profile_icon__3ovCn"
                        role="img"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"
                        ></path></svg
                      >Доставка
                    </p>
                    <p>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="coins"
                        class="Profile_icon__3ovCn"
                        role="img"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"
                        ></path></svg
                      >Сума
                    </p>
                    <p>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ellipsis-v"
                        class="Profile_icon__3ovCn"
                        role="img"
                        viewBox="0 0 192 512"
                      >
                        <path
                          fill="currentColor"
                          d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
                        ></path>
                      </svg>
                    </p>
                  </div>
                  <div class="content_wrap">
                    <div class="sub_wrap">
                      <div class="item_table_content">2020-09-15</div>
                      <div class="item_table_content">Готівкою</div>
                      <div class="item_table_content">Нова Пошта</div>
                      <div class="item_table_content">1353₴</div>
                      <div class="item_table_content">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="angle-down"
                          class="OrderCardProfile_arrow__1NtEV"
                          role="img"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
import TopAvatarHeader from "@/components/Profile/TopAvatarHeader";
import DataForm from "@/components/Profile/DataForm";
import AddressForm from "@/components/Profile/AddressForm";

import API from "@/api/PublicAPI.js";
import HeaderImage from "@/components/Header/HeaderImage";
import Brudcrumbs from "@/components/Brudcrumbs";
import { Tabs, Tab } from "vue-slim-tabs";
export default {
  name: "Profile",
  components: {
    Brudcrumbs,
    HeaderImage,
    Tabs,
    Tab,
    TopAvatarHeader,
    DataForm,
    AddressForm,
  },
  data() {
    return {
      brudcrumns: [
        {
          text: "Головна",
          to: "/",
        },
        {
          text: "Профіль",
          to: "/profile",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.form_data{
  @media (max-width: 992px) {
    margin-top: 1rem !important;
  }
}
.error {
  font-weight: 300;
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 12px;
  color: red;
}
.profile {
  .table_history {
    .content_wrap {
      padding: 20px 10px;
      background: #fff;
      border-radius: 10px;
      .sub_wrap {
        display: flex;
        .item_table_content {
          flex: 1 1;
          align-items: center;
          text-align: center;
          svg {
            width: 15px;
            cursor: pointer;
            &:hover{
              path {
                fill: #2bbd86;
              }
            }
          }
        }
      }
    }
  }
  .table_headers {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 10px;
    border-bottom: 1px solid hsla(0, 0%, 80%, 0.5);
    margin-bottom: 10px;
    p {
      flex: 1 1;
      font-weight: lighter;
      color: #969696;
      display: flex;
      padding-right: 25px;
      padding-bottom: 10px;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 8px;
        width: 20px;
        max-height: 25px;
      }
    }
  }
  .inner-container {
    flex-grow: 1;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 50px 45px 100px;
    border-radius: 40px;
    background-color: #fff8f8;
    margin-top: 2rem;
    box-shadow: 0 14px 28px rgb(0 0 0 / 10%), 0 10px 10px rgb(0 0 0 / 6%);
    @media (max-width: 992px) {
      margin-top: 0;
      padding: 20px 20px 85px;
      .top_avatar_header{
        h4{
          font-size: 18px;
        }
      }
      // padding: 10px 20px;
    }
  }
  .vue-tablist {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 20px;
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
}
</style>