<template>
  <SkillExample title="Structured Code">
    <slot>
      <p>There are no downsides to having well-structured code.</p>
      <p>
        It makes it easier for all developers that work on the code and
        therefore save time.
      </p>
      <p>
        Feel free to look at how I've
        <HighlightText>structured this app</HighlightText> to see if I stand by
        my word.
      </p>
      <!-- TODO: link to the 'src' folder in my repo (put url in state?) -->
    </slot>
  </SkillExample>
</template>

<script>
import SkillExample from '@/components/scoped/skills/SkillExample';

export default {
  components: { SkillExample },
};
</script>
