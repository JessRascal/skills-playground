<template>
  <v-row justify="center">
    <v-col sm="10" lg="9" xl="8">
      <v-tabs
        v-model="currentItem"
        color="secondary"
        background-color="transparent"
      >
        <v-tab
          v-for="item in items"
          :key="item.name"
          @click="routeToExample(item.routeName)"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="currentItem" class="transparent">
        <v-tab-item v-for="item in items" :key="item.name">
          <div class="pt-5 pb-10">
            <component :is="item.component" />
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script>
import NestedRouteDescription from '@/components/scoped/skills/vue-router/NestedRoutesDescription';
import PropsDescription from '@/components/scoped/skills/vue-router/PropsDescription';

export default {
  data() {
    return {
      currentItem: null,
      items: [
        {
          name: 'Nested Routes',
          routeName: 'NestedRouteExample',
          component: NestedRouteDescription,
        },
        {
          name: 'Props',
          routeName: 'PropsExample',
          component: PropsDescription,
        },
        // { tab: 'Two', routeName: 'NestedRouteExample', content: 'Tab 2 Content' },
        // { tab: 'Three', routeName: 'NestedRouteExample', content: 'Tab 3 Content' },
        // { tab: 'Four', routeName: 'NestedRouteExample', content: 'Tab 4 Content' },
        // { tab: 'Five', routeName: 'NestedRouteExample', content: 'Tab 5 Content' },
        // { tab: 'Six', routeName: 'NestedRouteExample', content: 'Tab 6 Content' },
        // { tab: 'Seven', routeName: 'NestedRouteExample', content: 'Tab 7 Content' },
      ],
    };
  },
  methods: {
    routeToExample(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>
