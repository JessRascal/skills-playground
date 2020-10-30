<template>
  <div class="logo">
    <!-- TODO: handle clicking when already on home -->
    <div
      class="d-flex align-center"
      id="logo-wrapper"
      @click="$router.push({ name: 'Home' })"
    >
      <v-icon v-if="!isMobile" x-large class="mr-3">{{ icons.slide }}</v-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </div>
  </div>
</template>

<script>
import { mdiPlayCircle } from '@mdi/js';

export default {
  data() {
    return {
      icons: {
        slide: mdiPlayCircle,
      },
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    title() {
      return this.isMobile ? 'Vue' : 'Vue Examples';
    },
  },
};
</script>

<style lang="scss" scoped>
#logo-wrapper:hover {
  cursor: pointer;
}
</style>
