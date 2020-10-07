<template>
  <div class="navigation">
    <TheAppBar />
    <TheSideNav />
  </div>
</template>

<script>
import TheAppBar from './TheAppBar';
import TheSideNav from './TheSideNav';

export default {
  components: {
    TheAppBar,
    TheSideNav,
  },
};
</script>
