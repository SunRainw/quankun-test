<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <div>token:{{ token }}</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { onMounted, ref } from "vue";
import SharedModule from "./utils/shared";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const token = ref("");
    onMounted(() => {
      const shared = SharedModule.getShared();
      token.value = shared.getToken();
      console.info(token.value);
    });
    return { token };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
