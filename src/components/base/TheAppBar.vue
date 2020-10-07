<template>
  <v-app-bar app color="primary" dark clipped-left>
    <v-icon x-large class="mr-3">{{ icons.slide }}</v-icon>
    <div class="d-flex align-center">
      <h2>Portfolio Playground</h2>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/JessRascal/skills-playground/"
      target="_blank"
      text
    >
      <span class="mr-2">GitHub Repo</span>
      <v-icon>{{ icons.openInNew }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mdiOpenInNew, mdiSlide } from '@mdi/js';

export default {
  data() {
    return {
      icons: {
        openInNew: mdiOpenInNew,
        slide: mdiSlide,
      },
    };
  },
};
</script>
