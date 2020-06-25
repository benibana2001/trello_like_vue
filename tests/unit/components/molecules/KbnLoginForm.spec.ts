import { shallowMount, mount, Wrapper } from '@vue/test-utils';
import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue';

describe('KbnLoginForm', () => {
  describe('Property', () => {
    describe('validation', () => {
      let wrapper: Wrapper<KbnLoginForm>;

      beforeEach(done => {
        wrapper = shallowMount(KbnLoginForm, {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          propsData: { onlogin: () => {} },
        });

        wrapper.vm.$nextTick(done);
      });

      describe('email', () => {
        // describe('required', () => {
        //   describe('no input', () => {
        //     it('validation.email.required is invalid', () => {
        //       wrapper.setData({ email: '' });
        //       expect(wrapper.vm.$data.validation.email.required).toBeFalsy();
        //     });
        //   });
        //   describe('exist input', () => {
        //     it('validation.email.required is valid', () => {
        //       console.log(wrapper.vm.$data);
        //       expect(wrapper.vm.$data.validation.email.required).toBeTruthy();
        //     });
        //   });
        // });
        // describe('format', () => {
        //   it('format is not type of mail addres', () => {
        //     it('validation.email.format is invalid', () => {
        //       wrapper.setData({ email: 'foobar' });
        //       expect(wrapper.vm.validation.email.format).toBeFalsy();
        //     });
        //     it('validation.email.format is valid', () => {
        //       wrapper.setData({ email: 'foo@bar.com' });
        //       expect(wrapper.vm.validation.email.format).toBeTruthy();
        //     });
        //   });
        // });
      });

      //   describe('password', () => {
      //     describe('required', () => {
      //   describe('no input', () => {
      //     it('validation.password.required is invalid', () => {
      //       wrapper.setData({ password: '' });
      //       expect(wrapper.vm.validation.password.required).toBeFalsy();
      //     });
      //   });

      //   describe('exist input', () => {
      //     it('validation.password.required is valid', () => {
      //       wrapper.setData({ password: 'xxxx' });
      //       expect(wrapper.vm.validation.password.required).toBeTruthy();
      //     });
      //   });
      //     });
      //   });
    });
    //   });

    //   describe('valid', () => {
    //     let wrapper: Wrapper<KbnLoginForm>;

    //     beforeEach(done => {
    //       wrapper = shallowMount(KbnLoginForm, {
    //         // eslint-disable-next-line @typescript-eslint/no-empty-function
    //         propsData: { onlogin: () => {} },
    //       });

    //       wrapper.vm.$nextTick(done);
    //     });

    //     describe('all validation is success', () => {
    //       it('to be valid', () => {
    //         wrapper.setData({
    //           email: 'foo@bar.com',
    //           password: '12345678',
    //         });

    //         expect(wrapper.vm.valid).toBeTruthy();
    //       });
    //     });

    //     describe('fail validation', () => {
    //       it('to be invalid', () => {
    //         wrapper.setData({
    //           email: 'foo@bar.com',
    //           password: '',
    //         });

    //         expect(wrapper.vm.valid).toBeFalsy();
    //       });
    //     });
    //   });

    //   describe('disableLoginAction', () => {
    //     let wrapper: Wrapper<KbnLoginForm>;

    //     beforeEach(done => {
    //       wrapper = shallowMount(KbnLoginForm, {
    //         // eslint-disable-next-line @typescript-eslint/no-empty-function
    //         propsData: { onlogin: () => {} },
    //       });

    //       wrapper.vm.$nextTick(done);
    //     });

    //     describe('exist invalid attribute', () => {
    //       it('to be invalid login action', () => {
    //         wrapper.setData({
    //           email: 'foo@bar.com',
    //           password: '',
    //         });

    //         expect(wrapper.vm.disableLobinAction).toBeTruthy();
    //       });
    //     });

    //     describe('success validation and not prosessing login action', () => {
    //       it('to be valid login action', () => {
    //         wrapper.setData({
    //           email: 'foo@bar.com',
    //           password: '12345678',
    //         });
    //       });

    //       expect(wrapper.vm.disableLoginAction).toBeFalsy();
    //     });

    //     describe('success validation and prosessing login action', () => {
    //       it('to be invalid login action', () => {
    //         wrapper.setData({
    //           email: 'foo@bar.com',
    //           password: '12345678',
    //           progress: true,
    //         });

    //         expect(wrapper.vm.disableLoginAction).toBeTruthy();
    //       });
    //     });
    //   });

    //   describe('onlogin', () => {
    //     let wrapper: Wrapper<KbnLoginForm>;

    //     beforeEach(done => {
    //       wrapper = shallowMount(KbnLoginForm, {
    //         // eslint-disable-next-line @typescript-eslint/no-empty-function
    //         propsData: { onlogin: () => {} },
    //       });

    //       wrapper.vm.$nextTick(done);
    //     });
  });
});
