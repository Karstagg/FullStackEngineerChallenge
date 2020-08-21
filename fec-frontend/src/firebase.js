import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be whitelisted in the Firebase Console.
  url: 'http://localhost:3000/',
  //url: 'https://employee-reviewer-f9da9.web.app/',
  // This must be true.
  handleCodeInApp: true,
};

const firebaseConfig = {
  apiKey: "AIzaSyDjTFlIz7_wfVwX6kZeYsDiJ-SvWhFE_Es",
  authDomain: "employee-reviewer-f9da9.firebaseapp.com",
  databaseURL: "https://employee-reviewer-f9da9.firebaseio.com",
  projectId: "employee-reviewer-f9da9",
  storageBucket: "employee-reviewer-f9da9.appspot.com",
  messagingSenderId: "667244871579",
  appId: "1:667244871579:web:7bb47f5577c16993f5ab3e",
  measurementId: "G-CNXYPZ3N2K"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithEmail = (email) => {
  // Confirm the link is a sign-in with email link.
    auth.sendSignInLinkToEmail(email, actionCodeSettings).then(() => {
      window.localStorage.setItem('emailForSignIn', email);
    }).catch((e) => {
      console.log(e)
      alert('An error occurred sending link to email')
    })

}

export const completeSignInWithEmail = (location) => {
  if (auth.isSignInWithEmailLink(location)) {
    console.log('in')
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email = window.localStorage.getItem('emailForSignIn');
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt('Please provide your email for confirmation');
    }
    // The client SDK will parse the code from the link for you.
    auth.signInWithEmailLink(email, window.location.href).then(function(result) {
        window.localStorage.removeItem('emailForSignIn');
      }).catch((e) => {
        console.log(e)
      });
  }
}

export const signOut = () => {
  console.log("signout called")
  auth.signOut().then(() => {
    alert('signed out')
  })
}
