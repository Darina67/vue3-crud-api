import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/global-styles.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(store).use(router).mount("#app");
