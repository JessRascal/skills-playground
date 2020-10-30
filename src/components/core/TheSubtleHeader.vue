<template functional>
  <h1 class="d-none d-sm-flex text-right" id="backgroundHeading">
    {{ props.heading }}
  </h1>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#backgroundHeading {
  opacity: 5%;
  font-size: 9rem;
  text-transform: uppercase;
  position: fixed;
  top: 40px;
  right: 0;
}
</style>
