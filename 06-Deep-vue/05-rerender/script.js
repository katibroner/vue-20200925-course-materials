import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

let i = 0;
const genId = () => i++;

const logMethods = {
  methods: {
    log(s) {
      console.log(s);
    },
  },
};

const AppInput = {
  template: `<div>
    {{ log('AppInput ' + code) }}
    <input :value="value" @input="$emit('input', $event.target.value)" />
  </div>`,

  props: ['value', 'code'],

  model: {
    prop: 'value',
    event: 'input',
  },

  ...logMethods,
};

const FormGroup = {
  template: `<div>
    {{ log('FormGroup ' + code) }}
    <label>Form Group:</label><br />
    <slot />
  </div>`,

  props: ['code'],

  ...logMethods,
};

const App = {
  template: `<div>
  {{ log('App') }}
  <form-group v-for="input in inputs" :key="input.id" :code="input.id">
    <template #default>
      <app-input v-model="input.value" :code="input.id" />
    </template>
  </form-group>
</div>`,

  components: {
    FormGroup,
    AppInput
  },

  data() {
    return {
      inputs: Array.from(Array(2), () => ({ value: '', id: genId() })),
    };
  },

  ...logMethods,
};

const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');
