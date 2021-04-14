<template>
  <div class="single_news">
    <div class="container">
    </div>
    <HeaderImage img="/home/swiper-banners/banner.png" title="Новини">
      <Brudcrumbs :brudcrumbsData="brudcrumns" />
    </HeaderImage>
    <div class="container">
      <section class="news">
        <div class="container">
          <div class="row news-wrap" style="margin-top: 30px">
            <div class="single_news_wrap">
              <h2>{{ oneNews.title }}</h2>
              <img
                :src="oneNews.url || '/home/image-placeholder.webp'"
                :alt="oneNews.title"
                :title="oneNews.title"
              />
              <div class="desc">
                {{ oneNews.desc }}
              </div>
              <div class="date">
                {{ getLocalDate }}
              </div>
            </div>
          </div>
          <span
            style="display: block"
            class="select_category"
            title="Популярні новини"
          >
            Популярні новини
          </span>
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
import SortingPanel from "@/components/SortingPanel";
import localMoment from "@/utils/localMoment.js";
import API from "@/api/PublicAPI.js";
import HeaderImage from "@/components/Header/HeaderImage";
import Brudcrumbs from "@/components/Brudcrumbs";
import NewsItem from "@/components/home/NewsItem";
export default {
  name: "News",
  async asyncData({
    route,
    error,
  }) {
    let oneNews, news;
    try {
      oneNews = await API.getOneNews(route.params.id);
      news = await API.getNews();
    } catch (e) {
      error("ошибка");
    }
    return { oneNews, news };
  },
  components: {
    SortingPanel,
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
  computed: {
    getLocalDate() {
      return localMoment(
        "DD.MM.YYYY",
        this.oneNews.updatedAt || this.oneNews.createdAt
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.single_news {
  .news-wrap {
    justify-content: center;
  }
  .single_news_wrap {
    h2 {
      text-align: center;
      max-width: 800px;
      font-size: 38px;
      color: #000;
      @media (max-width: 992px){
        font-size: 25px;
      }
    }
    .desc {
      line-height: 30px;
      font-size: 20px;
      font-weight: 300;
      color: #888;
    }
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      padding: 20px 0;
      width: 500px;
      max-width: 700px;
      max-height: 400px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      @media (max-width: 992px) {
        width: auto;
      }
    }
  }
}
</style>