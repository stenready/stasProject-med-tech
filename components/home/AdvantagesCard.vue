<template>
  <!-- TODO class name from adventuges_card to advantages_card -->
  <div class="adventuges_card" :style="`background: ${data.bg}`">
    <div class="left">
      <h2>{{ data.title }}</h2>
      <div class="text">
        {{ data.text }}
      </div>
    </div>
    <img class="img" :src="data.img" :alt="data.title" :title="data.title" />
  </div>
</template>

<script>
export default {
  name: "AdvantagesCard",
  props: {
    data: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.adventuges_card {
  @media (max-width: 768px) {
    padding: 20px 15px;
    align-items: center;
  }
  justify-content: space-between;
  box-shadow: 0 1px 9px -2px rgb(99 99 99 / 41%);
  display: flex;
  width: 48%;
  margin: 1%;
  padding: 40px 30px;
  .img {
    width: 100px;
    height: 100px;
    min-width: 100px;
  }
  .left {
    width: 100%;
  }
  h2 {
    color: #fff;
    font-family: nunito, sans-serif;
    font-weight: 600;
  }
  .text {
    color: #fff;
    margin-top: 10px;
    font-family: roboto, sans-serif;
    margin-right: 10%;
  }
}
</style>