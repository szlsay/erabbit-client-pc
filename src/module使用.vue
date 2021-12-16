<template>
  <div>
    App
    {{ $store.state.moduleA.name }}
    {{ $store.state.moduleB.name }}

    <hr />
    {{ $store.getters["moduleA/newName"] }}
    {{ $store.getters.newName }}
    <hr />
    <button @click="changeA">changeA</button>
    <button @click="changeB">changeB</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    const store = useStore();
    const changeA = () => {
      // store.commit("moduleA/updateName");
      store.dispatch("moduleA/updateName");
    };
    const changeB = () => {
      store.commit("updateName");
      // store.dispatch("updateName");
    };
    return { changeA, changeB };
  },
};
</script>

<style lang="scss" scoped>
</style>
