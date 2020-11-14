import Vue from 'vue';
import Vuetify, { VRow, VCol } from 'vuetify/lib';

Vue.use(Vuetify, {
  // components manually imported for functional components
  components: {
    VRow,
    VCol,
  },
});

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: true,
    themes: {
      dark: {
        primary: '#0f4c75',
        secondary: '#42b983',
        accent: '#ff9800',
        error: '#f44336',
        warning: '#ffc107',
        info: '#2196f3',
        success: '#4caf50',
        anchor: '#ff9800',
      },
      light: {
        primary: '#3282b8',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  icons: {
    iconfont: 'mdiSvg',
  },
});
