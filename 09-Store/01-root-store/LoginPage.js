import { loginWithApi } from './api.js';

export default {
  name: 'LoginPage',

  template: `
    <form @submit.prevent="handleSubmit">
    <p>
      <input v-model="email" placeholder="email"/>
    </p>
    <p>
      <input v-model="password" type="password" placeholder="password" />
    </p>
    <p>
      <button>Submit</button>
    </p>
    </form>`,

  data() {
    return {
      email: 'demo@email',
      password: 'password',
    };
  },

  methods: {
    handleSubmit() {
      loginWithApi(this.email, this.password).then((user) => {
        this.$root.setUser(user);
      }).catch((err) => {
        alert(err.message);
      });

      // or
      // this.$root.login(this.email, this.password).then().catch();
    },
  },
};
