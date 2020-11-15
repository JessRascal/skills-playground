<template>
  <SkillScreenExample title="Transitions and Animations">
    <slot>
      <p>
        Who doesn't like a good <HighlightText>transition</HighlightText> or
        <HighlightText>animation</HighlightText>?
      </p>
      <p>
        Your users might not realise they notice them, but they will feel your
        app is <HighlightText>slick</HighlightText>,
        <HighlightText>modern</HighlightText>,
        <HighlightText>impressive</HighlightText>, etc.
      </p>
      <p>
        <ExternalLink url="https://vuejs.org/v2/guide/transitions.html"
          >Transitions</ExternalLink
        >, in particular, can also help make your app feel faster and assist
        your users in navigating it.
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
