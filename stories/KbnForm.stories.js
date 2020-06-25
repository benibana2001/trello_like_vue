import KbnLoginForm from '../src/components/molecules/KbnLoginForm.vue';

export default {
  component: KbnLoginForm,
  title: 'KbnLoginForm',
};

function handler(email, password) {
  return email;
  //   console.log('onlogin');
  //   console.log(email);
  //   console.log(password);
}

export const loginForm = (email, password) => ({
  components: { KbnLoginForm },
  template: `<KbnLoginForm :onlogin="${handler}" />`,
});
