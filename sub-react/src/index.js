import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const render = props => {
  const { container } = props;
  const dom = container ? container.querySelector("#root") : document.getElementById("root")
  const root = ReactDOM.createRoot(dom);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    // container ? container.querySelector("#root") : document.getElementById("root")
  );
  
  reportWebVitals();
};
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('react app bootstraped');
}

// * 系统挂载
export async function mount(props) {
  // ! mount 生命周期中可以拿到父项目传递过来的数据, props.data.router用于跳转到主项目/其他子项目的路由, props.data.store是父项目实例化的Vuex(如果有)
  console.log('props from main framework', props);
  render(props);
}
// * 系统卸载
export async function unmount(props) {
  const { container } = props;
  const dom = container ? container.querySelector("#root") : document.getElementById("root")
  const root = ReactDOM.createRoot(dom);
  root.unmount(container ? container.querySelector('#root') : document.querySelector('#root'));
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}