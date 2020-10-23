import { toaster } from './toaster.js';

export default {
  name: 'SamplePage',

  template: `
    <div
      style="position: relative;
      border: 1px solid;
      background: #efefef;
      padding: 15px;
      width: 500px;
      height: 500px;"
    >
    <button @click="toast">toast</button>
    <button @click="prototypeToast">prototypeToast</button>
    </div>`,

  methods: {
    toast() {
      toaster.success('Global Toast');
    },

    prototypeToast() {
      this.$toaster.success('prototypeToast');
    },
  },
};
