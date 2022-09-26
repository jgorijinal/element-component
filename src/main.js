import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";
import { toLine } from "./utils";
import "./styles/index.scss";
import "./styles/ui.scss";
import myComponents from "./components";
const app = createApp(App);

// 注册全局图标 浪费一点性能
for (const [key, component] of Object.entries(Icons)) {
  // 注册全部组件 el-icon-xxx 的形式
  app.component(`el-icon${toLine(key)}`, component);
}

app.use(router);
app.use(ElementPlus);
app.use(myComponents);
app.mount("#app");
