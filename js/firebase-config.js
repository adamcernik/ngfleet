// Firebase configuration for NG Fleet website

// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCy-N3WwYTIvbUFGg1qhhb8S-3Eye5FQa0",
    authDomain: "ngfleet-d675c.firebaseapp.com",
    projectId: "ngfleet-d675c",
    storageBucket: "ngfleet-d675c.firebasestorage.app",
    messagingSenderId: "119274710610",
    appId: "1:119274710610:web:cba6c4e29628c4746d618b",
    measurementId: "G-FY161TT086"
};

// Log the initialization process
console.log('Initializing Firebase with config:', firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase app initialized:', app);

// Initialize analytics
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);
console.log('Firestore initialized:', db);

// Initialize Firebase services and export them
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// For backward compatibility with non-module scripts
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDb = db;
window.firebaseCollection = collection;
window.firebaseAddDoc = addDoc;

// Create a helper function to save registrations
window.saveToFirebase = async function(data) {
    try {
        console.log('saveToFirebase called with data:', data);
        const docRef = await addDoc(collection(db, "registrations"), data);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
    }
}; 