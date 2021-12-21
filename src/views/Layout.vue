<template>
  <div>
    <!-- <nav>nav</nav> -->
    <app-topnav></app-topnav>
    <app-header></app-header>
    <app-header-sticky></app-header-sticky>
    <main><router-view></router-view></main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppTopnav from "@/components/app-topnav.vue";
import AppHeader from "@/components/app-header.vue";
import AppFooter from "@/components/app-footer.vue";
import AppHeaderSticky from "@/components/app-header-sticky.vue";
import { useStore } from "vuex";
export default {
  components: {
    AppTopnav,
    AppHeader,
    AppFooter,
    AppHeaderSticky,
  },
  setup() {
    const store = useStore();
    store.dispatch("category/getList");
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
