<template>
  <v-container fill-height>
    <TheSubtleHeader heading="Contact Me" />
    <v-row justify="center">
      <v-col sm="8">
        <p>
          Feel free to contact me about any potential frontend development work
          you need or if you've just got some questions.
        </p>
        <p>
          Always a pleasure, never a chore.
        </p>
        <p>
          Jess
        </p>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col v-for="contact in contacts" :key="contact.url" sm="6" md="3">
        <ContactCard v-bind="contact" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactMixin from '@/mixins/contact-mixin';
import ContactCard from '@/components/scoped/contact/ContactCard';

export default {
  components: {
    ContactCard,
  },
  mixins: [ContactMixin],
};
</script>
