<template>
  <div class="todo">
    <div>
      <div>タスク名</div>
      <div>
        <ToDoInput :value="value" @input="addTaskName" />
      </div>
    </div>
    <div>
      <div>期限</div>
      <div><ToDoInput type="date" :value="value" @input="addTaskDate" /></div>
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
      <button type="submit" class="btn btn-primary mb-3" @click="addTask()">
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
      value: "",
    };
  },
  methods: {
    addTaskName(event) {
      this.$store.dispatch("setTaskName", event);
    },
    addTaskDate(event) {
      this.$store.dispatch("setTaskDate", event);
    },
    addTaskImportance(event) {
      this.$store.dispatch("setTaskImportance", event);
    },
    addTask() {},
  },
};
</script>
