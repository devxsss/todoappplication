<template>
  <div id="header">
    <div class="appWrapper">
      <span>TodoApp</span>
    </div>
    <div class="addNew">
      <b-row>
        <b-col>
          <b-icon
            icon="card-list"
            scale="2"
            style="color: #7952b3"
            @click="goToList()"
          >
          </b-icon>
        </b-col>
        <b-col lg="3">
          <b-icon
            icon="plus-circle"
            scale="2"
            style="color: #7952b3"
            @click="goToAddNewTask()"
          >
          </b-icon>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToList() {
      this.$router.push(`./list`);
    },
    goToAddNewTask() {
      this.$router.push(`./todo`);
    },
  },
};
</script>
