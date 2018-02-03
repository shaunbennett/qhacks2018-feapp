import * as firebase from 'firebase';

// FB.init({
//   appId: '926916724132817',
//   status: true,
//   xfbml: true,
//   version: 'v2.6'
// });

// function isUserEqual(facebookAuthResponse, firebaseUser) {
//   if (firebaseUser) {
//     var providerData = firebaseUser.providerData;
//     for (var i = 0; i < providerData.length; i++) {
//       if (
//         providerData[i].providerId ===
//           firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
//         providerData[i].uid === facebookAuthResponse.userID
//       ) {
//         // We don't need to re-auth the Firebase connection.
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function checkLoginState(event) {
//   if (event.authResponse) {
//     // User is signed-in Facebook.
//     var unsubscribe = firebase
//       .auth()
//       .onAuthStateChanged(function(firebaseUser) {
//         unsubscribe();
//         // Check if we are already signed-in Firebase with the correct user.
//         if (!isUserEqual(event.authResponse, firebaseUser)) {
//           // Build Firebase credential with the Facebook auth token.
//           var credential = firebase.auth.FacebookAuthProvider.credential(
//             event.authResponse.accessToken
//           );
//           // Sign in with the credential from the Facebook user.
//           firebase
//             .auth()
//             .signInWithCredential(credential)
//             .catch(function(error) {
//               // Handle Errors here.
//               var errorCode = error.code;
//               var errorMessage = error.message;
//               // The email of the user's account used.
//               var email = error.email;
//               // The firebase.auth.AuthCredential type that was used.
//               var credential = error.credential;
//               // ...
//               console.log('Error: ', error);
//             });
//         } else {
//           // User is already signed-in Firebase with the correct user.
//         }
//       });
//   } else {
//     // User is signed-out of Facebook.
//     firebase.auth().signOut();
//   }
// }

// (function(d, s, id) {
//   var js,
//     fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s);
//   js.id = id;
//   js.src =
//     'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=926916724132817&autoLogAppEvents=1';
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, 'script', 'facebook-jssdk');

// window.fbAsyncInit = function() {
//   // eslint-disable-next-line no-undef
//   FB.Event.subscribe('auth.authResponseChange', checkLoginState);
// };

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBjh3-iEbzMw30n2kq3vG86qFtQZ9rpDtQ',
  authDomain: 'qhacks-2018.firebaseapp.com',
  databaseURL: 'https://qhacks-2018.firebaseio.com',
  projectId: 'qhacks-2018',
  storageBucket: 'qhacks-2018.appspot.com',
  messagingSenderId: '679316067670'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

auth.onAuthStateChanged(function(user) {
  console.log('signed in.');
  console.log(user);
});

export { firebase, auth };
