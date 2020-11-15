<template>
  <v-container fluid>
    <TheSubtleHeader heading="vuetify" />
    <SkillScreenHeader>
      <template v-slot:header>Header for Vuetify.</template>
      <template v-slot:sub-header>Sub-header for Vuetify.</template>
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
