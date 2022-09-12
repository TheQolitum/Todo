<template>
  <body id="app__login">
  <div class="container">
    <h1>Добро пожаловать!</h1>
    <div class="login__body">
      <p class="login__attribute">Введите email:</p>
      <input class="log" type="text" v-model="login">
      <p class="err" v-if="showLoginError">Вы не ввели логин!</p>
      <p class="login__attribute">Введите пароль:</p>
      <input class="login__attribute" type="password" v-model="password">
      <p class="err" v-if="showPassError">Вы не ввели пароль!</p>
      <br>
      <button @click="checker">
        Log in
      </button>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      showLoginError: false,
      showPassError: false
    }
  },
  methods: {
    checker() {
      if (this.validateLogin() & this.validatePass()) {
        alert('Good');
      }
    },
    validateLogin() {
      let loginExist = !!this.login;
      this.showLoginError = !loginExist;
      return loginExist;
    },
    validatePass() {
      let passExist = !!this.password;
      this.showPassError = !passExist;
      return passExist;
    },
  }
}
</script>

<style lang="css">
@import "assets/login.css";
</style>
