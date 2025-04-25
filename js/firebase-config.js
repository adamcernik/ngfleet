// Firebase configuration for NG Fleet website
// Replace these values with your actual Firebase project config

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Auth
const auth = firebase.auth();

// Initialize Firestore
const db = firebase.firestore();

// Google Auth Provider for sign-in
const googleProvider = new firebase.auth.GoogleAuthProvider(); 