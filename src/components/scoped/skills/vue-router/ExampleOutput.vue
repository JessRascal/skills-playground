<template>
  <v-row justify="center">
    <v-col sm="10" lg="9" xl="8">
      <BrowserMockup>
        <v-container>
          <v-row>
            <v-col>
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </BrowserMockup>
    </v-col>
  </v-row>
</template>

<script>
import BrowserMockup from '@/components/base/BrowserMockup';

export default {
  components: {
    BrowserMockup,
  },
};
</script>
