<template>
  <v-container fluid>
    <TheSubtleHeader heading="vue router" />
    <SkillScreenHeader>
      <template v-slot:header>
        I use
        <ExternalLink url="https://router.vuejs.org/">Vue Router</ExternalLink>
        for all of the internal navigation within this app.
      </template>
      <template v-slot:sub-header>
        Here are some <HighlightText>interactive examples</HighlightText> of Vue
        Router in action.
      </template>
    </SkillScreenHeader>
    <!-- TODO: tabs -->
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
  </v-container>
</template>

<script>
import SkillScreenHeader from '@/components/scoped/skills/SkillScreenHeader';
import BrowserMockup from '@/components/base/BrowserMockup';

export default {
  components: {
    SkillScreenHeader,
    BrowserMockup,
  },
};
</script>
