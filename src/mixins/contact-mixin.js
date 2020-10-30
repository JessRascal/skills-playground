import { mdiEmail, mdiTwitter, mdiGithub } from '@mdi/js';

export default {
  data() {
    return {
      contacts: {
        email: {
          handle: 'hi@jessrascal.com',
          url: 'mailto:hi@jessrascal.com',
          icon: mdiEmail,
          colour: '#c71610',
        },
        twitter: {
          handle: '@JessRascal',
          url: 'https://twitter.com/JessRascal',
          icon: mdiTwitter,
          colour: '#1da1f2',
        },
        gitHub: {
          handle: 'JessRascal',
          url: 'https://github.com/JessRascal',
          icon: mdiGithub,
          colour: '#000000',
        },
        // blog: {
        //   handle: 'My Blog',
        //   url: 'https://jessrascal.com',
        //   icon: mdiPost,
        // },
      },
    };
  },
};
