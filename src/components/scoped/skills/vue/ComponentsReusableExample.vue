<template>
  <SkillExample title="Reusable Components">
    <slot>
      <!-- TODO: example of swuare with 'x' in it and then multiple copies of it with all having a number instead of the 'x' -->
      <p>
        I always use reusable
        <HighlightText>single-file components</HighlightText>, where possible.
      </p>
      <p>
        Components, with the help of <HighlightText>Props</HighlightText> and
        <HighlightText>Slots</HighlightText>, makes writing and maintaining code
        so much easier.
      </p>
      <p>
        Components also make it easier to keep your app consistent which is
        crucial for a good user experience.
      </p>
      <p>
        Each of the examples in this list is based on a single
        <HighlightText>SkillExample.vue</HighlightText>
        component.
        <!-- TODO: external link to SkillExample file in repo -->
      </p>
    </slot>
  </SkillExample>
</template>

<script>
import SkillExample from '@/components/scoped/skills/SkillExample';

export default {
  components: { SkillExample },
};
</script>
