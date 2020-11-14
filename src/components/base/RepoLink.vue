<template>
  <v-btn
    href="https://github.com/JessRascal/skills-playground/"
    target="_blank"
    text
    :icon="screenIsXs"
  >
    <span v-if="!screenIsXs" class="mr-2">This App's Repo</span>
    <v-icon>{{ icons.github }}</v-icon>
  </v-btn>
</template>

<script>
import { mdiOpenInNew, mdiGithub } from '@mdi/js';

export default {
  data() {
    return {
      icons: {
        openInNew: mdiOpenInNew,
        github: mdiGithub,
      },
    };
  },
  computed: {
    screenIsXs() {
      return this.$vuetify.breakpoint.xs;
    },
  },
};
</script>
