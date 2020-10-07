<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheNavigation from '@/components/base/TheNavigation';

export default {
  name: 'App',
  components: {
    TheNavigation,
  },
};
</script>
