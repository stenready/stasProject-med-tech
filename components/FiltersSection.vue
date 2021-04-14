<template>
  <section class="filters" v-if="filterData.length > 0">
    <div class="container">
      <div class="row">
        <div class="left col-md-4">
          <h3 class="filters_title">Фільтр</h3>
          <ul class="filters_list">
            <li class="filter_item" v-for="filter of filterData" :key="filter._id">
              <nuxt-link :to="`${$route.path}/${filter.slug}`" :title="filter.title">
                {{ filter.name_ua }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="right col-md-8">
          <nuxt-link
            :to="`${$route.path}/${filter.slug}`"
            class="right_item"
            v-for="(filter, idx) of filterData"
            :key="filter._id + idx"
            :title="filter.name_ua"
          >
            <img
              :src="filter.photo"
              :title="filter.name_ua"
              :alt="filter.name_ua"
            />
            <h3>{{ filter.name_ua }}</h3>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FilterSection",
  props: {
    filterData: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  margin-top: 1.5rem;
  .right {
    display: flex;
    flex-wrap: wrap;
    .right_item {
      width: 20%;
      padding: 20px 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:hover {
        h3 {
          color: #2bbd86;
        }
      }
      h3 {
        margin-top: 20px;
        font-family: raleway, sans-serif;
        font-weight: lighter;
        text-align: center;
        font-size: 14px;
      }
      img {
        width: 70px;
        height: 70px;
        word-break: break-all;
        max-width: 90px;
        object-fit: cover;
      }
      @media (max-width: 768px) {
        width: 32%;
      }
    }
  }
  .filter_item {
    padding: 20px 15px 0;
    cursor: pointer;
    box-sizing: border-box;
    font-size: 15px;
    transition: 0.2s;
    font-weight: lighter;
    &:hover {
      a {
        color: #2bbd86;
      }
    }
  }
  @media (max-width: 768px) {
    .filters_list{
      display: none !important;
      .right_item{
        width: 32% !important;
      }
    }
  }
}
.filters_title {
  letter-spacing: 2px;
  color: #ededed;
  padding: 10px 20px;
  border-radius: 5px;
  background: #2bbd86;
  box-shadow: -2px 2px 5px 2px rgb(2 171 106 / 25%);
}
</style>