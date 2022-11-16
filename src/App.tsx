import { loadMicroApp } from "qiankun";
import { useEffect } from "react";
import "./App.css";

function App() {
  const loadReactApp = () => {
    const microApp = loadMicroApp({
      name: "react",
      entry: "//localhost:8001",
      container: "#microReact",
    });
    return () => {
      microApp.unmount();
    };
  };

  useEffect(() => {
    loadReactApp();
  }, []);

  return (
    <div className="App">
      {/* 存放微应用的容器 */}
      <div id="microReact"></div>
    </div>
  );
}

export default App;
