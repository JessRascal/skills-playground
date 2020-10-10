<template>
  <v-navigation-drawer
    :value="showSideNav"
    @input="toggleSideNav($event)"
    app
    clipped
  >
    <!-- TODO: change to 'Contact Me' on hover? -->
    <v-list nav flat>
      <v-list-item-group color="secondary">
        <v-list-item :to="{ name: 'Contact' }" exact>
          <v-list-item-content>
            <v-list-item-title class="title">
              Jess Rascal
            </v-list-item-title>
            <v-list-item-subtitle>
              hi@jessrascal.com
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-divider></v-divider>

    <v-list dense nav flat>
      <!-- general links -->
      <v-list-item-group color="secondary">
        <v-list-item
          v-for="item in generalLinks"
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
      </v-list-item-group>

      <!-- skill links -->
      <v-subheader>SKILLS</v-subheader>
      <v-list-item-group color="secondary">
        <v-list-item
          v-for="item in skillLinks"
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
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { mdiHome, mdiVuejs, mdiVuetify } from '@mdi/js';

export default {
  data() {
    return {
      generalLinks: [{ title: 'Home', icon: mdiHome, routeName: 'Home' }],
      skillLinks: [
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
