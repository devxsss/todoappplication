<template>
  <div>
    <div v-for="(task, index) in Tasks" :key="index">
      {{ task.taskName }}
      {{ task.taskDate }}
      {{ task.taskImportance }}
      <button @click="removeTask(task)">削除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  computed: {
    Tasks() {
      const allTask = JSON.parse(JSON.stringify(this.$store.state.tasks));
      return allTask;
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
            taskName: "",
            taskDate: "",
            taskImportance: "",
          },
        ];
      }
      this.$store.dispatch("setTask", afterTask);
    },
  },
};
</script>
