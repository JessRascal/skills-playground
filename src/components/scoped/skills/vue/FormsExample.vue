<template>
  <SkillExample title="Forms">
    <slot>
      <p>
        <ExternalLink url="https://vuejs.org/v2/guide/forms.html"
          >Forms</ExternalLink
        >
        appear in most apps, and yet nobody likes filling them out.
      </p>
      <p>
        Even though they are a "necessary evil"
        <HighlightText type="low">(dramatic)</HighlightText>, you owe it to your
        users to make them as easy as possible to complete.
      </p>
      <p>
        You also need to make sure that if they make a mistake, it is clear how
        they can correct it (validation).
      </p>
      <p>
        My preference for validation is a model-driven approach using
        <ExternalLink url="https://vuelidate.js.org/">Vuelidate</ExternalLink>.
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
