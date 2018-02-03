import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBjh3-iEbzMw30n2kq3vG86qFtQZ9rpDtQ",
  authDomain: "qhacks-2018.firebaseapp.com",
  databaseURL: "https://qhacks-2018.firebaseio.com",
  projectId: "qhacks-2018",
  storageBucket: "qhacks-2018.appspot.com",
  messagingSenderId: "679316067670"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
