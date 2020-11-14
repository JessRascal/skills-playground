<template functional>
  <a :href="props.url" target="_blank">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: $secondary;
  text-decoration: none;
  border-bottom: 1px solid var(--v-secondary-darken4);
  &:hover {
    border-bottom: 1px solid var(--v-secondary-lighten1);
    color: var(--v-secondary-lighten1);
  }
}
</style>
