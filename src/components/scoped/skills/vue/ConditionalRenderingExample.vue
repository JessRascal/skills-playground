<template>
  <SkillScreenExample title="Conditional Rendering">
    <slot>
      <p>It's easy to overload your user with too much information.</p>
      <p>
        I like to avoid this by using
        <ExternalLink url="https://vuejs.org/v2/guide/conditional.html"
          >Conditional Rendering</ExternalLink
        >, so your users only see what they need.
      </p>
      <p>
        Avoiding information overload helps simplify the user's workflow and
        therefore makes your app easier to use.
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
