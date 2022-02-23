<template>
  <div class="todo">
    <div>
      <div>タスク名</div>
      <div>
        <ToDoInput :value="taskName" @input="addTaskName" />
      </div>
    </div>
    <div>
      <div>期限</div>
      <div>
        <ToDoInput type="date" :value="taskDate" @input="addTaskDate" />
      </div>
    </div>
    <div>
      <div>重要度</div>
      <div>
        <select @change="addTaskImportance">
          <option value="高">高</option>
          <option value="中">中</option>
          <option value="低">低</option>
        </select>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3" @click="addTask">
        タスク追加
      </button>
    </div>
  </div>
</template>

<script>
import ToDoInput from "../components/ToDoInput.vue";

export default {
  name: "AddNewTask",
  components: {
    ToDoInput,
  },
  data() {
    return {
      taskName: "",
      taskDate: "",
      taskImportance: "高",
    };
  },
  methods: {
    addTaskName(value) {
      this.taskName = value;
    },
    addTaskDate(value) {
      this.taskDate = value;
    },
    addTaskImportance(value) {
      this.taskImportance = value;
    },
    addTask() {
      if (this.taskName == "" || this.taskDate == "") {
        return;
      }
      let tasks = [];
      const newTask = {
        taskName: this.taskName,
        taskDate: this.taskDate,
        taskImportance: this.taskImportance,
      };
      if (this.$store.state.tasks[0].taskName != "") {
        this.$store.state.tasks.forEach((item) => {
          const taskItem = {
            taskName: item.taskName,
            taskDate: item.taskDate,
            taskImportance: item.taskImportance,
          };
          tasks.push(taskItem);
        });
      }
      tasks.push(newTask);
      this.$store.dispatch("setTask", tasks);
      this.taskName = "";
      this.taskDate = "";
      this.taskImportance = "高";
    },
  },
};
</script>
