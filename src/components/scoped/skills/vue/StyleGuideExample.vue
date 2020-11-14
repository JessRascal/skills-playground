<template>
  <SkillExample title="Official Style Guide">
    <slot>
      <p>
        Different developers write code in different ways, and this is fine.
      </p>
      <p>
        However, there are certain things in your codebase that you want to be
        consistent so, it doesn't become unmanageable.
      </p>
      <p>
        I use the <HighlightText>Official Vue Style Guide</HighlightText> to
        keep things tidy and consistent.
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
