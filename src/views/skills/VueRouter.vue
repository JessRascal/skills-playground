<template>
  <SkillScreen heading="vue router">
    <template v-slot:intro>
      I use
      <ExternalLink url="https://router.vuejs.org/">Vue Router</ExternalLink>
      for all of the internal navigation within this app.
    </template>
    <template v-slot:description>
      Here are some <HighlightText>interactive examples</HighlightText> of Vue
      Router in action.
    </template>
    <template v-slot:examples>
      <ExampleTabs />
      <ExampleOutput />
    </template>
  </SkillScreen>
</template>

<script>
import SkillScreen from '@/components/scoped/skills/SkillScreen';
import ExampleTabs from '@/components/scoped/skills/vue-router/ExampleTabs';
import ExampleOutput from '@/components/scoped/skills/vue-router/ExampleOutput';

export default {
  components: {
    SkillScreen,
    ExampleTabs,
    ExampleOutput,
  },
};
</script>
