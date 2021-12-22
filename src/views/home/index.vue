<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <home-banner></home-banner>
        <!-- 新鲜好物 -->
        <HomeNew />
        <!-- 人气推荐 -->
        <HomeHot />
        <!-- 热门品牌 -->
        <HomeBrand />
        <!-- 商品区域 -->
        <HomeProduct />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from "./components/home-category";
import HomeBanner from "./components/home-banner";
import HomeNew from "./components/home-new";
import HomeHot from "./components/home-hot";
import HomeBrand from "./components/home-brand";
import HomeProduct from "./components/home-product";
export default {
  name: "HomePage",
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
// @import "../../assets/styles/mixins.less";

.box {
  width: 100px;
  height: 100px;
  color: @xtxColor;
  .hoverShadow ();
}
</style>
