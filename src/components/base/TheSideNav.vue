<template>
  <v-navigation-drawer app permanent clipped>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Jess Rascal
        </v-list-item-title>
        <v-list-item-subtitle>
          hi@jessrascal.com
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
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
import { mdiViewDashboard, mdiImage, mdiHelpBox } from '@mdi/js';

export default {
  data() {
    return {
      items: [
        { title: 'Dashboard', icon: mdiViewDashboard },
        { title: 'Photos', icon: mdiImage },
        { title: 'About', icon: mdiHelpBox },
      ],
      right: null,
    };
  },
};
</script>
