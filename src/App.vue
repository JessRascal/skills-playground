<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import TheNavigation from '@/components/core/TheNavigation';

export default {
  name: 'App',
  components: {
    TheNavigation,
  },
};
</script>

<style lang="scss">
/* loads local font */
@import '../node_modules/typeface-roboto/index.css';
</style>
