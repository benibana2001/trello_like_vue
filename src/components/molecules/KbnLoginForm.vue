<template>
  <form novalidate>
    <div class="form-item">
      <label for="email">メールアドレス</label>
      <input
        id="email"
        v-model="email"
        type="text"
        autocomplete="off"
        placeholder="exp: bar@foo.com"
        @focus="resetError"
      />

      <ul class="validation-errors">
        <li v-if="!validation.email.format">
          メールアドレスの形式が不正です。
        </li>

        <li v-if="!validation.email.required">
          メールアドレスが入力されていません。
        </li>
      </ul>
    </div>

    <div class="form-item">
      <label for="password">パスワード</label>
      <input
        id="password"
        v-model="password"
        autocomplete="off"
        placeholder="例: xxxxxxxx"
        @focus="resetError"
      />

      <ul class="validation-errors">
        <li v-if="!validation.password.required">
          パスワードが入力されていません。
        </li>
      </ul>
    </div>

    <div class="form-actions">
      <KbnButton :disabled="disableLoginAction" @click="handleClick">
        ログイン
      </KbnButton>

      <p v-if="progress" class="login-progress">
        ログイン中...
      </p>

      <p v-if="error" class="login-error">
        {{ error }}
      </p>
    </div>
  </form>
</template>

<script>
import Vue from 'vue';
import KbnButton from '@/components/atoms/KbnButton';

const REGEX_EMAIL = () => console.log('not implemented yet');

const required = val => !!val.trim();

export default Vue.extend({
  name: 'KbnLoginForm',
  components: {
    KbnButton,
  },

  props: {
    onlogin: {
      type: Function,
      required: true,
    },
  },

  data() {
    return {
      email: '',
      password: '',
      progress: false,
      error: '',
    };
  },

  computed: {
    validation() {
      return {
        email: {
          required: required(this.email),
          format: REGEX_EMAIL.test(this.email),
        },
        pasword: {
          required: required(this.password),
        },
      };
    },

    valid() {
      const validation = this.validation;
      const fields = Object.keys(validation);
      let valid = true;

      for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        valid = Object.keys(validation[field]).every(key => {
          return validation[field][key];
        });

        if (!valid) {
          break;
        }
      }

      return valid;
    },

    disableLoginAction() {
      return !this.valid || this.progress;
    },
  },

  methods: {
    resetError() {
      this.error = '';
    },

    handleClick(e) {
      if (this.disableLoginAction) {
        return;
      }

      this.progress = true;

      this.error = '';

      this.$nextTick(() => {
        this.onlogin({ email: this.email, password: this.password })
          .catch(err => {
            this.error = err.message;
          })
          .then(() => {
            this.progress = false;
          });
      });
    },
  },
});
</script>
