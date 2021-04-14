<template>
  <div class="form_data">
    <form>
      <div class="form-group">
        <label for="city-form">Місто</label>
        <div class="input_profile_wrap">
          <div class="icon_wrap">
            <svg role="img" viewBox="0 0 640 512">
              <path
                fill="currentColor"
                d="M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z"
              ></path>
            </svg>
          </div>
          <input
            @focus="activeInputHandler"
            @blur="activeInputHandler"
            type="text"
            class="form-control form-control-input"
            id="city-form"
            v-model.trim="city"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="street-form">Вулиця</label>
        <div class="input_profile_wrap">
          <div class="icon_wrap">
            <svg role="img" viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M367.9 329.76c-4.62 5.3-9.78 10.1-15.9 13.65v22.94c66.52 9.34 112 28.05 112 49.65 0 30.93-93.12 56-208 56S48 446.93 48 416c0-21.6 45.48-40.3 112-49.65v-22.94c-6.12-3.55-11.28-8.35-15.9-13.65C58.87 345.34 0 378.05 0 416c0 53.02 114.62 96 256 96s256-42.98 256-96c0-37.95-58.87-70.66-144.1-86.24zM256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64 28.65 64 64 64zm-64 192v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c17.67 0 32-14.33 32-32v-96c0-26.51-21.49-48-48-48h-11.8c-11.07 5.03-23.26 8-36.2 8s-25.13-2.97-36.2-8H208c-26.51 0-48 21.49-48 48v96c0 17.67 14.33 32 32 32z"
              ></path>
            </svg>
          </div>
          <input
            @focus="activeInputHandler"
            @blur="activeInputHandler"
            type="text"
            class="form-control form-control-input"
            id="street-form"
            v-model.trim="street"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="house-form">Будинок</label>
        <div class="input_profile_wrap">
          <div class="icon_wrap">
            <svg role="img" viewBox="0 0 576 512">
              <path
                fill="currentColor"
                d="M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z"
              ></path>
            </svg>
          </div>
          <input
            @focus="activeInputHandler"
            @blur="activeInputHandler"
            type="text"
            class="form-control form-control-input"
            id="house-form"
            v-model.trim="house"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="room-form">Квартира</label>
        <div class="input_profile_wrap">
          <div class="icon_wrap">
            <svg role="img" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"
              ></path>
            </svg>
          </div>
          <input
            @focus="activeInputHandler"
            @blur="activeInputHandler"
            type="text"
            class="form-control form-control-input"
            id="room-form"
            v-model.trim="room"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="poshta-form">Склад Нової пошти</label>
        <div class="input_profile_wrap">
          <div class="icon_wrap">
            <svg role="img" viewBox="0 0 576 512">
              <path
                fill="currentColor"
                d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"
              ></path>
            </svg>
          </div>
          <input
            @focus="activeInputHandler"
            @blur="activeInputHandler"
            type="text"
            class="form-control form-control-input"
            id="poshta-form"
            v-model.trim="poshta"
          />
        </div>
      </div>
    </form>
    <ChangeDataButton @clickEvent="changeDataProfileHandler" />
  </div>
</template>

<script>
import ChangeDataButton from "@/components/Profile/ChangeDataButton";
import { mapState } from "vuex";
export default {
  name: "AddressForm",
  components: { ChangeDataButton },
  data() {
    return {
      city: "",
      street: "",
      house: "",
      poshta: "",
      room: "",
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.user.user,
    }),
  },
  methods: {
    async changeDataProfileHandler() {
      const resData = {
        city: this.city,
        street: this.street,
        house: this.house,
        poshta: this.poshta,
        room: this.room,
      };
      try {
        // this.$store.dispatch("changeUserData", resData);
      } catch (e) {
        this.$toast.open({
          message: "Виникла помилка",
          type: "error",
          duration: 2000,
          position: "top",
        });
        throw e;
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
    path {
      fill: #2bbd86 !important;
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