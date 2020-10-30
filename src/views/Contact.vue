<template>
  <v-container>
    <TheSubtleHeader heading="Contact Me" />
    <v-row justify="center">
      <v-col sm="10" lg="9" xl="8">
        <div class="text-h5">
          <p>
            Feel free to reach out to me about any potential frontend
            development work or if you've just got a question.
          </p>
          <p>
            Jess
            <em class="text-overline text--disabled">
              <br />
              Always a pleasure, never a chore.
            </em>
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        v-for="contact in contacts"
        :key="contact.url"
        sm="6"
        md="4"
        lg="3"
      >
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
