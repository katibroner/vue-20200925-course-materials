import AppToast from './AppToast.js';

export const ToasterPlugin = {
  install(Vue, options) {
    // Vue.mixin(SomeMixin);
    // Vue.component(BaseButton);
    // Vue.directive(selectOnFocus);
    let { container } = options;
    if (!container) {
      container = document.createElement('div');
      document.body.appendChild(container);
    }

    Vue.prototype.$toaster = new Vue(AppToast).$mount(container);
  },
};
