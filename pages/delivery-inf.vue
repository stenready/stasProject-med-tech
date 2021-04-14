<template>
  <div class="delivery_page">
    <div class="container">
    </div>
    <HeaderImage img="/home/swiper-banners/banner.png" title="ДОСТАВКА І ОПЛАТА">
      <Brudcrumbs :brudcrumbsData="brudcrumns" />
    </HeaderImage>
    <div class="container">
      <div class="delivery_wrap">
        <h2>Замовлення товарів:</h2>
        <div class="text">
          Для Вашої зручності інтернет-магазин "Медтехніка" передбачив два
          способи замовлення товарів: на САЙТІ – 24 години на добу, 7 днів на
          тиждень знайдіть виріб, який Вас цікавить, додайте його в кошик своїх
          покупок і пройдіть за посиланням Кошик для оформлення замовлення; за
          ТЕЛЕФОНОМ, 7 днів на тиждень із 8.00 до 20.00 знайдіть виріб, який Вас
          цікавить, і обов'язково зв'яжіться з нами за номерам: + 380(96) 39 55
          491 для оформлення замовлення.
        </div>
        <h2>Оплата замовлення</h2>
        <div class="text">
          Для Вашої зручності інтернет-магазин "Рідні Медтехніка" передбачив
          кілька способів оплати виробу, який Ви вибрали:
        </div>
        <h2>У нашому магазині "Медтехніка"</h2>
        <a
          class="text-adress"
          href="https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%93%D1%83%D0%B3%D0%BE+%D0%9A%D0%BE%D0%BB%D0%BB%D0%BE%D0%BD%D1%82%D0%B0%D1%8F,+2,+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C,+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+46000/@49.5460574,25.5971626,17z/data=!3m1!4b1!4m5!3m4!1s0x473036ae389f3535:0xc367270d0888dda0!8m2!3d49.5460574!4d25.5993513"
          title="вулиця Гуго Коллонтая 2"
          target="_blank"
          >- У Тернополі (вулиця Гуго Коллонтая 2)</a
        >
        <h2>Банківським переказом (за фактом оформлення замовлення)</h2>
        <div class="text">
          Під час оформлення замовлення з будь-якого міста України Ви можете
          оплатити товар, який Ви замовили, через LiqPay або банківським
          переказом. Квитанцію з нашими реквізитами можна роздрукувати після
          оформлення замовлення на сайті.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderImage from "@/components/Header/HeaderImage";
import Brudcrumbs from "@/components/Brudcrumbs";
export default {
  name: "Delivery",
  components: { HeaderImage, Brudcrumbs },
  data() {
    return {
      brudcrumns: [
        {
          text: "Головна",
          to: "/",
        },
        {
          text: "Достака і оплата",
          to: "/delivery",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.delivery_wrap {
  width: 75%;
  margin: 2rem auto;
  h2 {
    font-size: 19px;
    padding: 15px 0;
  }
  .text {
    color: #7b7b7b;
    font-weight: 300;
  }
  .text-adress {
    font-size: 14px;
    &:hover{
      color: #2bbd86;
    }
  }
}
</style>