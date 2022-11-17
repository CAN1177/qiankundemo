import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import "./registerApps";

import { registerMicroApps, start } from "qiankun";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
registerMicroApps([
  {
    name: "reactApp", // app name registered
    entry: "http://127.0.0.1:8001", //微应用访问地址
    container: "#microReact", // 微应用容器节点
    activeRule: "/react", // 触发渲染微应用的前端路由
  },
]);

start();
