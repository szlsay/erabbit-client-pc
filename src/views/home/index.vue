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
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from "./components/home-category";
import HomeBanner from "./components/home-banner.vue";
import HomeNew from "./components/home-new.vue";
export default {
  name: "HomePage",
  components: { HomeCategory, HomeBanner, HomeNew },
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
