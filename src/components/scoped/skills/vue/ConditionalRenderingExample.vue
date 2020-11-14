<template>
  <SkillExample title="Conditional Rendering">
    <slot>
      <p>It's easy to overload your user with too much information.</p>
      <p>
        I like to avoid this by using
        <HighlightText>Conditional Rendering</HighlightText>, so your users only
        see what they need.
      </p>
      <p>
        Avoiding information overload helps simplify the user's workflow and
        therefore makes your app easier to use.
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
