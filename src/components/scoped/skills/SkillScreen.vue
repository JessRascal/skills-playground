<template functional>
  <div class="skill-screen">
    <v-container>
      <!-- background -->
      <TheSubtleHeader :heading="props.heading" />
      <!-- header -->
      <div class="skill-header">
        <v-row justify="center">
          <v-col sm="10" lg="9" xl="8">
            <div class="text-h4 text-center">
              <slot name="intro" />
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col sm="10" lg="9" xl="8">
            <div class="text-h5 text-center">
              <slot name="description" />
            </div>
          </v-col>
        </v-row>
      </div>
      <!-- body -->
      <div class="skill-examples">
        <slot name="examples" />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.skill-header {
  .row {
    margin-top: 15vh;
    margin-bottom: 15vh;
  }
}
</style>
