<template>
  <SkillExample title="Functional Components">
    <slot>
      <p>
        Sometimes components are so simple that they don't need all of Vue's
        reactivity magic.
      </p>
      <p>
        I use <HighlightText>Functional components</HighlightText> when this is
        the case, and it results in them rendering quicker.
      </p>
      <p>
        The external links in this app are all styled the same using a
        functional component that I've called
        <HighlightText>ExternalLink</HighlightText>
        <HighlightText type="low">&nbsp;(imaginative)</HighlightText>.
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
