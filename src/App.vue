<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/AddNewTask">AddNewTask</router-link> |
      <router-link to="/TaskList">TaskList</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@import "assets/style.css";
</style>
