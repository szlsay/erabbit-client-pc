<template>
  <div>
    <!-- <nav>nav</nav> -->
    <app-topnav></app-topnav>
    <app-header></app-header>
    <main><router-view></router-view></main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppTopnav from "@/components/app-topnav.vue";
import AppHeader from "@/components/app-header.vue";
import AppFooter from "@/components/app-footer.vue";
export default {
  components: {
    AppTopnav,
    AppHeader,
    AppFooter,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
