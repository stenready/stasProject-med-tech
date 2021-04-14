<template>
  <div class="product_preview" :class="{ full: fullSizeItems }">
    <!-- TODO nuxt-link replace with anchor (a @click.prevent="") -->
    <nuxt-link
      @click.native="clickHandler($event)"
      to=""
      :title="elementData.title"
    >
      <svg
        v-show="!isInFavoriteList"
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="heart"
        class="svg-inline--fa fa-heart fa-w-16 empty-heart heart"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
        ></path>
      </svg>

      <svg
        v-show="isInFavoriteList"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="heart"
        class="svg-inline--fa fa-heart fa-w-16 heart"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
        ></path>
      </svg>

      <div class="image_block">
        <img
          class="preview__image"
          :src="
            (elementData.gallery && elementData.gallery[0]) ||
            '/home/image-placeholder.webp'
          "
          :title="elementData.title"
          :alt="elementData.title"
        />
      </div>
      <div class="bottom_panel">
        <h4>{{ elementData.name_ua }}</h4>
        <div class="price_wrap">
          <div class="price">{{ elementData.price }} ₴</div>
          <div class="desc" v-if="fullSizeItems">
            {{ elementData.description_ua.slice(0, 70) + "..." }}
          </div>
          <button class="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
              />
            </svg>
            Купить
          </button>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "ProductPreview",
  props: {
    elementData: {
      required: true,
      type: Object,
      default: () => {},
    },
    fullSizeItems: {
      type: Boolean,
    },
  },
  data() {
    return {
      // isInFavoriteList: false,
    };
  },
  computed: {
    productLink() {
      let subCategory = "";
      this.elementData.childCategory.forEach((element) => {
        subCategory += `/${element}`;
      });
      let link = `/product/${this.elementData.parentCategory}${subCategory}/${this.elementData.slug}`;
      return link;
    },
    isInFavoriteList() {
      const find = this.$store.state.favorites.favorites.find(
        (el) => el._id === this.elementData._id
      );
      return  find ? true : false;
    },
  },
  methods: {
    clickHandler(e) {
      e.preventDefault();
      const el = e.target.closest(".heart");
      // console.log(this.elementData, "ss");
      if (el) {
        if (!this.isInFavoriteList) {
          this.$store.commit("favorites/ADD_TO_FAVORITES", this.elementData);
        } else {
          this.$store.commit("favorites/REMOVE_TO_FAVORITES", this.elementData);
          this.$emit("removeFavoritesElement", this.elementData);
        }
      } else {
        this.$router.push(`${this.productLink}`);
      }
    },
  },
};
</script>

<style lang="scss">
@import "./assets/mixins.scss";
.button {
  @include buttonCreate(#2bbd86, white);
  padding: 11px 19px;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 0;
  svg {
    fill: #fff;
    width: 1rem;
  }
}
.product_preview {
  .image_block {
    height: 300px;
  }
  &.full {
    box-shadow: none;
    height: 200px;
    img {
      width: 200px;
      // padding-bottom: 2px;
      height: 198px;
      min-height: 198px;
      max-height: 200px;
    }
    a {
      display: flex;
      border: 1px solid #e4e4e4;
      height: 200px;
      svg {
        left: 225px;
        top: 130px;
      }
      .bottom_panel {
        background-color: transparent;
        width: 100%;
        .price_wrap {
          flex-direction: column;
          align-items: baseline;
          margin-top: 0;
          .desc {
            margin-top: 20px;
            font-weight: 300;
            color: #9b9b9b;
          }
          .button {
            margin-left: auto;
            margin-top: 5px;
          }
        }
        h4 {
          margin-bottom: 0;
          text-align: left;
        }
      }
      &:hover {
        border: 1px solid darken($color: #e4e4e4, $amount: 15%);
        transition: all 0.2s;
      }
    }
    &:hover {
      transform: none;
    }
  }
  position: relative;
  .heart {
    width: 1.7rem;
    z-index: 1000;
    position: absolute;
    right: 20px;
    top: 15px;
    path {
      fill: #2bbd86;
    }
    &:hover {
      path {
        fill: rgb(1, 150, 130);
      }
    }
  }
  transition: all 0.16s ease-in;
  &:hover {
    transform: translateY(-7px);
  }
  box-shadow: 0 1px 9px -2px rgb(99 99 99 / 18%);
  .price_wrap {
    margin-top: 25px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    .price {
      color: #2bbd86;
      font-family: roboto, sans-serif;
      font-size: 25px;
      text-align: center;
      font-weight: 700;
    }
  }
  .bottom_panel {
    padding: 1px 27px 20px;
    background: #eee;
    h4 {
      font-family: nunito, sans-serif;
      text-align: center;
      text-transform: capitalize;
      font-weight: 500;
      margin: 15px 0;
      font-size: 1.3rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      cursor: pointer;
    }
  }
  .preview__image {
    max-height: 300px;
    width: 100%;
    margin-bottom: -4px;
    height: 100%;
    cursor: pointer;
    height: 300px;
    object-fit: cover;
  }
}
</style>