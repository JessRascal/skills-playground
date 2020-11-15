<template>
  <SkillScreenExample title="Reactivity">
    <slot>
      <!-- TODO: example of button making something appear? Look at other basic reactivity example options -->
      <p>
        I use
        <ExternalLink
          url="https://vuejs.org/v2/guide/computed.html#Computed-Properties"
          >Computed Properties</ExternalLink
        >,
        <ExternalLink url="https://vuejs.org/v2/guide/computed.html#Watchers"
          >Watchers</ExternalLink
        >, <HighlightText>data binding</HighlightText>, etc., to create a
        reactive experience for your user.
      </p>
      <p>
        What I mean by this is that when your user does something, they
        immediately see the outcome.
      </p>
      <p>I believe this is how we all want apps to work.</p>
    </slot>
  </SkillScreenExample>
</template>

<script>
import SkillScreenExample from '@/components/scoped/skills/SkillScreenExample';

export default {
  components: { SkillScreenExample },
};
</script>
