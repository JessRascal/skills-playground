<template>
  <SkillScreen heading="vuetify">
    <template v-slot:intro>Intro for Vuetify.</template>
    <template v-slot:description>Description for Vuetify.</template>
    <template v-slot:examples>
      <v-row justify="center">
        <v-col sm="10" lg="9" xl="8"> [put something here] </v-col>
      </v-row>
    </template>
  </SkillScreen>
</template>

<script>
import SkillScreen from '@/components/scoped/skills/SkillScreen';

export default {
  components: {
    SkillScreen,
  },
};
</script>
