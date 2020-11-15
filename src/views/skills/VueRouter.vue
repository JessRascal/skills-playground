<template>
  <v-container>
    <TheSubtleHeader heading="vue router" />
    <v-row justify="center">
      <v-col sm="10" lg="9" xl="8">
        <div class="text-h4 text-center">
          <p>
            I use
            <ExternalLink url="https://router.vuejs.org/"
              >Vue Router</ExternalLink
            >
            for all of the internal navigation within this app.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="10" lg="9" xl="8">
        <div class="text-h5 text-center">
          <p>
            Here are some <HighlightText>interactive examples</HighlightText> of
            Vue Router in action.
          </p>
        </div>
      </v-col>
    </v-row>
    <!-- TODO: tabs -->
    <v-row justify="center">
      <v-col sm="10" lg="9" xl="8">
        <BrowserMockup />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BrowserMockup from '@/components/base/BrowserMockup';

export default {
  components: {
    BrowserMockup,
  },
};
</script>
