// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });



const functions = require('firebase-functions');
const admin = require('firebase-admin');
const dateformat = require('dateformat');
admin.initializeApp(functions.config().firebase)
const ref = admin.database().ref()



exports.createUserAccount = functions.auth.user().onCreate(event =>{
  // data coming from the function comes in event.data

  const user = event.data
  const uid = user.uid
  const email = user.email
  const photoURL = user.photoURL || 'https://cdn.worldvectorlogo.com/logos/google-icon.svg'
  const displayName = user.displayName || ""
  const now = new Date();

  // Creates new user in Database
  const newUserRef = ref.child(`/users/${uid}`)
  return newUserRef.set({
    createdAt: dateformat(now),
    photoURL: photoURL,
    email: email,
    displayName: displayName,
    didTutorial: false,
    firstTime: true
  })
})
