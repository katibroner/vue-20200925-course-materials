import AppToast from './AppToast.js';
import { ToastEventBus } from './ToastEventBus.js';
import { ToastEmitter } from './ToastEmitter.js';

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
  <app-toast ref="localToaster" />
  <button @click="localToast">localToast</button>
  <button @click="rootToast">rootToast</button>
  <button @click="busToast">busToast</button>
  <button @click="emitterToast">emitterToast</button>
</div>`,

  components: { AppToast },

  methods: {
    localToast() {
      this.$refs['localToaster'].success('Toast');
    },

    rootToast() {
      this.$root.$emit('toaster:success', 'Root Toast');
    },

    busToast() {
      ToastEventBus.$emit('success', 'Vue Event Bus Toast');
    },

    emitterToast() {
      ToastEmitter.emit('success', 'Mitt Emitter Toast');
    },
  },
};
