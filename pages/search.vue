<template>
  <div class="catalog">
    <div class="container">
      <section class="filtered"></section>
    </div>

    <HeaderImage img="/home/swiper-banners/banner.png" title="Товари">
      <Brudcrumbs :brudcrumbsData="brudcrumns" />
    </HeaderImage>

    <SortingPanel
      ref="sorting-panel"
      @selectDropdown="selectDropdown"
      :size="fullSizeItems"
      :dropdownData="dropdown"
      :hiddendropdown="true"
      @isFullSize="widthItemsHandler"
    />

    <div class="container">
      <div class="product_items" :class="{ full: fullSizeItems }">
        <div class="product_item" v-for="(element, idx) of products" :key="idx">
          <ProductPreview
            :fullSizeItems="fullSizeItems"
            :elementData="element"
          />
        </div>
      </div>

      <Paginate
        v-if="false"
        v-model="page"
        :page-count="Math.ceil(products.length / 24)"
        :prev-text="''"
        :click-handler="paginationHandler"
        :next-text="''"
        :page-range="6"
        :container-class="'pagination-wrap'"
        :page-class="'pagination-item'"
      >
        >
      </Paginate>
      <ToTopButton />
    </div>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate/src/components/Paginate.vue";
import { mapState } from "vuex";

import API from "@/api/PublicAPI.js";
import HeaderImage from "@/components/Header/HeaderImage";
import FiltersSection from "@/components/FiltersSection";
import Brudcrumbs from "@/components/Brudcrumbs";
import ToTopButton from "@/components/App/ToTopButton";
import SortingPanel from "@/components/SortingPanel";
export default {
  name: "Search",
  async asyncData({ route, query }) {
    let products;
    try {
      products = await API.searchNewApi(encodeURI(query.query));
    } catch (e) {
      products = []
    }
    return {products}
  },
  components: {
    Paginate,
    HeaderImage,
    FiltersSection,
    ToTopButton,
    Brudcrumbs,
    SortingPanel,
  },
  computed: {
    ...mapState({
      pageCatalogPagination: (state) => state.catalogPage,
    }),
  },
  data() {
    return {
      page: +this.$route.query.page || 1,
      select: "recommended",
      brudcrumns: [
        {
          text: "Головна",
          to: "/",
        },
        {
          text: "Пошук",
          to: "/search",
        },
      ],
      fullSizeItems: false,
      dropdown: [
        {
          name: "Рекомендовані",
          tag: "recommended",
          active: true,
        },
        {
          name: "За ціною, від меншої до більшої",
          tag: "priceMinus",
        },
        {
          name: "За ціною, від більшої до меншої",
          tag: "price",
        },
      ],
    };
  },
  methods: {
    widthItemsHandler(value) {
      this.fullSizeItems = value;
    },
    selectDropdown(select, newData) {
      this.dropdown = newData;
      this.select = select.tag;
    },
  },
  watch: {
    async "$route.query.query"(value) {
      this.$store.commit("SET_CATALOG_PAGE", 1);
      const products = await API.searchNewApi(encodeURI(value));
      this.products = products;
      // this.page = 1;
    },
    async $route(r) {
      if (+r.query.page == 1) {
        this.$store.commit("SET_CATALOG_PAGE", 1);
        const products = await API.searchPanel(
          encodeURI(this.$route.query.query),
          1,
          this.select
        );
        this.products = products;
        this.page = 1;
      }
    },
    async select(filter) {
      this.$router.push({
        path: "/search",
        query: { page: 1, query: this.$route.query.query },
      });
      this.page = 1;
      const products = await API.searchPanel(
        encodeURI(this.$route.query.query),
        1,
        this.filter
      );
      this.products = products;
    },
  },
};
</script>

<style lang="scss">
.pagination-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  .pagination-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 8px;
    &.active {
      border: 1px solid #2bbd86;
      border-radius: 5px;
      a {
        &:hover {
          color: black;
        }
      }
    }
    a {
      outline: none;
      justify-content: center;
      width: 30px;
      display: flex;
      align-items: 39px;
      height: 30px;
      align-items: center;
      &:hover {
        color: #2bbd86;
      }
    }
  }
}
</style>