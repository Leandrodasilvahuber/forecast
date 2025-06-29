import { createApp } from "vue";
import App from "./App.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import "flag-icons/css/flag-icons.min.css";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "mdi",
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: "dark",
    },
});

const app = createApp(App);
app.use(vuetify);
app.mount("#app");
