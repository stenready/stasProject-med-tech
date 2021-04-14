<template>
  <div class="favorites_page">
    <HeaderImage img="/home/swiper-banners/banner.png" title="Улюблені">
      <Brudcrumbs :brudcrumbsData="brudcrumns" />
    </HeaderImage>
    <div class="container">
      <SortingPanel
        v-show="favoritesArray.length > 0"
        ref="sorting-panel"
        :size="fullSizeItems"
        :hiddendropdown="true"
        @isFullSize="widthItemsHandler"
      />
      <div
        class="product_items"
        :class="{ full: fullSizeItems }"
        v-show="favoritesArray.length > 0"
      >
        <div
          class="product_item"
          v-for="(element, idx) of favoritesArray"
          :key="idx"
        >
          <ProductPreview
            @removeFavoritesElement="filterData"
            :fullSizeItems="fullSizeItems"
            :elementData="element"
          />
        </div>
      </div>
      <div class="empty_wrap" v-show="favoritesArray.length === 0 && loadingDone">
        <span>
          Улюблені товари ще не обрані
          <nuxt-link to="/catalog">обрати</nuxt-link></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import API from "@/api/PublicAPI.js";
import HeaderImage from "@/components/Header/HeaderImage";
import Brudcrumbs from "@/components/Brudcrumbs";
import {mapState} from 'vuex'
export default {
  name: "FavoritesPage",
  components: {
    HeaderImage,
    Brudcrumbs,
  },
  data() {
    return {
      fullSizeItems: false,
      loadingDone: false,
      brudcrumns: [
        {
          text: "Головна",
          to: "/",
        },
        {
          text: "Улюблені",
          to: "/wishlist",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      favoritesArray: state => state.favorites.favorites,
    })
  },
  methods: {
    filterData(product) {
      this.$store.commit("favorites/REMOVE_TO_FAVORITES", product);
    },
    widthItemsHandler(value) {
      this.fullSizeItems = value;
    },
  },
  mounted() {
    this.loadingDone = true
  },
};
</script>

<style lang="scss" scoped>
.empty_wrap {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  a {
    color: #2bbd86;
    &:hover {
      text-decoration: underline;
    }
  }
}
.product_items {
  justify-content: flex-start;
}
.product_item {
  margin: 5px;
  margin-bottom: 1rem;
}
</style>