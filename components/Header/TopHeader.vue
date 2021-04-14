
<template>
  <div class="top_header">
    <div class="logo">
      <nuxt-link to="/" class="logo_link">
        <img
          class="logo_img"
          src="/home/logo.png"
          alt="Медтехніка"
          title="Медтехніка"
        >
      </nuxt-link>
    </div>
    <div class="adress_container">
      <a class="adress adress_container-item" href="https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%93%D1%83%D0%B3%D0%BE+%D0%9A%D0%BE%D0%BB%D0%BB%D0%BE%D0%BD%D1%82%D0%B0%D1%8F,+2,+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C,+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+46000/@49.5460574,25.5971626,17z/data=!3m1!4b1!4m5!3m4!1s0x473036ae389f3535:0xc367270d0888dda0!8m2!3d49.5460574!4d25.5993513" title="вулиця Гуго Коллонтая 2" target="_blank">
        <svg
          class="arrow-location svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"
          />
        </svg>
        <span>вулиця Гуго Коллонтая 2</span>
      </a>
      <a class="phone adress_container-item" href="tel:+380 (96) 915 61 45" title="+380 (96) 915 61 45">
        <svg
          class="svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
          />
        </svg>
        <span>+380 (96) 915 61 45</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style lang="scss">
.top_header {
  justify-content: space-between;
  display: flex;
  align-items: center;
  .svg-icon {
    width: 1rem;
    fill: #2bbd86;
  }
  .logo {
    .logo_link {
      height: 54px;
      width: 230px;
      display: inline-block;
      .logo_img {
        height: 100%;
        display: block;
        width: 100%;
      }
    }
  }
  .adress_container {
    display: flex;
    align-items: center;
    .adress_container-item {
      margin: 0 10px;
      display: flex;
      align-items: center;
      font-weight: 400;
      :hover{
        color: #2bbd86;
        transition: 0.1s ease-in;
      }
      svg {
        margin-top: 0;
        margin-right: 10px;
      }
    }
  }
}
</style>
