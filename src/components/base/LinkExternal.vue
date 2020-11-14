<template functional>
  <div>
    <a :href="props.url">
      <slot />
    </a>
  </div>
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
/* anchor links */
a {
  text-decoration: none;
  border-bottom: 1px solid $primary;
  // &:hover:not(.v-list-item):not(.v-btn) {
  //   text-decoration: underline;
  // }
}
</style>
