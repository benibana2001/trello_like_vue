import { shallowMount, Wrapper } from '@vue/test-utils';
import KbnButton from '@/components/atoms/KbnButton.vue';

describe('KbnButton', () => {
  describe('PROPERTY', () => {
    describe('type', () => {
      describe('default', () => {
        it('composed with kbn-button class', () => {
          const wrapper: Wrapper<KbnButton> = shallowMount(KbnButton);

          expect(wrapper.element.tagName.toLowerCase()).toBe('button');
          expect(wrapper.classes()).toContain('kbn-button');
        });
      });

      describe('button', () => {
        it('', () => {
          const wrapper: Wrapper<KbnButton> = shallowMount(KbnButton, {
            propsData: { type: 'button' },
          });

          expect(wrapper.element.tagName.toLowerCase()).toBe('button');
          expect(wrapper.classes()).toContain('kbn-button');
        });
      });

      describe('text', () => {
        it('', () => {
          const wrapper: Wrapper<KbnButton> = shallowMount(KbnButton, {
            propsData: { type: 'text' },
          });

          expect(wrapper.element.tagName.toLowerCase()).toBe('button');
          expect(wrapper.classes()).toContain('kbn-button-text');
        });
      });
    });

    describe('disabled', () => {
      describe('default', () => {
        it('not attached disabled property', () => {
          const wrapper = shallowMount(KbnButton);
          expect(wrapper.attributes().disabled).toBeUndefined();
        });
      });

      describe('true', () => {
        it('not attached disabled property', () => {
          const wrapper = shallowMount(KbnButton, {
            propsData: { disabled: true },
          });
          expect(wrapper.attributes().disabled).toEqual('disabled');
        });
      });

      describe('false', () => {
        it('not attached disabled property', () => {
          const wrapper = shallowMount(KbnButton, {
            propsData: { disabled: false },
          });
          expect(wrapper.attributes().disabled).toBeUndefined();
        });
      });
    });
  });

  describe('EVENT', () => {
    describe('click', () => {
      it('to be emitted', () => {
        const wrapper = shallowMount(KbnButton);
        wrapper.trigger('click');
        expect(wrapper.emitted().click?.length).toEqual(1);
      });
    });
  }),
    describe('SLOT', () => {
      describe('inject contents', () => {
        it('injected', () => {
          const wrapper = shallowMount(KbnButton, {
            slots: { default: '<p>hello</p>' },
          });

          expect(wrapper.text()).toEqual('hello');
        });
      });
      describe('not inject contents', () => {
        it('not injected', () => {
          const wrapper = shallowMount(KbnButton);
          expect(wrapper.text()).toEqual('');
        });
      });
    });
});
