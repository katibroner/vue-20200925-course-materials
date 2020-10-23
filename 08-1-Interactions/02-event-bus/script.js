import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

import AppToast from './AppToast.js';
import SamplePage from './SamplePage.js';
import { ToastEventBus } from './ToastEventBus.js';
import { ToastEmitter } from './ToastEmitter.js';

const App = {
  name: 'App',

  template: `<div class="wrapper page container">
  <app-toast ref="rootToaster" />
  <app-toast ref="busToaster" />
  <app-toast ref="emitterToaster" />
  <sample-page />
</div>`,

  components: {
    SamplePage,
    AppToast,
  },

  mounted() {
    this.$root.$on('toaster:success', message => {
      this.$refs['rootToaster'].success(message);
    });

    ToastEventBus.$on('success', message => {
      this.$refs['busToaster'].success(message);
    });

    ToastEmitter.on('success', message => {
      this.$refs['emitterToaster'].success(message);
    });
  },
};


const app = new Vue(App).$mount('#app');
