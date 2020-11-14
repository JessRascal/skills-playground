<template functional>
  <span :class="$options.setColor(props.type)">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'secondary',
    },
  },
  setColor(type) {
    switch (type) {
      case 'primary':
        return 'primary--text';
      case 'secondary':
        return 'secondary--text';
      case 'accent':
        return 'accent--text';
      case 'low':
        return 'text--disabled';
      default:
        return null;
    }
  },
};
</script>
