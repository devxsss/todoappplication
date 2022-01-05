<template>
  <div id="header">
    <div class="appWrapper">
      <span>Todo App</span>
    </div>
    <div class="addNew">
      <b-icon
        icon="plus-circle"
        scale="2"
        style="color: #7952b3"
        @click="goToAddNewTask()"
      >
      </b-icon>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToAddNewTask() {
      this.$router.push(`./todo`);
    },
  },
};
</script>
