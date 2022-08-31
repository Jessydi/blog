import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Vue2Editor from "vue2-editor";

// Vue.use(Vue2Editor);

createApp(App).use(router).use(store).mount("#app");

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");
