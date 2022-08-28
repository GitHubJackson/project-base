import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "reactApp",
    entry: "//localhost:3000",
    container: "#container",
    activeRule: "/app-react",
  },
  {
    name: "vue2App",
    entry: "//localhost:3001",
    container: "#container",
    activeRule: "/app-vue2",
  },
  {
    name: "vue3App",
    entry: "//localhost:3002",
    container: "#container",
    activeRule: "/app-vue3",
  },
]);
// 启动 qiankun
start();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
