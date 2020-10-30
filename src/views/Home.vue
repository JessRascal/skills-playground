<template>
  <v-container>
    <TheSubtleHeader heading="hello" />
    <v-row>
      <v-col class="d-flex justify-center">
        <MyAvatar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyAvatar from '@/components/scoped/home/MyAvatar';

export default {
  name: 'Home',
  components: {
    MyAvatar,
  },
};
</script>
