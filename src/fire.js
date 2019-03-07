import Firebase from "firebase";

var config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "ethix-score.firebaseapp.com",
  databaseURL: "https://ethix-score.firebaseio.com",
  projectId: "ethix-score",
  storageBucket: "",
  messagingSenderId: "149775076544"
};
firebase.initializeApp(config);

// Create a Firebase instance
let app = Firebase.initializeApp(config);

// Retrieve database reference
let db = app.database();

// Retrieve a reference to nodes of each input field/questions
let upRef = db.ref("up");
let downRef = db.ref("down");

export { db, upRef, downRef };
