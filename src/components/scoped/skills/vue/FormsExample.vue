<template>
  <SkillExample title="Forms">
    <slot>
      <p>Forms appear in most apps, and yet nobody likes filling them out.</p>
      <p>
        Even though they are a "necessary evil"
        <span class="text--disabled">(dramatic)</span>, you owe it to your users
        to make them as easy as possible to complete.
      </p>
      <p>
        You also need to make sure that if they make a mistake, it is clear how
        they can correct them (validation).
      </p>
      <p>
        My preference is a model-driven approach to validation using
        <HighlightText>Vuelidate</HighlightText>.
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
