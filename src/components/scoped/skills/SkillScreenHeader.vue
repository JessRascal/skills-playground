<template functional>
  <div class="skill-header">
    <v-row justify="center">
      <v-col sm="10" lg="9" xl="8">
        <div class="text-h4 text-center">
          <slot name="header" />
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="10" lg="9" xl="8">
        <div class="text-h5 text-center">
          <slot name="sub-header" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss">
.skill-header {
  .row {
    margin-top: 15vh;
    margin-bottom: 15vh;
  }
}
</style>
