<template>
  <div class="change_profile_data_button">
    <button @click="$emit('clickEvent')">Змінити</button>
  </div>
</template>

<script>
export default {
  name: "ChangeButtonProfile",
};
</script>

<style lang="scss" scoped>
.change_profile_data_button {
  button {
    outline:none;
    background-color: #2bbd86;
    border: none;
    border-radius: 0 0 40px 40px;
    padding: 10px 20px;
    color: #fff;
    position: absolute;
    z-index: 10;
    bottom: 0;
    width: 100%;
    height: 70px;
    left: 0;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1.5px;
    cursor: pointer;
    &:hover{
      background: lighten($color: #2bbd86, $amount: 10%)
    }
  }
}
</style>