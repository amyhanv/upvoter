<template>
  <div id="result" class="container">
    <header id="app-header" class="text-center">
      <h1>
        <strong>Score Result</strong>
      </h1>
    </header>

    <b-container>
      <b-row class="result-row">
        <b-col class="result-column">
          <h2>RESULTS</h2>
          <p v-for="up in upscore">
            <a>{{up[".value"]}}</a>
          </p>down
          <p v-for="down in downscore">
            <a>{{down[".value"]}}</a>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
var fb = require("../fire.js");

export default {
  name: "Result",
  firebase: {
    // Variable gives us access to the items from the Firebase database
    upscore: fb.upRef,
    downscore: fb.downRef
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
h2 {
  padding-bottom: 15px;
}
.result-row {
  padding: 40px 20px;
}
.result-column {
  border-radius: 5px;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.03);
  margin: 20px;
  padding: 50px 35px;
}
</style>
