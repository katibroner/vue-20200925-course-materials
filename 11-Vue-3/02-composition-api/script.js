import { createApp } from './vue3.esm-browser.js';

import { App } from './App.js';

const app = createApp(App);
app.mount('#app');

window.app = app;
