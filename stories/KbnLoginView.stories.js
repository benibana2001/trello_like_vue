import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import KbnLoginView from '../src/components/templates/KbnLoginView.vue';

export default {
  component: KbnLoginView,
  title: 'KbnLoginView',
};

export const withText = () => ({
  components: { KbnLoginView },
  template: '<KbnLoginView />',
  //   methods: { action: action('clicked') },
});
