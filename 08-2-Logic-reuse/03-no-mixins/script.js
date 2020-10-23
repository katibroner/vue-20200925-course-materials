import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

import { localProp } from './local-prop.js';
import { windowSize } from './window-size.js';

const userLocalProp = localProp('user', { type: Object, required: true });
const UserForm = {
  template: `<form>
  <p>FirstName: <input v-model="user_.firstName"></p>
  <p>LastName: <input v-model="user_.lastName"></p>
</form>`,

  props: {
    ...userLocalProp.props,
  },

  data() {
    return {
      ...userLocalProp.data.apply(this),
    }
  },

  watch: {
    ...userLocalProp.watch,
  },
};

const App = {
  template: `<div>
  <p>Windows Size: {{ windowWidth }}:{{ windowHeight }}</p>
  <hr>
  <user-form :user.sync="user" />
  <hr>
  <pre>{{ user }}</pre>
</div>`,

  components: { UserForm },

  data() {
    return {
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
      },
      ...windowSize.data.apply(this),
    };
  },

  mounted() {
    windowSize.mounted.apply(this);
  },

  methods: {
    ...windowSize.methods,
  },

  beforeDestroy() {
    windowSize.beforeDestroy.apply(this);
  },
};

const app = new Vue({
  render: h => h(App),
}).$mount('#app');
