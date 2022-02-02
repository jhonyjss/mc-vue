import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/css/tailwind.css";

const statsApp = createApp(App);

const components = import.meta.globEager("./components/**/*.vue");
Object.keys(components).forEach((fileName) => {
  let baseComponentConfig = components[fileName];
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
  const baseComponentName =
    baseComponentConfig.name ||
    fileName.replace(/^.+\//, "").replace(/\.\w+$/, "");
  console.log(baseComponentName, baseComponentConfig);
  statsApp.component(baseComponentName, baseComponentConfig);
});

statsApp.use(store);
statsApp.mount("#app");
