<template>
  <SkillScreen heading="vue router">
    <template v-slot:intro>
      I use
      <ExternalLink url="https://router.vuejs.org/">Vue Router</ExternalLink>
      for all of the internal navigation within this app.
    </template>
    <template v-slot:description>
      Here are some <HighlightText>interactive examples</HighlightText> of Vue
      Router in action.
    </template>
    <template v-slot:examples>
      <v-row justify="center">
        <v-col sm="10" lg="9" xl="8">
          <BrowserMockup>
            <v-container>
              <v-row>
                <v-col>Browser content</v-col>
              </v-row>
            </v-container>
          </BrowserMockup>
        </v-col>
      </v-row>
    </template>
  </SkillScreen>
</template>

<script>
import SkillScreen from '@/components/scoped/skills/SkillScreen';
import BrowserMockup from '@/components/base/BrowserMockup';

export default {
  components: {
    SkillScreen,
    BrowserMockup,
  },
};
</script>
