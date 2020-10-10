<template>
  <v-navigation-drawer
    :value="showSideNav"
    @input="toggleSideNav($event)"
    app
    clipped
  >
    <v-list-item :to="{ name: 'Contact' }">
      <v-list-item-content>
        <v-list-item-title class="title">
          <!-- TODO: link to about -->
          Jess Rascal
        </v-list-item-title>
        <v-list-item-subtitle>
          <!-- TODO: add mailto link -->
          hi@jessrascal.com
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="{ name: item.routeName }"
        exact
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { mdiHome, mdiVuejs, mdiVuetify } from '@mdi/js';

export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: mdiHome, routeName: 'Home' },
        { title: 'Vue.js', icon: mdiVuejs, routeName: 'VueJsSkill' },
        { title: 'Vue Router', icon: mdiVuejs, routeName: 'VueRouterSkill' },
        { title: 'Vuetify', icon: mdiVuetify, routeName: 'VuetifySkill' },
        { title: 'Vuex', icon: mdiVuejs, routeName: 'VuexSkill' },
      ],
    };
  },
  computed: {
    ...mapState(['showSideNav']),
  },
  methods: {
    ...mapMutations(['toggleSideNav']),
  },
};
</script>
