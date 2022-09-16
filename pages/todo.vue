<template>
  <body>
  <div class="container">
    <div class="header">
      <h1>Not Microsoft To Do</h1>
      <div class="login-route">
        <h2>
          <router-link to="/">Log in</router-link>
        </h2>
      </div>
    </div>
    <div id="app">
      <div class="content">
        <div class="input">
          <h2>Введите текст задачи:</h2>
          <input id="task-input" type="text" v-model="item" @keypress.enter="add">
          <button @click="add">Добавить</button>
          <p v-if="showTaskError">Вы не ввели задачу!</p>
        </div>
        <br>
        <h2>Надо сделать:</h2>
        <ul class="task-list" v-if="itemsExist">
          <li class="task" v-for="(item, index) in items" :key="index">
            <button @click="remove(index)">Сделано</button>
            <textarea rows="4">{{ item }}</textarea>
          </li>
        </ul>
        <div v-else>
          Ура! Всё сделано!
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      item: '',
      showTaskError: false,
    }
  },
  methods: {
    add() {
      if (this.noneTask()) {
        this.items.push(this.item);
        this.item = '';
      }
    },
    remove(index) {
      this.items.splice(index, 1);
    },
    noneTask() {
      let taskExist = !!this.item;
      this.showTaskError = !taskExist;
      return taskExist;
    }
  },
  computed: {
    itemsExist() {
      return this.items.length != 0;
    }
  }
}
</script>

<style lang="css">
@import "../assets/style/toDo.css";
</style>
