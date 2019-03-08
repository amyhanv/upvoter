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

let amyRef = db.ref("amy-score");
let caseyRef = db.ref("casey-score");
let kaitRef = db.ref("kait-score");
let courtRef = db.ref("court-score");
let leozaRef = db.ref("leoza-score");
let joshRef = db.ref("josh-score");

export { db, amyRef, caseyRef, kaitRef, courtRef, leozaRef, joshRef };
