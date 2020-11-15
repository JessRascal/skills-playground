<template>
  <v-container fluid>
    <TheSubtleHeader heading="vue.js" />
    <SkillScreenHeader>
      <template v-slot:header>
        This full app is built with <HighlightText>Vue</HighlightText> and some
        of its <HighlightText> supporting libraries.</HighlightText>
      </template>
      <template v-slot:sub-header>
        Let me tell you about some of the aspects of Vue I like to use and why.
      </template>
    </SkillScreenHeader>
    <ComponentsReusableExample />
    <ReactivityExample />
    <ConditionalRenderingExample />
    <FormsExample />
    <ComponentsFunctionalExample />
    <MixinsExample />
    <TransitionsExample />
    <StructureExample />
    <StyleGuideExample />
  </v-container>
</template>

<script>
import SkillScreenHeader from '@/components/scoped/skills/SkillScreenHeader';
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
    SkillScreenHeader,
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
