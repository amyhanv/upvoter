<template>
  <div id="log" class="container">
    <header id="app-header" class="text-center">
      <h1>
        <strong>Who wants to be a social credit supreme emperor? CANADA</strong>
      </h1>
    </header>
    <b-container>
      <b-row>
        <b-col cols="2">
          <b-form class="add-log">
            <div class="form-question">
              <h4 class="name">Amy</h4>
              <button v-on:click.prevent="upScore('amy')">↑</button>
              <button v-on:click.prevent="downScore('amy')">↓</button>
            </div>
          </b-form>
        </b-col>

        <b-col cols="2">
          <b-form class="add-log">
            <div class="form-question">
              <h4 class="name">Casey</h4>
              <button v-on:click.prevent="upScore('casey')">↑</button>
              <button v-on:click.prevent="downScore('casey')">↓</button>
            </div>
          </b-form>
        </b-col>

        <b-col cols="2">
          <b-form class="add-log">
            <div class="form-question">
              <h4 class="name">Kait</h4>
              <button v-on:click.prevent="upScore('kait')">↑</button>
              <button v-on:click.prevent="downScore('kait')">↓</button>
            </div>
          </b-form>
        </b-col>

        <b-col cols="2">
          <b-form class="add-log">
            <div class="form-question">
              <h4 class="name">Josh</h4>
              <button v-on:click.prevent="upScore('josh')">↑</button>
              <button v-on:click.prevent="downScore('josh')">↓</button>
            </div>
          </b-form>
        </b-col>

        <b-col cols="2">
          <b-form class="add-log">
            <div class="form-question">
              <h4 class="name">Court</h4>
              <button v-on:click.prevent="upScore('court')">↑</button>
              <button v-on:click.prevent="downScore('court')">↓</button>
            </div>
          </b-form>
        </b-col>

        <b-col cols="2">
          <b-form class="add-log">
            <div class="form-question">
              <h4 class="name">Leoza</h4>
              <button v-on:click.prevent="upScore('leoza')">↑</button>
              <button v-on:click.prevent="downScore('leoza')">↓</button>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
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
      // newVal: "",
    };
  },
  // IM SORRY
  methods: {
    upScore: function(name) {
      if (name == "amy") {
        fb.amyRef.push(1);
      }
      if (name == "kait") {
        fb.kaitRef.push(1);
      }
      if (name == "leoza") {
        console.log(name);
        fb.leozaRef.push(1);
      }
      if (name == "josh") {
        fb.joshRef.push(1);
      }
      if (name == "casey") {
        fb.caseyRef.push(1);
      }
      if (name == "court") {
        fb.courtRef.push(1);
      }
    },
    downScore: function(name) {
      if (name == "amy") {
        fb.amyRef.push(-1);
      }
      if (name == "kait") {
        fb.kaitRef.push(-1);
      }
      if (name == "leoza") {
        console.log(name);
        fb.leozaRef.push(-1);
      }
      if (name == "josh") {
        fb.joshRef.push(-1);
      }
      if (name == "casey") {
        fb.caseyRef.push(-1);
      }
      if (name == "court") {
        fb.courtRef.push(-1);
      }
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

.add-log {
  margin-top: 50px;
}

.form-question {
  margin: 30px 0;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.03);
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

button {
  border: none;
  background-color: white;
  padding: 10px;
  font-size: 30px;
}
</style>
