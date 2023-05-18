import shared from "@/shared";

const microApps = [
  {
    name: "sub-vue",
    entry: "//localhost:7001/", // 默认会加载这个html，解析里面的js，动态执行，但是子应用必须支持跨域（内部使用的fetch读取js文件等）
    activeRule: "/vuePage", // 当配置为字符串时会直接跟 url 中的路径部分做前缀匹配，匹配成功表明当前应用会被激活
    container: "#vueContainer", // 子应用挂载的节点
    props: {
      routerBase: "/vuePage", // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
      shared // * 将shared实例下发给子应用
    }
  },
  {
    name: "sub-react",
    entry: "//localhost:7070/",
    activeRule: "/reactPage",
    container: "#reactContainer",
    props: {
      routerBase: '/reactPage',
      shared
    }
  }
];

export default microApps;