<template>
  <v-hover v-slot="{ hover }">
    <v-card
      hover
      tile
      :href="url"
      class="pa-10 text-center"
      target="_blank"
      :color="hover ? colour : null"
    >
      <v-card-text>
        <v-icon
          :color="hover ? 'white' : 'grey darken-2'"
          size="110"
          class="mb-8"
        >
          {{ icon }}
        </v-icon>
        <div class="text-subtitle-1" :class="hover ? 'white--text' : null">
          {{ handle }}
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import { mdiAccountCircle } from '@mdi/js';

export default {
  props: {
    handle: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: mdiAccountCircle,
    },
    colour: {
      type: String,
      required: true,
    },
  },
};
</script>
