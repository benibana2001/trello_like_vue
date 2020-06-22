import { shallowMount } from '@vue/test-utils';
import KbnButton from '@/components/atoms/KbnButton.vue';

describe('KbnButton', () => {
  describe('PROPERTY', () => {
    describe('type', () => {
      describe('default', () => {
        it('composed with kbn-button class', () => {
          const button = shallowMount(KbnButton);
          expect(button.element.tagName.toLowerCase()).toBe('button');
          expect(button.classes()).toContain('kbn-button');
        });
      });

      describe('button', () => {
        it('', () => {
          const button = shallowMount(KbnButton, {
            propsData: { type: 'button' },
          });
          expect(button.element.tagName.toLowerCase()).toBe('button');
          expect(button.classes()).toContain('kbn-button');
        });
      });

      describe('text', () => {
        it('', () => {
          const button = shallowMount(KbnButton, {
            propsData: { type: 'text' },
          });
          expect(button.element.tagName.toLowerCase()).toBe('button');
          expect(button.classes()).toContain('kbn-button-text');
        });
      });
    });

    describe('disabled', () => {
      describe('default', () => {
        it('not attached disabled property', () => {
          const button = shallowMount(KbnButton);
          expect(button.attributes().disabled).toBeUndefined();
        });
      });

      describe('true', () => {
        it('not attached disabled property', () => {
          const button = shallowMount(KbnButton, {
            propsData: { disabled: true },
          });
          expect(button.attributes().disabled).toEqual('disabled');
        });
      });

      describe('false', () => {
        it('not attached disabled property', () => {
          const button = shallowMount(KbnButton, {
            propsData: { disabled: false },
          });
          expect(button.attributes().disabled).toBeUndefined();
        });
      });
    });
  });

  describe('EVENT', () => {
    describe('click', () => {
      it('to be emitted', () => {
        const button = shallowMount(KbnButton);
        button.trigger('click');
        expect(button.emitted().click?.length).toEqual(1);
      });
    });
  }),
    describe('SLOT', () => {
      describe('inject contents', () => {
        it('injected', () => {
          const button = shallowMount(KbnButton, {
            slots: { default: '<p>hello</p>' },
          });

          expect(button.text()).toEqual('hello');
        });
      });
      describe('not inject contents', () => {
        it('not injected', () => {
          const button = shallowMount(KbnButton);
          expect(button.text()).toEqual('');
        });
      });
    });
});
