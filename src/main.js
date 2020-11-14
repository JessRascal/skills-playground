import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import TheSubtleHeader from '@/components/core/TheSubtleHeader';
import HighlightText from '@/components/base/HighlightText';
import LinkExternal from '@/components/base/LinkExternal';

Vue.config.productionTip = false;

// globally registered components
Vue.component('TheSubtleHeader', TheSubtleHeader);
Vue.component('HighlightText', HighlightText);
Vue.component('ExternalLink', LinkExternal);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
