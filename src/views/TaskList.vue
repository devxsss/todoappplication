<template>
  <div class="todo">
    <form class="row g-3">
      <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">タスク名</label>
      </div>
      <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">期限</label>
      </div>
      <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">重要度</label>
      </div>
    </form>
    <div v-for="(task, index) in Tasks" :key="index" class="row g-5">
      <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">
          {{ task.taskName }}
        </label>
      </div>
      <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">
          {{ task.taskDate }}</label
        >
      </div>
      <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">
          {{ task.taskImportance }}</label
        >
      </div>
      <div v-if="Tasks.length" class="col-auto">
        <button class="btn btn-xs btn-info" @click="goToAddNewTask(task)">
          <span class="glyphicon glyphicon-pencil"></span>
        </button>
      </div>
      <div v-if="Tasks.length" class="col-auto">
        <button class="btn btn-xs btn-warning" v-on:click="removeTask(task)">
          <span class="glyphicon glyphicon-trash"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TaskList',
  computed: {
    Tasks() {
      const allTask = JSON.parse(JSON.stringify(this.$store.state.tasks));
      return allTask;
    },
    changeButtonText() {
      return this.editIndex === -1 ? '追加' : '編集';
    },
  },
  methods: {
    removeTask(task) {
      const index = this.Tasks.indexOf(task);
      let afterTask = [];
      if (this.Tasks.length >= 2) {
        afterTask = this.Tasks.splice(index, 1);
      } else {
        afterTask = [
          {
            taskName: '',
            taskDate: '',
            taskImportance: '',
          },
        ];
      }
      this.$store.dispatch('setTask', afterTask);
    },
    goToAddNewTask(task) {
      const index = this.Tasks.indexOf(task);
      let changeTask = [];
      changeTask = this.Tasks[index];
      this.$router.push({ name: 'AddNewTask', params: { changeTask, index } });
    },
  },
};
</script>
