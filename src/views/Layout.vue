<template>
  <div>
    <!-- <nav>nav</nav> -->
    <app-topnav></app-topnav>
    <app-header></app-header>
    <main><router-view></router-view></main>
    <footer>footer</footer>
  </div>
</template>

<script>
import AppTopnav from "@/components/app-topnav.vue";
import AppHeader from "@/components/app-header.vue";
export default {
  components: {
    AppTopnav,
    AppHeader,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
