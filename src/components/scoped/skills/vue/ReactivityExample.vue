<template>
  <SkillExample title="Reactivity">
    <slot>
      <!-- TODO: example of button making something appear? Look at other basic reactivity example options -->
      <p>
        I use <HighlightText>Computed Properties</HighlightText>,
        <HighlightText>Watchers</HighlightText>,
        <HighlightText>Data-Binding</HighlightText>, etc., to create a reactive
        experience for your user.
      </p>
      <p>
        What I mean by this is when your user does something, they immediately
        see the outcome.
      </p>
      <p>I believe this is how we all want apps to work.</p>
    </slot>
  </SkillExample>
</template>

<script>
import SkillExample from '@/components/scoped/skills/SkillExample';

export default {
  components: { SkillExample },
};
</script>
