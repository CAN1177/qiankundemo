import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "react app", // app name registered
    entry: "//localhost:8001", //微应用访问地址
    container: "#microReact", // 微应用容器节点
    activeRule: "/app/react", // 触发渲染微应用的前端路由
  },
]);

start();
