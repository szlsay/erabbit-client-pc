<template>
  <div>
    App
    {{ this.$store.state.name }}
    {{ $store.state.name }}

    {{ $store.getters.newName }}
    {{ $store.getters["newName"] }}
    <button @click="updateName">button</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    console.log(store.state.name);
    console.log(store.getters.newName);
    const updateName = () => {
      // store.commit("updateName");
      store.dispatch("updateName");
    };
    return { updateName };
  },
};
</script>

<style lang="scss" scoped>
</style>
