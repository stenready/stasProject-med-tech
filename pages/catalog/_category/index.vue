<template>
  <div class="catalog">
    <div class="container">
      <section class="filtered"></section>
    </div>

    <HeaderImage img="/home/swiper-banners/banner.png" title="Товари">
      <Brudcrumbs :brudcrumbsData="brudcrumns" />
    </HeaderImage>
    <FiltersSection :filterData="resCategory" />

    <SortingPanel
      v-if="products.length > 0"
      ref="sorting-panel"
      @selectDropdown="selectDropdown"
      :size="fullSizeItems"
      :dropdownData="dropdown"
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

      <p v-if="products.length === 0" style="text-align: center">
        На жаль товарів в цій категорії поки немає
      </p>

      <Paginate
        v-show="paginationData.totalPages > 1"
        v-model="page"
        :page-count="paginationData.totalPages"
        :prev-text="''"
        :click-handler="paginationHandler"
        :next-text="''"
        :page-range="6"
        :container-class="'pagination-wrap'"
        :page-class="'pagination-item'"
      >
        >
      </Paginate>
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
import SortingPanel from "@/components/SortingPanel";
export default {
  name: "Catalog",
  head() {
    return {
      // title: `Каталог магазину медтехніки|ціни, наявність`,
      title: this.categoryData[0].meta.title_ua,
      meta: [
        {
          hid: "description",
          name: "description",
          // content: `Великій вибір професійної та домашньої медтехніки в Україні. Краща якість, та ціна. Замовляйте з доставкою.`,
          content: this.categoryData[0].meta.description_ua,
        },
      ],
    };
  },
  async asyncData({ route, store, params, query, redirect, error }) {
    const category = await API.getCategoryNewApi(
      params.category,
      1,
      "recommended"
    );
    let resCargory = category.categories.filter(
      (el) => el.slug === params.category
    );

    const brudcrumns = [
      {
        text: "Головна",
        to: "/",
      },
      {
        text: "Каталог",
        to: "/catalog",
      },
      {
        text: resCargory[0].name_ua,
        to: `${route.path}/${resCargory[0].slug}`,
      },
    ];

    return {
      resCategory: resCargory[0].children,
      products: category.pageOfItems,
      paginationData: category.pager,
      categoryData: resCargory,
      brudcrumns,
    };
  },
  components: {
    Paginate,
    HeaderImage,
    FiltersSection,
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
      fullSizeItems: false,
      dropdown: [
        {
          name: "Рекомендовані",
          tag: "recommended",
          active: true,
        },
        {
          name: "За ціною, від меншої до більшої",
          tag: "asc",
        },
        {
          name: "За ціною, від більшої до меншої",
          tag: "desc",
        },
      ],
    };
  },
  methods: {
    addParamsToLocation(params) {
      history.pushState(
        {},
        null,
        this.$route.path +
          "?" +
          Object.keys(params)
            .map((key) => {
              return (
                encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
              );
            })
            .join("&")
      );
    },
    async paginationHandler(page) {
      this.addParamsToLocation({ page: page });
      this.$store.commit("SET_CATALOG_PAGE", page);
      const products = await API.getCategoryNewApi(
        this.$route.params.category,
        page,
        this.select
      );
      this.products = products.pageOfItems;
      const panel = this.$refs["sorting-panel"].$el;
      const y = panel.getBoundingClientRect().top + window.pageYOffset + -10;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
    widthItemsHandler(value) {
      this.fullSizeItems = value;
    },
    selectDropdown(select, newData) {
      this.dropdown = newData;
      this.select = select.tag;
    },
  },
  watch: {
    async $route(r) {
      if (+r.query.page == 1) {
        this.$store.commit("SET_CATALOG_PAGE", 1);
        const products = await API.getCategoryNewApi(
          this.$route.params.category,
          1,
          this.select
        );
        this.products = products.pageOfItems;
        this.page = 1;
      }
    },
    async select(filter) {
      this.addParamsToLocation({ query: 1 });
      this.page = 1;
      const products = await API.getCategoryNewApi(
        this.$route.params.category,
        1,
        filter
      );
      this.products = products.pageOfItems;
    },
  },
};
</script>

<style lang="scss">
.product_item {
  @media (max-width: 768) {
    widows: 100%;
  }
}
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
  @media (max-width: 992px) {
    .pagination-item {
      margin: 0px 5px;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
  }
}
</style>