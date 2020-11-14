<template>
  <SkillExample title="Mixins">
    <slot>
      <p>
        I mentioned about reusing full components, but sometimes it's only a
        function that we want to reuse.
      </p>
      <p>This is where <HighlightText>Mixins</HighlightText> come in.</p>
      <p>I like to use Mixins when possible to avoid duplicating code.</p>
      <p>
        Also, it doesn't hurt that if there's a bug, it only needs fixing in one
        place.
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
