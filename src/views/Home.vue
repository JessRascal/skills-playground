<template>
  <v-container>
    <TheSubtleHeader heading="hello" />
    <v-row align="center">
      <v-col class="d-flex justify-center">
        <MyAvatar />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="10" lg="9" xl="8">
        <div class="text-h4 text-center">
          <p>
            I am a freelance
            <HighlightText>frontend developer</HighlightText> that specialises
            in <a href="https://vuejs.org/" target="_blank">Vue.js</a>.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="10" lg="9" xl="8">
        <div class="text-h5 text-center">
          <p>
            This app gives you a preview of what I can do in Vue and how this
            can <HighlightText>help you and your users</HighlightText>.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="10" lg="9" xl="8">
        <div class="text-h5 text-center">
          <p>
            Take a look around and if you've got any questions, feel free to
            <router-link :to="{ name: 'Contact' }">contact me</router-link>.
          </p>
        </div>
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

<style lang="scss" scoped>
.row {
  &:first-of-type {
    margin-top: 10vh;
  }
  &:not(:first-of-type) {
    margin-top: 5vh;
  }
}
</style>
