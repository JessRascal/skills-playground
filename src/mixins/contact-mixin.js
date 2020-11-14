import { mdiEmail, mdiTwitter, mdiGithub } from '@mdi/js';

export default {
  data() {
    return {
      contacts: {
        email: {
          handle: 'hi@jessrascal.com',
          url: 'mailto:hi@jessrascal.com',
          icon: mdiEmail,
          color: '#c71610',
        },
        twitter: {
          handle: '@JessRascal',
          url: 'https://twitter.com/JessRascal',
          icon: mdiTwitter,
          color: '#1da1f2',
        },
        gitHub: {
          handle: 'JessRascal',
          url: 'https://github.com/JessRascal',
          icon: mdiGithub,
          color: '#000000',
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
