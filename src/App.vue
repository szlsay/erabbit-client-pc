<template>
  <div>
    App {{ $store.state.user.profile.account }}
    <button @click="$store.commit('user/setUser', { account: 'st' })">
      button
    </button>
  </div>
</template>

<script>
export default {
  name: "App",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
