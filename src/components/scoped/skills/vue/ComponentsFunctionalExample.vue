<template>
  <SkillScreenExample title="Functional Components">
    <slot>
      <p>
        Sometimes components are so simple that they don't need all of Vue's
        reactivity magic.
      </p>
      <p>
        I use
        <ExternalLink
          url="https://vuejs.org/v2/guide/render-function.html#Functional-Components"
          >Functional Components</ExternalLink
        >
        when this is the case, and it results in them rendering quicker.
      </p>
      <p>
        The external links in this app are all styled the same using a
        functional component that I've called
        <ExternalLink
          url="https://github.com/JessRascal/skills-playground/blob/main/src/components/base/LinkExternal.vue"
          >ExternalLink</ExternalLink
        ><HighlightText type="low"> (predictably)</HighlightText>.
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
