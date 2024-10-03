import App from "./App.vue"
import vuetify from "./plugins/vuetify"

// eslint-disable-next-line no-unused-vars
import { createApp,h } from "vue"
import { createPinia } from "pinia"

// initialize VUE
const app  = createApp({
  render: ()=>h(App)
});
app.use(createPinia()).use(vuetify).mount("#app")