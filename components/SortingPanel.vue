<template>
  <div class="sorting_panel">
    <div class="container">
      <div class="wrap_sorting">
        <div class="left_buttons">
          <button
            @click="handleClick(false)"
            :class="{ active: !size }"
            class="button"
            style="margin-right: 7px"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="th"
              class="svg-inline--fa fa-th fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
              ></path>
            </svg>
          </button>
          <button
            @click="handleClick(true)"
            class="button"
            :class="{ active: size }"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="list"
              class="svg-inline--fa fa-list fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="sorting_drop" v-if="!hiddendropdown">
          <span>Тип сортування</span>

          <div class="dropdown_st" :class="{ show: showDropdown }">
            <div class="label" @click="dropdownToggleHandler">
              <span> {{ activeTextDrop.name }} </span>
            </div>
            <ul class="dropdown_list" v-show="showDropdown">
              <li
                class="dropdown_items"
                v-for="(item, idx) of dropdownData"
                :key="idx"
                @click="selectDropdown(item)"
                :class="{ active: item.active }"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortingPanel",
  props: {
    hiddendropdown: {
      type: Boolean,
      default: false,
    },
    size: {
      required: true,
      default: false,
    },
    dropdownData: {
      type: Array,
    },
  },
  data() {
    return {
      activeTextDrop:
        !this.hiddendropdown && this.dropdownData.find((el) => el.active),
      showDropdown: false,
    };
  },
  methods: {
    selectDropdown(select) {
      if (select.name == this.activeTextDrop.name) {
        this.showDropdown = !this.showDropdown;
        return false;
      } else {
        this.activeTextDrop = select;
        this.showDropdown = !this.showDropdown;
        const newData = [...this.dropdownData];
        newData.forEach((el) => {
          if (el.name === select.name) {
            el.active = true;
          } else {
            el.active = false;
          }
          return el;
        });
        this.$emit("selectDropdown", select, newData);
      }
    },

    dropdownToggleHandler(e) {
      this.showDropdown = !this.showDropdown;
    },
    clickOnOverlay(e) {
      const dropdown = e.target.closest(".dropdown_st");
      if (!dropdown) this.showDropdown = false;
    },
    handleClick(type) {
      if (!type && !this.size) return false;
      if (!type && this.size) this.$emit("isFullSize", false);

      if (type && this.size) return false;
      if (type && !this.size) this.$emit("isFullSize", true);
    },
  },
  mounted() {
    document.body.addEventListener("click", this.clickOnOverlay);
  },
  beforeDestroy() {
    document.body.removeEventListener("click", this.clickOnOverlay);
  },
};
</script>

<style lang="scss">
@import "./assets/mixins.scss";
.dropdown_st {
  .overlay {
    cursor: auto;
    display: none;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &.show {
    .overlay {
      display: block;
    }
  }
  cursor: pointer;
  .dropdown_list {
    position: absolute;
    width: 105%;
    top: 45px;
    margin-left: -2.5%;
    z-index: 4000;
    max-height: 300px;
    overflow: auto;
    background: #fff;
    .dropdown_items {
      padding: 15px;
      background: #f0f0f0;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      transition: 0.2s;
      &.active {
        color: darken($color: #019682, $amount: 10%) !important;
      }
      &:hover {
        color: #019682;
      }
    }
  }
  position: relative;
  .label {
    display: inline-block;
    align-items: center;
    padding: 9px 0;
    border-radius: 10px;
    position: relative;
    border: 1px solid #ccc;
    box-sizing: border-box;
    transition: all 0.2s;
    &:hover {
      border-color: darken($color: #ccc, $amount: 10%);
      span {
        color: #019682;
      }
    }
    span {
      padding: 0 21px;
      cursor: pointer;
      color: #404040;
      font-size: 15px;
      font-family: Nunito;
    }
  }
}
.sorting_panel {
  .dropdown-menu {
    min-width: 100%;
    li {
      a {
        padding: 6px 20px;
        &:hover {
          color: #019682;
        }
      }
    }
  }
  .sorting_drop {
    display: flex;
    align-items: center;
    span {
      margin-right: 15px;
    }
  }
  .my-dropdown-toggle {
    padding: 0px 10px;
    height: 40px;
    flex-grow: 1;
    border-radius: 10px;
    position: relative;
    border: 1px solid #ccc;
    &:hover {
      // border-color: #409eff;
      border-color: darken($color: #ccc, $amount: 10%);
    }
    .dropdown-toggle {
      background-image: none;
      color: #404040;
      font-size: 15px;
      font-family: Nunito;
      .caret {
        display: none;
      }
      &:hover {
        background: transparent;
      }
    }
  }
  .wrap_sorting {
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: space-between;
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  .button {
    margin-top: 0;
    padding: 9px 15px 6px 15px;
    border-radius: 5px !important;
    svg {
      width: 1.5rem !important;
      height: 1.5rem !important;
      margin-right: 0;
    }
    &.active {
      background: rgba(43, 189, 134, 0.66);
    }
  }
  @media (max-width: 768px) {
    .wrap_sorting {
      flex-direction: column;
      .left_buttons {
        display: none;
      }
      .sorting_drop {
        span {
          margin-right: 0;
          font-size: 14px;
        }
        display: flex;
        justify-content: 100%;
        justify-content: space-between;
        width: 100%;
        margin-top: 2rem;
        .dropdown_list {
          .dropdown_items {
            font-size: 13px;
          }
        }
        .label {
          span {
            padding: 0px 8px !important;
            margin-right: 0;
            font-size: 13px;
            display: block;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>