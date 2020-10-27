import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import { loginWithApi } from './api.js';

export const store = {
  auth: {
    state: Vue.observable({
      user: null,
    }),

    getUser() {
      return this.state.user;
    },

    isAuthenticated() {
      return !!this.state.user;
    },

    setUser(user) {
      this.state.user = user;
    },

    login(email, password) {
      return loginWithApi(email, password).then((user) => {
        this.setUser(user);
      });
    },
  },
};

// Or
/*
export const store = {
  auth: new Vue({
    data() {
      return {
        user_: null,
      };
    },

    computed: {
      user() {
        return this.user_;
      },

      isAuthenticated() {
        return !!this.user_;
      },
    },

    methods: {
      setUser(user) {
        this.user_ = user;
      },

      login(email, password) {
        return loginWithApi(email, password).then((user) => {
          this.setUser(user);
        });
      },
    },
  }),
}
*/
