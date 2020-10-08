<template>
  <v-app-bar app color="primary" dark clipped-left>
    <!-- hamburger menu -->
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.mobile"
      @click="toggleSideNav(true)"
    ></v-app-bar-nav-icon>

    <AppLogo />
    <v-spacer></v-spacer>
    <RepoLink />
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex';
import AppLogo from '@/components/base/AppLogo';
import RepoLink from '@/components/base/RepoLink';

export default {
  components: {
    RepoLink,
    AppLogo,
  },
  methods: {
    ...mapMutations(['toggleSideNav']),
  },
};
</script>
