<template>
  <div class="dropdown dropdown-container_st" :class="{ show: showDropdown }">
    <button
      :class="defaultClass"
      v-if="!inputType"
      class="btn btn-secondary dropdown-toggle"
      type="button"
      @click="showOrHideDropdown"
    >
      {{ propdownData[activeIndexLocal].title }}
    </button>
    <input
      @focus="showDropdown = true"
      style="cursor: auto;"
      spellcheck="false"
      :placeholder="placeholder"
      ref="inputValue"
      v-model="findString"
      @click="showOrHideDropdown"
      class="btn btn-secondary dropdown-toggle input-type"
      :class="defaultClass"
      type="text"
      v-else
    />
    <div
      class="dropdown-menu"
      :class="{ show: showDropdown }"
    >
      <div
        v-for="(el, idx) of propdownData"
        :key="idx"
        class="dropdown-item"
        :class="!inputType && activeIndexLocal === idx ? 'active' : ''"
        @click="selectElement(idx)"
      >
        {{ !inputType ? el.title : el.Description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    defaultClass: {
      type: String,
    },
    propdownData: {
      required: true,
    },
    inputType: {
      type: Boolean,
      default: false,
    },
    // activIndex -> activeIndex
    activIndex: {
      required: false,
      type: Number,
      default: () => 0,
    },
    placeholder: {
      type: String,
    }
  },
  // properties and methods structure
  data() {
    return {
      findString: "",
      showDropdown: false,
      activeIndexLocal: this.activIndex,
    };
  },
  watch: {
    findString(value) {
      if (this.inputType) {
        this.$emit("findString", value);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      document.body.addEventListener("click", this.clickOnOverlay);
    }, 0);
  },
  beforeDestroy() {
    document.body.removeEventListener("click", this.clickOnOverlay);
  },
  methods: {
    showOrHideDropdown(e) {
      if (e.target.classList.contains('input-type')) return false;
      document.querySelectorAll(".dropdown").forEach((el) => {
        el.classList.remove("show");
      });
      document.querySelectorAll(".dropdown-menu").forEach((el) => {
        el.classList.remove("show");
      });
      this.showDropdown = !this.showDropdown;
    },
    // overlayClick
    clickOnOverlay(e) {
      const dropdown = e.target.closest(".dropdown");

      if (!dropdown && this.showDropdown) {
        this.showDropdown = false;
      }
    },
    selectElement(idx) {
      this.showDropdown = false;
      if (idx === this.activeIndexLocal && !this.inputType) return false;
      this.activeIndexLocal = idx;
      if (this.inputType) {
        this.findString = this.propdownData[idx].Description || this.propdownData[idx].CityDescription;
      }
      this.$emit("changeSelectDropdown", idx);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-container_st {
  .dropdown-toggle{
    &.success{
      border: 1px solid green;
    }
  }
  .dropdown-item.active {
    color: green;
  }
  &.show {
    .dropdown-menu {
      display: block;
    }
  }
  position: relative;
  .dropdown-toggle {
    &:hover {
      color: #019682;
    }
    cursor: pointer;
    color: #404040;
    font-size: 15px;
    font-family: Nunito;
    text-align: left;
    outline: navajowhite;
    background: transparent;
    height: 40px;
    position: relative;
    border-radius: 10px;
    position: relative;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 10px 15px;
    width: 100%;
  }
  .dropdown-menu {
    display: none;
    position: absolute;
    width: 105%;
    top: 45px;
    margin-left: -2.5%;
    z-index: 4000;
    max-height: 300px;
    overflow: auto;
    background: #fff;
  }
  .dropdown-item {
    padding: 15px;
    background: #f0f0f0;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    transition: 0.2s;
    font-weight: 300;
    &:hover {
      color: #019682;
    }
  }
}
</style>
