<template>
  <div id="app">
    <div class="row">
      <div class="col s6">
        <Input placeholder="Écrivez le nom d'un utilisateur Github" />
      </div>
      <div class="col s6">
        <div v-if="!result" id="bg-github"></div>
        <div v-else><Result /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "./components/Input.vue";
import Result from "./components/Result.vue";
import M from "materialize-css";
import store from "./store";

export default {
  name: "App",
  components: {
    Input,
    Result,
  },
  computed: {
    result: () => store.state.result,
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
#bg-github {
  background-image: url("../src/assets/bg-github.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
}

.row {
  margin-bottom: 0 !important;
}
</style>
