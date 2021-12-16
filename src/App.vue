<template>
  <div>
    App {{ $store.state.user.profile.account }}
    <button @click="$store.commit('user/setUser', { account: 'st' })">
      button
    </button>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  name: "App",
  setup() {
    request("/home/category/head", "get", "").then((data) => {
      console.log(data);
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
