<template>
  <div class="input">
    <input
      type="text"
      :placeholder="placeholder"
      :value="inputValue"
      @input="setInputValue"
      @keyup.enter="getResult(inputValue)"
    />
    <input
      type="submit"
      @click="getResult(inputValue)"
      :disabled="inputValue.length < 1"
    />
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Input",
  props: {
    placeholder: String,
  },
  computed: {
    result: () => store.state.result,
    inputValue: () => store.state.inputValue,
  },
  methods: {
    setInputValue(event) {
      store.commit("setInputValue", event.target.value);
    },
    getResult(payload) {
      store.dispatch("fetchData", payload);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
