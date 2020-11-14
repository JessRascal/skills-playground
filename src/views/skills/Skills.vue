<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<style lang="scss" scoped>
::v-deep .row:not(.skill-example-row) {
  margin-top: 10vh;
}
::v-deep .row:last-of-type {
  margin-bottom: 10vh;
}
</style>
