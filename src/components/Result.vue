<template>
  <div class="title" v-if="result !== null">
    <h1>{{ result.login }}</h1>
    <img :src="result.avatar_url" alt="Image" id="image" />
    <p>Nom: {{ result.name }}</p>
    <p>URL: {{ result.blog }}</p>
    <a :href="result.html_url">Lien vers le Github</a>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Result",
  computed: { result: () => store.state.result },
  methods: {
    getResult: () => store.dispatch("getResult"),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#image {
  width: 200px;
}
</style>
