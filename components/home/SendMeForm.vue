<template>
  <div class="send_me_form">
    <form action="" @submit.prevent="submitFormHandler">
      <div class="form-group">
        <label for="email-form">Електронна пошта</label>
        <!-- TODO GLOBALLY in this file success -> success -->
        <input
          :class="{
            error: $v.email.$error && $v.email.$dirty,
            success: !$v.email.$error && $v.email.$dirty,
          }"
          type="text"
          class="form-control"
          v-model.trim="$v.email.$model"
          id="email-form"
          placeholder="joe.doe.example@gmail.com"
        />
        <div class="form-valid-controls">
          <div v-if="!$v.email.email && $v.email.$dirty" class="error">
            Введіть коректний email
          </div>
          <div v-if="!$v.email.required && $v.email.$dirty" class="error">
            Email - обов'язкове поле
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
          v-model="$v.phone.$model"
          v-mask="mask"
          class="form-control"
          id="phone-form"
          placeholder="098-76-18-744"
        />
        <div class="form-valid-controls">
          <div v-if="!$v.phone.minLength && $v.phone.$dirty" class="error">
            Введіть коректний номер телефону
          </div>
          <div v-if="!$v.phone.required && $v.phone.$dirty" class="error">
            Номер телефону - обов'язкове поле
          </div>
        </div>
      </div>
      
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
            <div v-if="!$v.name.required && $v.phone.$dirty" class="error">
              Ім'я - обов'язкове поле
            </div>
            <div v-if="!$v.name.minLength && $v.name.$dirty" class="error">
              Ім'я не може бути менше 4 символів
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="msg-form">Повідомлення</label>
        <textarea
          :class="{
            error: $v.message.$error && $v.message.$dirty,
            success: !$v.message.$error && $v.message.$dirty,
          }"
          class="form-control"
          v-model.trim="$v.message.$model"
          id="msg-form"
          cols="10"
          rows="2"
          placeholder="Все сподобалось, дякую!"
        ></textarea>
        <div class="form-valid-controls">
          <div v-if="!$v.message.required && $v.message.$dirty" class="error">
            Повідомлення - обов'язкове поле
          </div>
          <div
            v-else-if="!$v.message.minLength && $v.message.$dirty"
            class="error"
          >
            Повідомлення не може бути менше 10 символів
          </div>
        </div>
      </div>
      <button class="button" style="margin-top: 20px">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="mail-bulk"
          class="svg-inline--fa fa-mail-bulk fa-w-18"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"
          ></path>
        </svg>
        Надіслати повідомлення
      </button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import localMoment from "@/utils/localMoment.js";
// TODO change require to import
const { required, email, minLength } = require("vuelidate/lib/validators");
export default {
  // STRUCTURE
  // name, mixins, data, methods, validations
  name: "SendMeForm",
  mixins: [validationMixin],
  data() {
    return {
      phone: "",
      mask: "###-##-##-###",
      email: "",
      name: "",
      message: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    phone: {
      required,
      minLength: minLength(13),
    },
    name: { required, minLength: minLength(4) },
    message: { required, minLength: minLength(10) },
  },
  methods: {
    submitFormHandler() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const resDataForm = {
          name: this.name,
          message: this.message,
          phone: this.phone,
          email: this.email,
          created : new Date(),
        };
        this.$v.$reset();
        this.phone = this.email = this.name = this.message = "";
        // console.log("submit form");
        this.$toast.open({
          message: "Ваше повідомлення надіслано успішно",
          type: "success",
          duration: 3000,
          position: "top",
        });
        this.$store.dispatch("sendContactForm", resDataForm);
      }
    },
  },
};
</script>

<style lang="scss">
@import "./assets/mixins.scss";
.send_me_form {
  .button {
    @include buttonCreate(#2bbd86, white);
    border-radius: 5px;
    // border-top-left-radius: 0;
    // border-bottom-left-radius: 0;
    padding: 9px 15px;
    font-size: 17px !important;
    margin-top: 20px;
    svg {
      fill: #fff;
      vertical-align: -0.125em;
      height: 1rem;
      margin-right: 5px;
    }
    @media (max-width: 768px) {
      padding: 15px 15px;
      width: 100%;
    }
  }
}
.v-toast {
  padding: 0 !important;
  .v-toast__item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    margin: 0 !important;
  }
  .v-toast__text {
    color: #404040;
    font-weight: lighter;
    font-size: 14px;
  }
}
.form-valid-controls {
  margin-top: 5px;
  font-size: 12px;
  color: red;
}
.form-group {
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  label {
    margin-bottom: 6px;
    color: #7b7b7b;
    font-weight: 300;
    &.error {
      color: red;
    }
  }
  input,
  textarea {
    padding: 10px 15px;
    flex-grow: 1;
    outline: none;
    border: 1px solid rgba(126, 133, 128, 0.22);
    &.error {
      border-color: red;
    }
    &.success {
      border-color: green;
    }
    &:focus {
      border-color: #80bdff;
    }
  }
}
</style>