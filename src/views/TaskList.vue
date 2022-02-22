<template>
  <div class="about">
    {{ TaskList }}
  </div>
</template>


<script>

export default {
  name: "List",
  computed:{
     TaskList: function(){
      let taskList = []
      for (let i = 0; i < this.task.length; i++) {
        taskList[i] = {}
        taskList[i].name = this.task[i].taskName
        taskList[i].date = this.task[i].taskDate
        taskList[i].importance = this.task[i].taskImportance
      }
      return taskList
    }
  }
};
</script>