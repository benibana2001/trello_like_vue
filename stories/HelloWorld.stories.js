import Vue from 'vue';
import HelloWorld from '../src/components/HelloWorld.vue';

export default {
  components: HelloWorld,
  title: 'HelloWorld',
};

export const Smaple = () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="hello world"></HelloWorld>',
});
