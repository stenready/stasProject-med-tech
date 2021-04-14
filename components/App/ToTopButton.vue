<template>
  <div class="top_button" v-if="isShow">
    <button class="button" @click="toTop">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "ToTopButton",
  // unused watch method
  watch: {},
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollHandler() {
      this.isShow = window.scrollY > 200 ? true : false
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandler);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollHandler);
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/mixins.scss";
.top_button {
  position: fixed;
  bottom: 50px;
  right: 10px;
  .button {
    padding: 8px 15px;
    font-size: 17px;
    @include buttonCreate(#2bbd86, white);
    border-radius: 5px;
    svg{
      width: 1rem;
      fill: white;
    }
  }
}
</style>