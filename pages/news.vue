<template>
  <div class="news_page">
    <HeaderImage img="/home/swiper-banners/banner.png" title="Новини">
      <Brudcrumbs :brudcrumbsData="brudcrumns" />
    </HeaderImage>
    <div class="container">
      <section class="news">
        <div class="container">
          <div class="row news-wrap" style="margin-top: 30px">
            <NewsItem
              class="col-md-4"
              v-for="(el, newsIndex) of news"
              :data="el"
              :key="newsIndex"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import API from "@/api/PublicAPI.js";
import HeaderImage from "@/components/Header/HeaderImage";
import Brudcrumbs from "@/components/Brudcrumbs";
import NewsItem from "@/components/home/NewsItem";
export default {
  name: "News",
  head() {
    return {
      title: `Новини інтернет-магазина Медтехніки`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Обзори товарів, поради експертів та багато іншого в нашому блоці новин. Магазин Медтехніки.`,
        },
      ],
    };
  },
  async asyncData({
    error,
  }) {
    let news;
    try {
     const {posts} = await API.getAllBlogPostsNewApi();
     news = posts
    } catch (e) {
      error("ошибка");
    }
    return { news };
  },
  components: {
    HeaderImage,
    Brudcrumbs,
    NewsItem,
  },
  data() {
    return {
      brudcrumns: [
        {
          text: "Головна",
          to: "/",
        },
        {
          text: "Новини",
          to: "/news",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>