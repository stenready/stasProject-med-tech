<template>
  <ol
    class="breadcrumb breadcrumbs"
    itemscope
    itemtype="https://schema.org/BreadcrumbList"
  >
    <li
      itemprop="itemListElement"
      class="breadcrumb-item"
      itemscope
      itemtype="https://schema.org/ListItem"
      v-for="(item, idx) of brudcrumbsData"
      :key="idx"
    >
      <nuxt-link
        tag="a"
        itemprop="item"
        :to="`${brudcrumbsData.length - 1 === idx ? '' : item.to}`"
        :title="item.text"
      >
        <span itemprop="name">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            v-show="idx === 0"
          >
            <path
              d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
            />
          </svg>
          {{ `${idx === 0 ? "" : "/"} ${item.text}` }}
        </span>
      </nuxt-link>
      <meta itemprop="position" :content="++idx" />
    </li>
  </ol>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    // change data to something else relatively
    brudcrumbsData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.breadcrumbs {
  list-style-type: none;
  padding-left: 0;
  margin-top: 10px;
  flex-wrap: wrap;
  display: flex;
  // width: 900px;
  .breadcrumb-item {
    margin-bottom: 5px;
    &:hover {
      a {
        color: darken($color: #019682, $amount: 8%);
        svg {
          fill: darken($color: #019682, $amount: 8%);
        }
      }
    }
    svg {
      color: #acacac;
      margin-right: 8px;
      width: 1rem;
      fill: #acacac;
      vertical-align: -0.1em;
    }
    margin-right: 6px;
    a {
      color: #acacac;
      span {
      }
    }
  }
  .breadcrumb-item:last-child {
    a {
      text-decoration: none !important;
      cursor: auto;
      color: #019682;
    }
  }
  @media (max-width: 992px) {
    justify-content: center;
    flex-wrap: wrap;
    .breadcrumb-item {
      margin-bottom: 5px;
      svg {
        display: none;
      }
    }
  }
}
</style>
