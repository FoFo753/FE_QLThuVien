import { createApp } from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/MasterRocker.vue'
import Blank from './Layout/Wrapper/MasterNewAccount.vue'
import Client from './Layout/Wrapper/MasterClient.vue'

import Toaster from "@meforma/vue-toaster";
const app = createApp(App)

app.use(router, axios, Toaster)
app.component("default-layout", Default);
app.component("account-layout", Blank);
app.component("client-layout", Client);
app.mount("#app")