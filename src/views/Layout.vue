<template>
  <div>
    <!-- <nav>nav</nav> -->
    <app-topnav></app-topnav>
    <header>header</header>
    <main><router-view></router-view></main>
    <footer>footer</footer>
  </div>
</template>

<script>
import AppTopnav from "@/components/app-topnav.vue";
export default {
  components: {
    AppTopnav,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
