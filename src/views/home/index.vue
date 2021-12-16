<template>
  <div class="box">Home</div>
</template>

<script>
export default {
  name: "HomePage",
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
