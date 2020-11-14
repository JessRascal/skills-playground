<template>
  <SkillExample title="Mixins">
    <slot>
      <p>
        I mentioned about reusing full components, but sometimes it's only a
        function that we want to reuse.
      </p>
      <p>
        This is where
        <ExternalLink url="https://vuejs.org/v2/guide/mixins.html"
          >Mixins</ExternalLink
        >
        come in.
      </p>
      <p>I like to use Mixins when possible to avoid duplicating code.</p>
      <p>
        Also, it doesn't hurt that if there's a bug, it only needs fixing in one
        place.
      </p>
      <p>
        In this app, I use a Mixin to share
        <ExternalLink
          url="https://github.com/JessRascal/skills-playground/blob/main/src/mixins/contact-mixin.js"
          >my contact information</ExternalLink
        >
        across components.
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
