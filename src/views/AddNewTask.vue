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
        <select @change="addTaskImportance($event)" v-model="taskImportance">
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
import ToDoInput from '../components/ToDoInput.vue';

export default {
  name: 'AddNewTask',
  components: {
    ToDoInput,
  },
  data() {
    return {
      taskName: '',
      taskDate: '',
      taskImportance: '高',
      editIndex: -1,
    };
  },
  created: function () {
    if (this.$route.params.changeTask) {
      console.log(this.$route.params.index);
      this.editIndex = this.$route.params.index;
      this.taskName = this.$route.params.changeTask.taskName;
      this.taskDate = this.$route.params.changeTask.taskDate;
      this.taskImportance = this.$route.params.changeTask.taskImportance;
    }
  },
  methods: {
    addTaskName(value) {
      this.taskName = value;
    },
    addTaskDate(value) {
      this.taskDate = value;
    },
    addTaskImportance(event) {
      this.taskImportance = event.target.value;
    },
    addTask() {
      if (this.taskName == '' || this.taskDate == '') {
        return;
      }
      let tasks = [];
      if (this.editIndex == -1) {
        const newTask = {
          taskName: this.taskName,
          taskDate: this.taskDate,
          taskImportance: this.taskImportance,
        };
        if (this.$store.state.tasks[0].taskName != '') {
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
        this.$store.dispatch('setTask', tasks);
        this.taskName = '';
        this.taskDate = '';
        this.taskImportance = '高';
      } else if (this.$route.params.changeTask && this.editIndex != -1) {
        const editTask = {
          taskName: this.taskName,
          taskDate: this.taskDate,
          taskImportance: this.taskImportance,
        };
        this.$store.state.tasks.forEach((item) => {
          const taskItem = {
            taskName: item.taskName,
            taskDate: item.taskDate,
            taskImportance: item.taskImportance,
          };
          tasks.push(taskItem);
        });
        tasks[this.editIndex] = editTask;
        this.$store.dispatch('editTask', tasks);
      }
    },
  },
};
</script>
