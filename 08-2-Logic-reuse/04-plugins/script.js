import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

import SamplePage from './SamplePage.js';

import { ToasterPlugin } from './ToasterPlugin.js';

Vue.use(ToasterPlugin);

const App = {
  name: 'App',

  template: `<div class="wrapper page container">
  <sample-page />
</div>`,

  components: {
    SamplePage,
  },
};


const app = new Vue(App).$mount('#app');
