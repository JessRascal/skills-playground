<template functional>
  <div>
    <v-row justify="center">
      <v-col sm="10" lg="9" xl="8">
        <h4 class="text-h4 secondary--text">
          {{ props.title }}
        </h4>
      </v-col>
    </v-row>
    <v-row justify="center" class="skill-example-row">
      <v-col sm="10" lg="9" xl="8">
        <slot />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
