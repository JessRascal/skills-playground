<template>
  <v-app-bar app color="primary" dark clipped-left>
    <!-- hamburger menu -->
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.mobile"
      @click="toggleSideNav(true)"
    />
    <AppLogo />
    <v-spacer />
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
