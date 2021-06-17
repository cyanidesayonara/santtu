import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag-next";

createApp(App)
  .use(router)
  .use(VueGtag, {
    property: {
      id: "UA-120584024-2",
    },
  })
  .mount("#app");
