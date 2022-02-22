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
        <select @select="addTaskImportance">
          <option value="1">高</option>
          <option value="2">中</option>
          <option value="3">低</option>
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
    };
  },
  methods: {
    addTaskName(value) {
      this.taskName = value;
    },
    addTaskDate(value) {
      this.taskDate = value;
    },
    addTask() {
      if (this.taskName == "" || this.taskDate == "") {
        return;
      }
      this.$store.dispatch("setTaskName", this.taskName);
      this.$store.dispatch("setTaskDate", this.taskDate);
      console.log(this.taskImportance);
      this.$store.dispatch("setTaskImportance", this.taskImportance);
      this.taskName = "";
      this.taskDate = "";
      this.taskImportance = "";
    },
  },
};
</script>
