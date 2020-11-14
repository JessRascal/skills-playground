<template>
  <v-avatar :size="avatarSize" class="elevation-5">
    <v-img
      src="@/assets/images/jess-rascal-scrubbed-up-bw.jpg"
      alt="A picture of Jess in a suit. He is smiling nicely."
      id="avatar-image"
    />
    <!-- TODO: create a slideshow that automatically changes to a more casual picture? -->
    <!-- or just replace for a more casual picture? -->
    <!-- put a primary-colored effect over the top like RTS website -->
  </v-avatar>
</template>

<script>
export default {
  computed: {
    avatarSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xl':
          return 250;
        default:
          return 200;
      }
    },
  },
};
</script>

//
<style lang="scss" scoped>
// #avatar-image {
//   border: 10px solid $primary;
// }
//
</style>
