import AppToast from './AppToast.js';

export default {
  name: 'SamplePage',

  template: `<div
    style="position: relative;
      border: 1px solid;
      background: #efefef;
      padding: 15px;
      width: 500px;
      height: 500px;"
  >
  <button @click="injectedToast">Injected Toast</button>
</div>`,

  components: { AppToast },

  inject: {
    toaster: 'toaster',
    config: 'config',
  },

  methods: {
    injectedToast() {
      this.toaster.success(this.config.API_URL);
    },
  },
};
