import { createApp } from 'vue';
import App from './App.vue';
import SharedModule from "./utils/shared";

// Vue.config.productionTip = false;

let instance = null;
function render(props = {}) {
  const { container, shared = SharedModule.getShared() } = props;
  console.info(111, shared)
  SharedModule.overloadShared(shared);
  instance = createApp(App);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.unmount();
  // instance.$el.innerHTML = '';
  instance = null;
}