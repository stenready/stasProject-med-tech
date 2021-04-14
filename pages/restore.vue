<template>
  <div class="profile">
    <HeaderImage img="/home/swiper-banners/banner.png" title="Відновлення паролю">
      <Brudcrumbs :brudcrumbsData="brudcrumns" />
    </HeaderImage>
  </div>
</template>

<script>
import API from "@/api/PublicAPI.js";
import HeaderImage from "@/components/Header/HeaderImage";
import Brudcrumbs from "@/components/Brudcrumbs";
import redirectMiddlware from "@/middleware/redirectMiddlware.js";
export default {
  name: "Restore",
  middleware: [redirectMiddlware],
  components: {
    Brudcrumbs, HeaderImage
  },
  data() {
    return {
      brudcrumns: [
        {
          text: "Головна",
          to: "/",
        },
        {
          text: "Відновлення паролю",
          to: "/restore",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>