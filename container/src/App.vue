<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script lang="jsx">
// import {
//   MailOutlined,
//   AppstoreOutlined,
//   SettingOutlined,
//   GitlabOutlined,
// } from "@ant-design/icons-vue";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const routerConfig = [
  {
    key: "home",
    name: "Home",
    path: "/",
    originPath: "/Home",
  },
  {
    key: "vue",
    name: "Vue应用",
    path: "/vuePage",
    originPath: "/vuePage",
  },
  {
    key: "react",
    name: "React应用",
    path: "/reactPage",
    originPath: "/reactPage",
  },
];
export default {
  name: "App",
  components: {
    // MailOutlined,
    // AppstoreOutlined,
    // GitlabOutlined,
    // SettingOutlined,
  },
  setup() {
    const current = ref(["home"]);
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      routerConfig.forEach((config) => {
        if (route.path.includes(config.originPath)) {
          current.value = [config.key];
          console.info(current.value);
        }
      });
    });
    const handleSelected = (e) => {
      router.replace({
        path: routerConfig.find((item) => item.key === e.key).path || "/",
      });
    };
    const renderItem = () =>
      routerConfig.map((item) => (
        <a-menu-item key={item.key}>{item.name}</a-menu-item>
      ));

    // 基座中可以放自己的路由
    return () => (
      <div class="container">
        <a-menu
          v-model={[current.value, "selectedKeys"]}
          router={true}
          mode="horizontal"
          onSelect={handleSelected}
        >
          {renderItem()}
        </a-menu>
        {
          // 容器自己使用
        }
        <router-view></router-view>
        {
          // vue项目使用
        }
        <div id="vueContainer"></div>
        {
          // react 项目使用
        }
        <div id="reactContainer"></div>
      </div>
    );
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
