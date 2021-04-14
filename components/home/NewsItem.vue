<template>
  <div class="news_item">
    <nuxt-link :to="`/single-news/${data._id}`" class="link-news" :title="data.name_ua">
      <h2>{{ data.name_ua }}</h2>
      <img
        :src="data.photo ? data.photo : '/home/image-placeholder.webp'"
        :alt="data.name_ua"
        :title="data.name_ua"
      />
      <!-- TODO fiulterText -> filterText -->
      <div class="text">{{ data.short_description_ua }}</div>
      <div class="time">
        {{ getDate }}
      </div>
      <div class="action_block">
        <button class="button">Читати більше</button>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import localMoment from "@/utils/localMoment.js";
export default {
  name: "NewsItem",
  props: {
    // rename data to something else relatively
    data: {
      required: true,
    },
  },
  computed: {
    getDate() {
      let res = this.data.created;
      return localMoment("DD.MM.YYYY", res);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/mixins.scss";
.button {
  @include buttonCreate(#2bbd86, white);
}
.action_block {
  display: flex;
  justify-content: center;
}
.link-news {
  display: flex;
  flex-direction: column;
}
.news_item {
  max-width: 440px;
  margin-bottom: 25px;
  padding: 20px 30px;
  background: #f4f4f4;
  transition: all 0.2s ease-in-out;
  &:hover {
    // transform: translateY(-10px);
    background: darken($color: #f4f4f4, $amount: 2%);
  }
  h2 {
    color: #000;
    text-align: center;
    font-size: 20px;
    font-family: nunito, sans-serif;
  }
  img {
    max-height: 400px;
    display: block;
    width: 100%;
    height: 150px;
    margin-top: 20px;
    object-fit: cover;
  }
  .text,
  .time {
    color: #8a8a8a;
    font-weight: lighter;
    margin-bottom: 15px;
    margin-top: 10px;
    text-align: center;
  }
  .time {
    padding-bottom: 15px;
    color: #8a8a8a;
    font-family: roboto, sans-serif;
    font-weight: 400 !important;
  }
}
</style>