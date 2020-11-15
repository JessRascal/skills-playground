<template>
  <SkillScreenExample title="Structured Code">
    <slot>
      <p>There are no downsides to having well-structured code.</p>
      <p>
        It makes it easier for all developers that work on the code and
        therefore save time.
      </p>
      <p>
        Feel free to look at how I've
        <ExternalLink
          url="https://github.com/JessRascal/skills-playground/tree/main/src"
          >structured this app</ExternalLink
        >
        to see if I stand by my word.
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
