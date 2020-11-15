<template>
  <v-card outlined :min-height="minHeight">
    <v-system-bar dark>
      <v-icon small color="error">{{ icons.circle }}</v-icon>
      <v-icon small color="warning">{{ icons.circle }}</v-icon>
      <v-icon small color="success">{{ icons.circle }}</v-icon>
    </v-system-bar>
    <v-card-title id="address-bar">
      <v-btn icon disabled>
        <v-icon>{{ icons.arrowLeft }}</v-icon>
      </v-btn>
      <v-btn icon disabled>
        <v-icon>{{ icons.arrowRight }}</v-icon>
      </v-btn>
      <v-btn icon disabled class="mr-3">
        <v-icon>{{ icons.refresh }}</v-icon>
      </v-btn>

      <!-- TODO: bug with min-height on .v-input__slot stops -->
      <!-- 'height' on field being honoured if less than that (40px dense, 56px normal) -->
      <v-text-field
        outlined
        rounded
        dense
        disabled
        hide-details
        :value="url"
      ></v-text-field>
    </v-card-title>
    <slot />
  </v-card>
</template>

<script>
import {
  mdiCheckboxBlankCircle,
  mdiArrowLeft,
  mdiArrowRight,
  mdiRefresh,
} from '@mdi/js';

export default {
  props: {
    minHeight: {
      type: String,
      default: '50vh',
    },
    url: {
      type: String,
      default: window.location.toString(),
    },
  },
  data() {
    return {
      icons: {
        circle: mdiCheckboxBlankCircle,
        arrowLeft: mdiArrowLeft,
        arrowRight: mdiArrowRight,
        refresh: mdiRefresh,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#address-bar {
  background: #363636; // TODO: possible to get from theme variable?
  padding: 8px;
}
</style>
