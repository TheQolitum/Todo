<template>
  <body>
  <div class="container">
    <div class="header">
      <h1>Not Microsoft To Do</h1>
      <div class="login-route">
      </div>
    </div>
    <br>
    <h1>Авторизируйтесь для доступа к вашему списку задач!</h1>
    <div class="login__body">
      <p class="login__attribute">Введите email:</p>
      <input class="log" type="text" v-model="login">
      <p class="err" v-if="showLoginError">Логин не корректный!</p>
      <p class="login__attribute">Введите пароль:</p>
      <input class="login__attribute" type="password" v-model="password">
      <p class="err" v-if="showPassError">Пароль не корректный!</p>
      <br>
      <button @click="checker" v-model="check">
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
      check: false,
      showLoginError: false,
      showPassError: false,
      login: ''
    }
  },
  methods: {
    checker() {
      if (this.validateLogin() & this.validatePass()) {
        this.check = true;
        this.redirect()
      }
    },
    validateLogin() {
      let mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      let loginExist = !!this.login && mailReg.test(this.login);
      this.showLoginError = !loginExist;
      return loginExist;
    },
    validatePass() {
      let passExist = !!this.password;
      this.showPassError = !passExist;
      return passExist;
    },
    redirect() {
      if (this.check) {
        this.$router.push('/todo')
      }
    },
  }
}
</script>

<style lang="css">
@import "../assets/style/login.css";
</style>
