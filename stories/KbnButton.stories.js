import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import KbnButton from '../src/components/atoms/KbnButton.vue';

export default {
  component: KbnButton,
  title: 'KbnButton',
};

export const withText = () => ({
  components: { KbnButton },
  template: '<KbnButton>Button</KbnButton>',
  //   methods: { action: action('clicked') },
});

export const withTextClass = () => ({
  components: { KbnButton },
  template: '<KbnButton type="text">Button</KbnButton>',
  //   methods: { action: action('clicked') },
});
