<template>
  <div class="about_page">
    <div class="container">
    </div>
    <HeaderImage img="/home/swiper-banners/banner.png" title="Про нас">
      <Brudcrumbs :brudcrumbsData="brudcrumns" />
    </HeaderImage>
    <div class="container d-flex f-center">
      <div class="wrap_about">
        <h2>Медтехніка</h2>
        <img
          src="/home/logo.png"
          alt="Медтехніка"
          title="Медтехніка"
          class="logo"
        />
        <p class="text">
          Наш магазин працює на ринку України вже більше 10 років. Ми
          пропонуюємо Вам широкий і якісний вибір товарів медичного призначення.
          Всі товари, представлені на сайті Ви можете побачити в нашому
          магазині. Доставка всіх товарів здійснюється як по Тернополі (наша
          кур'єрська служба), так і по всій Україні (компанії перевізники). Ми
          займаємося не тільки роздрібною торгівлею але і оптовими поставками.
          Ви можете зв'язатися з нами та ми будемо раді відповісти на Ваші
          запитання.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderImage from "@/components/Header/HeaderImage";
import Brudcrumbs from "@/components/Brudcrumbs";
export default {
  name: "About",
  components: { HeaderImage, Brudcrumbs },
  head() {
    return {
      title: `Магазин медтехніки: інформація та адреса`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Купити будь-яку медтехніку в Тернополі або доставкою по всій Україні. Найбільший асортимент продукції.`,
        },
      ],
    };
  },
  data() {
    return {
      brudcrumns: [
        {
          text: "Головна",
          to: "/",
        },
        {
          text: "Про нас",
          to: "/about",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap_about {
  margin-top: 2rem;
  width: 70%;
  img {
    margin: 0 auto;
    text-align: center;
    display: block;
    margin-bottom: 2rem;
    width: 500px;
  }
  p {
    padding-top: 10px;
    line-height: 30px;
    font-size: 20px;
    font-weight: 300;
    color: #888;
  }
  h2 {
    text-align: center;
    font-size: 38px;
    color: #000;
    margin-bottom: 2rem;
  }
  @media (max-width: 992px) {
    width: 100%;
    img{
      width: 100%;
    }
  }
}
</style>