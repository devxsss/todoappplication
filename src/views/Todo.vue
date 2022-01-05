<template>
  <div class="todo">
    <form class="row g-3">
      <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">タスク名 </label>
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="staticEmail2"
          value="email@example.com"
          @input="addTaskName"
        />
      </div>
      <div class="col-auto">
        <label for="inputPassword2" class="visually-hidden">期限</label>
        <input
          type="date"
          class="form-control"
          id="inputPassword2"
          placeholder="today"
          @input="addTaskDate"
        />
      </div>
      <div class="col-auto">
        <label for="importance" class="visually-hidden">重要度</label>
        <select @select="addTaskImportance">
          <option value="1">高</option>
          <option value="2">中</option>
          <option value="3">低</option>
        </select>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3"
        @click="addTask()">
          タスク追加
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    msg: String,
  },
  methods:{
    addTaskName(event){
      this.$store.dispatch('setTaskName', event)
    },
     addTaskDate(event){
      this.$store.dispatch('setTaskDate', event)
    },
     addTaskImportance(event){
      this.$store.dispatch('setTaskImportance', event)
    },
     addTask(){
    }
  }

};
</script>





