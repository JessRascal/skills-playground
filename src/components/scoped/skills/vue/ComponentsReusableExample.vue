<template>
  <SkillExample title="Reusable Components">
    <slot>
      <!-- TODO: example of square with 'x' in it and then multiple copies of it with all having a number instead of the 'x' -->
      <p>
        I always use reusable
        <ExternalLink
          url="https://vuejs.org/v2/guide/single-file-components.html"
          >single-file components</ExternalLink
        >, where possible.
      </p>
      <p>
        Components, with the help of
        <ExternalLink url="https://vuejs.org/v2/guide/components-props.html"
          >Props</ExternalLink
        >
        and
        <ExternalLink url="https://vuejs.org/v2/guide/components-slots.html"
          >Slots</ExternalLink
        >, makes writing and maintaining code so much easier.
      </p>
      <p>
        Components also make it easier to keep your app consistent which is
        crucial for a good user experience.
      </p>
      <p>
        Each of the examples in this list is based on a single
        <ExternalLink
          url="https://github.com/JessRascal/skills-playground/blob/main/src/components/scoped/skills/SkillExample.vue"
          >SkillExample.vue</ExternalLink
        >
        component.
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
