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
            <button @click="remove(item.id)">Сделано</button>
            <textarea rows="4">{{ item.name }}</textarea>
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
      item: '',
      items: [],
      showTaskError: false,
    }
  },
  async mounted() {
    // this.items = this.$store.getters.getItems;
    this.items = await this.getItemsDat();
  },
  methods: {
    add() {
      if (this.noneTask()) {
        // this.items.push(this.item);
        // this.$store.commit('setItems', this.items);

        fetch('http://localhost:4000/todo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
            text: this.item
          })
        }).then(async (response) => {
          this.items = await this.getItemsDat();
          console.log(this.items)
          this.item = '';
        });
      }
    },
    remove(index) {
      this.items.splice(index, 1);
      this.$store.commit('setItems', this.items);
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
