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
        </div>
        <h2>Надо сделать:</h2>
        <ul class="task-list" v-if="itemsExist">
          <li class="task" v-for="(item, index) in items" :key="index">
            <button @click="remove(index)">Сделано</button>
            <textarea rows="6">{{ item }}</textarea>
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
    }
  },
  methods: {
    add(item) {
      this.items.push(this.item);
    },
    remove(index, items) {
      this.items.splice(index, 1);
    },
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
