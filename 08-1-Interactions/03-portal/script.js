import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import { PortalTarget } from './portal-vue.esm.js';

import AppToast from './AppToast.js';
import SamplePage from './SamplePage.js';

const App = {
  name: 'App',

  template: `<div class="wrapper page container">
  <sample-page />
  <portal-target name="root-end" multiple></portal-target>
</div>`,

  components: {
    SamplePage,
    AppToast,
    PortalTarget,
  },
};


const app = new Vue(App).$mount('#app');
