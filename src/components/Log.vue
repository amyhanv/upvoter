<template>
  <div id="log" class="container">
    <header id="app-header" class="text-center">
      <h1>
        <strong>Score Logger</strong>
      </h1>
    </header>

    <b-form id="add-log">
      <div class="form-question">
        <h4 for="food">UPDOOT ME</h4>
        <button v-on:click.prevent="upScore">up</button>
        <button v-on:click.prevent="downScore">down</button>
      </div>
    </b-form>
  </div>
</template>

<script>
// Reference fire.js config file for FirebaseDB
var fb = require("../fire.js");

export default {
  name: "Log",
  data() {
    return {
      // Variables from form
      // newFood: "",
    };
  },
  methods: {
    upScore: function() {
      console.log("up pressed");
      fb.upRef.push(1);
    },
    downScore: function() {
      console.log("down pressed");
      fb.downRef.push(1);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
#app {
  font-family: "Roboto Mono", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
  padding: 30px;
}

#nav {
  text-align: center;
  padding: 20px;
}

#nav li {
  float: left;
  padding: 0 20px;
  font-family: "Roboto Mono";
  text-transform: uppercase;
  color: #000;
  list-style-type: none;
}
#app-header {
  margin-top: 60px;
}
h1,
h2,
h6 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

#logo {
  margin: 0 auto;
  width: 150px;
  padding: 0;
  display: block;
}
#add-log {
  margin-top: 50px;
}
.range-style {
  width: 300px !important;
  padding-top: 3em;
}

.form-question {
  margin: 30px 0;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.03);
}

#radio-form {
  text-align: left;
  margin: 0 auto;
}

.input-form,
.vdatetime-input {
  outline: 0;
  background: #e6e6e6;
  border: none;
  border-radius: 5px;
  margin: 10px;
  outline: 0;
  padding: 10px;
  color: #6d777e;
  width: 300px;
}

#form-buttons {
  margin-top: 80px;
  margin-bottom: 80px;
}
#submit-log {
  background-color: white;
  color: #007bfe;
  border: 1px solid #007bfe;
}
#reset-log {
  border: 1px solid #9fb8ca;
  background-color: transparent;
  color: #9fb8ca;
}
.button-size {
  width: 100%;
  padding: 15px 20px !important;
  border-radius: 5px;
}
</style>
