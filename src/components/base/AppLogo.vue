<template>
  <div class="logo">
    <div class="d-flex align-center">
      <v-icon v-if="!isMobile" x-large class="mr-3">{{ icons.slide }}</v-icon>
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script>
import { mdiSlide } from '@mdi/js';

export default {
  data() {
    return {
      icons: {
        slide: mdiSlide,
      },
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    title() {
      return this.isMobile ? 'Portfolio' : 'Portfolio Playground';
    },
  },
};
</script>
