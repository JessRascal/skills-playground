import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
  // skill views
  {
    path: '/skill/vuejs',
    name: 'VueJsSkill',
    component: () =>
      import(/* webpackChunkName: "vuejs-view" */ '../views/skills/VueJs.vue'),
  },
  {
    path: '/skill/vue-router',
    name: 'VueRouterSkill',
    component: () =>
      import(
        /* webpackChunkName: "vue-router-view" */ '../views/skills/VueRouter.vue'
      ),
  },
  {
    path: '/skill/vuetify',
    name: 'VuetifySkill',
    component: () =>
      import(
        /* webpackChunkName: "vuetify-view" */ '../views/skills/Vuetify.vue'
      ),
  },
  {
    path: '/skill/vuex',
    name: 'VuexSkill',
    component: () =>
      import(/* webpackChunkName: "vuex-view" */ '../views/skills/Vuex.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
