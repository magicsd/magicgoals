import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDZkpqpMd_xmKwKSOuA-0KhP2EI_t86PI4",
  authDomain: "magicgoals-f8509.firebaseapp.com",
  databaseURL: "https://magicgoals-f8509.firebaseio.com",
  projectId: "magicgoals-f8509",
  storageBucket: "magicgoals-f8509.appspot.com",
  messagingSenderId: "847426531176"
};

export const firebaseApp = firebase.initializeApp(config)
export const goalRef = firebase.database().ref('goals')
export const completeGoalRef = firebase.database().ref('completeGoals')
