<template>
  <SkillExample title="Transitions and Animations">
    <slot>
      <p>
        Who doesn't like a good <HighlightText>animation</HighlightText> or
        <HighlightText>transition</HighlightText>?
      </p>
      <p>
        Your users might not realise they notice them, but they will feel your
        app is <HighlightText>slick</HighlightText>,
        <HighlightText>modern</HighlightText>,
        <HighlightText>impressive</HighlightText>, etc.
      </p>
      <p>
        Transitions, in particular, can also help make your app feel faster and
        assist your users in navigating it.
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
