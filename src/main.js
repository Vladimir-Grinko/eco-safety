import "mdb-vue-ui-kit/css/mdb.min.css";
import "wow.js/css/libs/animate.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

createApp(App).use(store).mount("#app");
