<template>
  <div class="form_data">
    <div class="form-group">
      <label for="name-form">Ім'я</label>
      <div
        class="input_profile_wrap"
        :class="{
          error: $v.name.$error && $v.name.$dirty,
          success: !$v.name.$error && $v.name.$dirty,
        }"
      >
        <div class="icon_wrap">
          <svg
            viewBox="0 0 448 512"
            class="Profile_icon__3ovCn Profile_input__icon__FO_3w"
          >
            <path
              d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
            ></path>
          </svg>
        </div>
        <input
          @focus="activeInputHandler"
          @blur="activeInputHandler"
          type="text"
          class="form-control form-control-input"
          id="name-form"
          v-model.trim="$v.name.$model"
        />
      </div>
      <div class="form-valid-controls">
        <div class="form-valid-controls">
          <div v-if="!$v.name.required && $v.name.$dirty" class="error">
            Ім'я - обов'язкове поле
          </div>
          <div v-if="!$v.name.minLength && $v.name.$dirty" class="error">
            Ім'я не може бути менше 4 символів
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="surname-form">Прізвище</label>
      <div
        class="input_profile_wrap"
        :class="{
          error: $v.surname.$error && $v.surname.$dirty,
          success: !$v.surname.$error && $v.surname.$dirty,
        }"
      >
        <div class="icon_wrap">
          <svg
            viewBox="0 0 448 512"
            class="Profile_icon__3ovCn Profile_input__icon__FO_3w"
          >
            <path
              d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
            ></path>
          </svg>
        </div>
        <input
          spellcheck="false"
          @focus="activeInputHandler"
          @blur="activeInputHandler"
          type="text"
          class="form-control form-control-input"
          id="surname-form"
          v-model.trim="$v.surname.$model"
        />
      </div>
      <div class="form-valid-controls">
        <div class="form-valid-controls">
          <div v-if="!$v.surname.required && $v.surname.$dirty" class="error">
            Прізвище - обов'язкове поле
          </div>
          <div v-if="!$v.surname.minLength && $v.surname.$dirty" class="error">
            Прізвище не може бути менше 4 символів
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="s_surname-form">По-батькові</label>
      <div
        class="input_profile_wrap"
        :class="{
          error: $v.s_surname.$error && $v.s_surname.$dirty,
          success: !$v.s_surname.$error && $v.s_surname.$dirty,
        }"
      >
        <div class="icon_wrap">
          <svg
            viewBox="0 0 576 512"
            class="Profile_icon__3ovCn Profile_input__icon__FO_3w"
          >
            <path
              d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
            ></path>
          </svg>
        </div>
        <input
          spellcheck="false"
          @focus="activeInputHandler"
          @blur="activeInputHandler"
          type="text"
          class="form-control form-control-input"
          id="s_surname-form"
          v-model.trim="$v.s_surname.$model"
        />
      </div>
      <div class="form-valid-controls">
        <div class="form-valid-controls">
          <div
            v-if="!$v.s_surname.required && $v.s_surname.$dirty"
            class="error"
          >
            По-батькові - обов'язкове поле
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="phone-form">Номер телефону</label>
      <div
        class="input_profile_wrap"
        :class="{
          error: $v.phone.$error && $v.phone.$dirty,
          success: !$v.phone.$error && $v.phone.$dirty,
        }"
      >
        <div class="icon_wrap">
          <svg
            viewBox="0 0 512 512"
            class="Profile_icon__3ovCn Profile_input__icon__FO_3w"
          >
            <path
              d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
            ></path>
          </svg>
        </div>
        <input
          spellcheck="false"
          @focus="activeInputHandler"
          @blur="activeInputHandler"
          type="text"
          class="form-control form-control-input"
          id="phone-form"
          v-model.trim="$v.phone.$model"
        />
      </div>
      <div class="form-valid-controls">
        <div class="form-valid-controls">
          <div v-if="!$v.phone.required && $v.phone.$dirty" class="error">
            Номер телефону - обов'язкове поле
          </div>
          <div v-if="!$v.phone.minLength && $v.phone.$dirty" class="error">
            Введіть коректний номер телефону
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="email-form">Електронна пошта</label>
      <div
        class="input_profile_wrap"
        :class="{
          error: $v.email.$error && $v.email.$dirty,
          success: !$v.email.$error && $v.email.$dirty,
        }"
      >
        <div class="icon_wrap">
          <svg viewBox="0 0 512 512" class="phone-svg">
            <path
              fill="currentColor"
              d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
            ></path>
          </svg>
        </div>
        <input
          spellcheck="false"
          @focus="activeInputHandler"
          @blur="activeInputHandler"
          type="text"
          class="form-control form-control-input"
          id="email-form"
          v-model.trim="$v.email.$model"
        />
      </div>
      <div class="form-valid-controls">
        <div class="form-valid-controls">
          <div v-if="!$v.email.required && $v.email.$dirty" class="error">
            Електронна пошта - обов'язкове поле
          </div>
          <div v-if="!$v.email.email && $v.email.$dirty" class="error">
            Введіть коректний email
          </div>
        </div>
      </div>
    </div>
    <ChangeDataButton @clickEvent="changeProfileDataHandler" />
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import ChangeDataButton from "@/components/Profile/ChangeDataButton";
import { mapState } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "DataForm",
  mixins: [validationMixin],
  components: { ChangeDataButton },
  data() {
    return {
      name: "",
      surname: "",
      s_surname: "",
      phone: "",
      email: "",
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.user.user,
    }),
  },
  methods: {
    async changeProfileDataHandler() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const resData = {
          fName: this.name,
          email: this.email,
          fatherName: this.s_surname,
          phone: this.phone,
          lName: this.surname,
        };
        try {
          await this.$store.dispatch("changeUserData", resData);
        } catch (e) {
          this.$toast.open({
            message: "Виникла помилка",
            type: "error",
            duration: 2000,
            position: "top",
          });
          throw e;
        }
      }
    },
    activeInputHandler(e) {
      if (e.type === "focus") {
        e.target.parentElement.classList.add("active");
      }
      if (e.type === "blur") {
        e.target.parentElement.classList.remove("active");
      }
    },
  },
  created() {
    if (this.user) {
      this.name = this.user.fName;
      this.surname = this.user.lName;
      this.s_surname = this.user.fatherName;
      this.phone = this.user.phone;
      this.email = this.user.email;
    }
  },
  validations: {
    email: {
      required,
      email,
    },
    phone: {
      required,
      minLength: minLength(10),
    },
    name: { required, minLength: minLength(4) },
    surname: { required, minLength: minLength(4) },
    s_surname: { required },
  },
};
</script>
<style lang="scss" scoped>
.inner-container {
  .form_data {
    margin-top: 2rem;
  }
  margin: 0 auto;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 50px 45px 100px;
  border-radius: 40px;
  background-color: #fff8f8;
  box-shadow: 0 14px 28px rgb(0 0 0 / 10%), 0 10px 10px rgb(0 0 0 / 6%);
}
.input_profile_wrap {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  input {
    width: 100%;
    padding-left: 15%;
    padding: 1rem 5%;
    transition: 0.2s;
    flex-grow: 1;
    border-radius: 3px;
    border: none;
  }
  &.active {
    border-color: #409eff;
    .phone-svg {
      path {
        fill: #2bbd86;
      }
    }
    svg {
      fill: #2bbd86 !important;
    }
  }
}
.input_profile_wrap.error {
  border-color: red;
}
input {
  color: black !important;
}
.icon_wrap {
  padding: 13px;
  border-right: 1px solid #ccc;
  background-color: #e4e4e4;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  svg {
    fill: #6a6a6a;
    margin-right: 0;
    max-height: none;
    width: 1.5rem;
  }
}
</style>