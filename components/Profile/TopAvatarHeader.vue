<template>
  <div class="top_avatar_header">
    <div class="wrap">
      <div class="img_wrap" @click="changePhoto">
        <input
          @change="changeFileAvatar"
          type="file"
          ref="inputFile"
          accept="image/*"
          class="d-none"
        />
        <img src="avatar.webp" alt="Змінити аватар" title="Змінити аватар" />
      </div>
      <h4>{{ title }}</h4>
      <button class="logaut_button" @click="logoutHandler">
        <svg viewBox="0 0 512 512" class="Profile_profile__info__icon__2VRjm">
          <path
            d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopAvatarHeader",
  props: {
    title: {
      required: true,
      type: String,
    },
  },
  methods: {
    changeFileAvatar(e) {
      let formData = new FormData();
      formData.append('file', e.target.files[0]);
      this.$store.dispatch('changeUserAvatar', formData)
    },
    changePhoto() {
      const el = this.$refs["inputFile"];
      el.click();
    },
    logoutHandler() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss">
@import "./assets/mixins.scss";
.d-none {
  display: none !important;
}
.top_avatar_header {
  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h4 {
    font-size: 24px;
    padding-bottom: 10px;
  }
  .img_wrap {
    height: 100px;
    width: 100px;
    cursor: pointer;
    img {
      border-radius: 50px;
      width: 100%;
      height: 100%;
    }
  }
  .logaut_button {
    @include buttonCreate(#2bbd86, white);
    display: flex;
    padding: 10px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    svg {
      width: 1.5rem;
      fill: #fff;
      cursor: pointer;
    }
  }
}
</style>