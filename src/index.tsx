import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';//全局样式文件
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppStateProvider } from "./AppState"

ReactDOM.render(//react帮助渲染虚拟dom；参数就是函数签名（app组件返回类型符合render的定义（render可以由多个参数组合return不同返回值）
  <React.StrictMode>
    <AppStateProvider>
      <App username={''} />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
