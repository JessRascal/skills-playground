<template>
  <SkillScreenExample title="Official Style Guide">
    <slot>
      <p>
        Different developers write code in different ways, and that is fine.
      </p>
      <p>
        However, there are certain things in your codebase that you want to be
        consistent so, it doesn't become unmanageable.
      </p>
      <p>
        I use the
        <ExternalLink url="https://vuejs.org/v2/style-guide/"
          >Official Vue Style Guide</ExternalLink
        >
        to keep things tidy and consistent.
      </p>
    </slot>
  </SkillScreenExample>
</template>

<script>
import SkillScreenExample from '@/components/scoped/skills/SkillScreenExample';

export default {
  components: { SkillScreenExample },
};
</script>
