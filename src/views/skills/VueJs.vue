<template>
  <v-container fluid>
    <TheSubtleHeader heading="vue.js" />
    <v-row justify="center">
      <v-col sm="10" lg="9" xl="8">
        <div class="text-h4 text-center">
          <p>
            This full app is built with <HighlightText>Vue</HighlightText> and
            some of its <HighlightText> supporting libraries.</HighlightText>
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col sm="10" lg="9" xl="8">
        <div class="text-h5 text-center">
          <p>
            Let me tell you about some of the aspects of Vue I like to use and
            why.
          </p>
        </div>
      </v-col>
    </v-row>
    <ComponentsReusableExample />
    <ReactivityExample />
    <ConditionalRenderingExample />
    <FormsExample />
    <ComponentsFunctionalExample />
    <MixinsExample />
    <TransitionsExample />
    <StructureExample />
    <StyleGuideExample />
    <!-- TODO: add space on/below bottom row -->
  </v-container>
</template>

<script>
import ComponentsFunctionalExample from '@/components/scoped/skills/vue/ComponentsFunctionalExample';
import ComponentsReusableExample from '@/components/scoped/skills/vue/ComponentsReusableExample';
import ConditionalRenderingExample from '@/components/scoped/skills/vue/ConditionalRenderingExample';
import FormsExample from '@/components/scoped/skills/vue/FormsExample';
import MixinsExample from '@/components/scoped/skills/vue/MixinsExample';
import ReactivityExample from '@/components/scoped/skills/vue/ReactivityExample';
import StructureExample from '@/components/scoped/skills/vue/StructureExample';
import StyleGuideExample from '@/components/scoped/skills/vue/StyleGuideExample';
import TransitionsExample from '@/components/scoped/skills/vue/TransitionsExample';

export default {
  components: {
    ComponentsFunctionalExample,
    ComponentsReusableExample,
    ConditionalRenderingExample,
    FormsExample,
    MixinsExample,
    ReactivityExample,
    StructureExample,
    StyleGuideExample,
    TransitionsExample,
  },
};
</script>
