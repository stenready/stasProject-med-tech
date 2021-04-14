<template>
  <section class="section_img_top">
    <img :src="img" :alt="title" :title="title" />
    <div class="content">
      <span class="title">
        <h1>{{ title }}</h1>
        <slot></slot>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderImage",
  props: {
    img: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.section_img_top {
  position: relative;
  height: 210px;
  width: 100%;
  h1 {
    font-weight: 300;
    padding: 0 0 10px;
    font-family: nunito, sans-serif;
    text-align: center;
    font-size: 32px;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content {
    position: absolute;
    display: flex;
    width: 90%;
    justify-content: center;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 992px) {
      width: 90%;
      ol {
        justify-content: center;
      }
      h1 {
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
}
</style>