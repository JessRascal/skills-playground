<template>
  <v-card outlined :min-height="minHeight">
    <v-system-bar dark>
      <v-icon small color="error">{{ icons.circle }}</v-icon>
      <v-icon small color="warning">{{ icons.circle }}</v-icon>
      <v-icon small color="success">{{ icons.circle }}</v-icon>
    </v-system-bar>
    <v-card-title id="address-bar">
      <v-icon class="action-icon">{{ icons.arrowLeft }}</v-icon>
      <v-icon class="action-icon">{{ icons.arrowRight }}</v-icon>
      <v-icon class="action-icon">{{ icons.refresh }}</v-icon>
      <!-- TODO: bug with min-height on .v-input__slot stops -->
      <!-- 'height' on field being honoured if less than that (40px dense, 56px normal) -->
      <v-text-field outlined rounded dense disabled hide-details></v-text-field>
    </v-card-title>
    <v-card-text>
      This is a browser, it just doesn't look like one yet.
    </v-card-text>
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

  // .v-text-field {
  //   //  without 'outlined'
  //   margin-top: 0;
  //   padding-top: 0;
  //   border: 1px solid #1e1e1e !important;
  // }
}

.action-icon {
  margin-right: 16px;
}
</style>
