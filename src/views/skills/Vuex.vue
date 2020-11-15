<template>
  <v-container fluid>
    <TheSubtleHeader heading="vuex" />
    <SkillScreenHeader>
      <template v-slot:header>Header for Vuex.</template>
      <template v-slot:sub-header>Sub-header for Vuex.</template>
    </SkillScreenHeader>
  </v-container>
</template>

<script>
import SkillScreenHeader from '@/components/scoped/skills/SkillScreenHeader';

export default {
  components: {
    SkillScreenHeader,
  },
};
</script>
